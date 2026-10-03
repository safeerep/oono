import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import { Student } from '@/models/Student';

// GET all registered students with populated school data
export async function GET() {
    try {
        await dbConnect();
        const students = await Student.find({}).populate('schoolId', 'name district').sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: students });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

// POST create new student registration
export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json();
        console.log("we are in post safee..", body)
        const newStudent = await Student.create(body);
        return NextResponse.json({ success: true, data: newStudent }, { status: 201 });
    } catch (error: any) {
        console.log("something went wrong in adding a new student", error)
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}