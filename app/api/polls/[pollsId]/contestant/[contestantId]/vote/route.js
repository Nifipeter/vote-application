import { connectDatabase } from "@/libs/connectdatabase";
import { NextResponse } from "next/server";
import Contestant from "@/libs/models/contestant.models";
import Polls from "@/libs/models/polls.models";
import User from "@/libs/models/user.models";

export async function PUT(req, { params }) {
  const { pollsId, contestantId } = await params;
  const { userId, candidateUserId } = await req.json();
  // if no userId
  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized Access" },
      {
        status: 401,
      }
    );
  }
  // if no pollsId
  if (!pollsId) {
    return NextResponse.json(
      { error: "Polls Id is not defined" },
      {
        status: 400,
      }
    );
  }
  // if no contestantId
  if (!contestantId) {
    return NextResponse.json(
      { error: "Polls contestantId is not defined" },
      {
        status: 400,
      }
    );
  }
  // if no candidateUserId
  if (!candidateUserId) {
    return NextResponse.json(
      { error: "Candidate User Id is not defined" },
      {
        status: 401,
      }
    );
  }
  try {
    await connectDatabase();
    // check if the user who wants to vote exist
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        {
          status: 400,
        }
      );
    }
    // check if the candidate the user wants to vote for exist
    const candidate = await User.findById(candidateUserId);
    if (!candidate) {
      return NextResponse.json(
        { error: "Candidate does not exist" },
        {
          status: 400,
        }
      );
    }
    // check if the poll exist
    const poll = await Polls.findById(pollsId);
    if (!poll) {
      return NextResponse.json(
        { error: "Poll does not exist" },
        {
          status: 400,
        }
      );
    }
    // check if the candidate and user belong to the poll
    const userBelongToPoll = poll?.voters?.find((voter) => {
      return voter.toString() === userId.toString();
    });
    if (!userBelongToPoll) {
      return NextResponse.json(
        { error: "User does not belong to this poll" },
        {
          status: 400,
        }
      );
    }
    const candidateBelongToPoll = poll?.voters?.find((voter) => {
      return voter.toString() === candidateUserId.toString();
    });
    if (!candidateBelongToPoll) {
      return NextResponse.json(
        { error: "Candidate does not belong to this poll" },
        {
          status: 400,
        }
      );
    }
    

    //success
    return NextResponse.json(
      { message: "Vote recorded successfully" },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "An error was encountered while voting" },
      { status: 400 }
    );
  }
}
// export async function PUT(req, { params }) {
//   const { pollsId, contestantId } = await params;
//   const { userId, candidateUserId } = await req.json();

//   // validate inputs
//   if (!pollsId) {
//     return NextResponse.json({ error: "Poll ID is required" }, { status: 400 });
//   }
//   if (!contestantId) {
//     return NextResponse.json(
//       { error: "Contestant ID is required" },
//       { status: 400 }
//     );
//   }
//   if (!userId) {
//     return NextResponse.json(
//       { error: "User ID is required to vote" },
//       { status: 400 }
//     );
//   }
//   if (!candidateUserId) {
//     return NextResponse.json(
//       { error: "Candidate ID is required" },
//       { status: 400 }
//     );
//   }

//   try {
//     await connectDatabase();

//     // Check if the poll exists in the database
//     const poll = await Polls.findById(pollsId);
//     if (!poll) {
//       return NextResponse.json({ error: "No poll found." }, { status: 400 });
//     }

//     // Check if the user exists
//     const user = await User.findById(userId);
//     if (!user) {
//       return NextResponse.json(
//         { error: "User does not exist" },
//         { status: 400 }
//       );
//     }

//     // Check if user belongs to the poll
//     const userBelongs = user?.voteInformation.find((info) => {
//       return info?.pollId?.toString() === pollsId.toString();
//     });
//     if (!userBelongs) {
//       return NextResponse.json(
//         { error: "User doesnt belong to this poll" },
//         { status: 400 }
//       );
//     }

//     // Find the contestant (position)
//     const contestant = await Contestant.findOne({
//       _id: contestantId,
//       pollId: pollsId,
//     });
//     if (!contestant) {
//       return NextResponse.json(
//         { error: "Position not found in this poll" },
//         { status: 404 }
//       );
//     }

//     // Check if user has already voted for this position
//     if (contestant.voters.includes(userId)) {
//       return NextResponse.json(
//         { error: "You have already voted for this position" },
//         { status: 400 }
//       );
//     }

//     // Check if the candidate exists in this position
//     const candidateExists = contestant.candidates.some(
//       (candidate) => candidate.userId.toString() === candidateUserId
//     );
//     if (!candidateExists) {
//       return NextResponse.json(
//         { error: "Candidate not found in this position" },
//         { status: 404 }
//       );
//     }

//     // Update the contestant: increment votes for the candidate and add voter
//     await Contestant.updateOne(
//       { _id: contestantId, "candidates.userId": candidateUserId },
//       {
//         $inc: { "candidates.$.votes": 1 },
//         $addToSet: { voters: userId },
//       }
//     );

//     // Add user to completedVoters in Polls (only once, even if voting in multiple positions)
//     await Polls.updateOne(
//       { _id: pollsId },
//       { $addToSet: { completedVoters: userId } }
//     );

//     return NextResponse.json(
//       { message: "Vote recorded successfully" },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(
//       { error: "An error was encountered while voting" },
//       { status: 400 }
//     );
//   }
// }
