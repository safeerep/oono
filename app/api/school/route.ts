import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import { School } from "@/models/School";

// GET all partner schools
export async function GET() {
  try {
    await dbConnect();
    const schools = await School.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: schools });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST create new school
export async function POST(request: NextRequest) {
  try {
      await dbConnect();
      console.log("hy safee we are in post")
    // console.log()
    const body = await request.json();
    const newSchool = await School.create(body);
    return NextResponse.json(
      { success: true, data: newSchool },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("something went wrong in adding a newschool", error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
