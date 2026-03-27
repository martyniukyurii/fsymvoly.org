import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Volunteer } from "@/models/Volunteer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, skills, comment } = body;

    if (!name || !contact) {
      return NextResponse.json({ error: "Name and contact are required" }, { status: 400 });
    }

    await connectDB();
    const volunteer = await Volunteer.create({ name, contact, skills: skills || [], comment });

    return NextResponse.json({ success: true, id: volunteer._id }, { status: 201 });
  } catch (error) {
    console.error("Volunteer API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
