import { NextResponse } from "next/server";

export async function POST(req) {
  const {} = await req.json();
  return NextResponse.json(
    { message: "POST new Polls" },
    {
      status: 200,
    }
  );
}
