import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { pollsId, userId } = await params;
  const { authorizingUser } = await req.json();
  // if pollsId is not defined
  if (!pollsId) {
    return NextResponse.json(
      { error: "Poll id not found" },
      {
        status: 400,
      }
    );
  }
  // if userId is not defined
  if (!userId) {
    return NextResponse.json(
      { error: "User id is missing" },
      {
        status: 400,
      }
    );
  }
  // if authorizingUser is not defined
  if (!authorizingUser) {
    return NextResponse.json(
      { error: "Unauthorized Access" },
      {
        status: 401,
      }
    );
  }
  try {

  }catch(err){
      console.error(err);
      return NextResponse.json({error:"An error occurred while removing user for the poll"},{
          status: 400,
      })
  }
}
