import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { authorizationUserId } = req.json();
  const { pollsId, contestantId, userId } = await params;
  if (!authorizationUserId) {
    return NextResponse.json(
      { error: "User is not Authorized" },
      {
        status: 401,
      }
    );
  }
  // validate pollsId, contestantId, userId
  if (!pollsId) {
    return NextResponse.json(
      { error: "Poll ID is required" },
      {
        status: 400,
      }
    );
  }
  if (!contestantId) {
    return NextResponse.json(
      { error: "Contestant ID is required" },
      {
        status: 400,
      }
    );
  }
  if (!userId) {
    return NextResponse.json(
      { error: "User ID is required" },
      {
        status: 400,
      }
    );
  }

  try {
    //success message
    return NextResponse.json(
      { message: "User Successfully Updated" },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error was encountered" },
      {
        status: 400,
      }
    );
  }
}
