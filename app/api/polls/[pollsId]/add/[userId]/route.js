import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectdatabase";
import User from "@/libs/models/user.models";

export async function PUT(req, { params }) {
  const { userId: authorizationUserId } = await req.json();
  const { pollsId, userId } = await params;
  // check if no user authorizationUserId exist
  if (!authorizationUserId) {
    return NextResponse.json(
      { error: "User is not authorized" },
      {
        status: 401,
      }
    );
  }
  // check if poll id doesnt exist
  if (!pollsId) {
    return NextResponse.json(
      { error: "Polls not found" },
      {
        status: 400,
      }
    );
  }
  // check the user they want to add id
  if (!userId) {
    return NextResponse.json(
      { error: "User does not exist" },
      {
        status: 400,
      }
    );
  }
  try {
    await connectDatabase();
    // check if the user even exist
    const user = await User.findById(userId);
    // if user does not exist
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        {
          status: 400,
        }
      );
    }
    // check if user adding him exist
    const authorizationUser = await User.findById(authorizationUserId);
    if (!authorizationUser) {
      return NextResponse.json(
        { error: "Invalid Parameters" },
        {
          status: 400,
        }
      );
    }
    // check if the user has access to the poll
      const authorizationUserVoteInfo = authorizationUser.voteInformation
      // return successfully added user
    return NextResponse.json(
      { message: "Add a new user", authorizationUserVoteInfo },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error occurred while adding user" },
      {
        status: 400,
      }
    );
  }
}
