import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "6");
    const page = parseInt(searchParams.get("page") || "1");
    const skip = (page - 1) * limit;

    await connectDB();
    const posts = await Post.find({})
      .sort({ createdTime: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Post.countDocuments();

    return NextResponse.json({ posts, total, page, limit }, { status: 200 });
  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
