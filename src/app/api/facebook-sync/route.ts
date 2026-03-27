import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";

const FB_PAGE_ID = "fsymvoly";
const FB_TOKEN = process.env.FB_PAGE_TOKEN;

interface FBPost {
  id: string;
  message?: string;
  story?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
  likes?: { summary: { total_count: number } };
  comments?: { summary: { total_count: number } };
}

async function fetchFacebookPosts(): Promise<FBPost[]> {
  if (!FB_TOKEN) {
    console.warn("FB_PAGE_TOKEN not set, skipping Facebook sync");
    return [];
  }

  const fields = "id,message,story,created_time,full_picture,permalink_url,likes.summary(true),comments.summary(true)";
  const url = `https://graph.facebook.com/v19.0/${FB_PAGE_ID}/posts?fields=${fields}&limit=50&access_token=${FB_TOKEN}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Facebook API error: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  return data.data || [];
}

export async function GET(req: NextRequest) {
  // Verify cron secret for security
  const authHeader = req.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const posts = await fetchFacebookPosts();

    if (posts.length === 0) {
      return NextResponse.json({ message: "No FB token or no posts", synced: 0 });
    }

    await connectDB();

    let synced = 0;
    for (const post of posts) {
      const text = post.message || post.story || "";
      if (!text.trim()) continue;

      await Post.findOneAndUpdate(
        { postId: post.id },
        {
          postId: post.id,
          message: text,
          createdTime: new Date(post.created_time),
          fullPicture: post.full_picture,
          permalink: post.permalink_url,
          likes: post.likes?.summary?.total_count || 0,
          comments: post.comments?.summary?.total_count || 0,
        },
        { upsert: true, new: true }
      );
      synced++;
    }

    return NextResponse.json({ success: true, synced });
  } catch (error) {
    console.error("Facebook sync error:", error);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
