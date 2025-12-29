import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { userId } = await req.json();
  try {
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Unable to join poll" },
      {
        status: 400,
      }
    );
  }
}
