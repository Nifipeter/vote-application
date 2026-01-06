import { Trophy, CheckCircle2, Clock } from "lucide-react";

export default function ResultsPage() {
  // Static sample data
  const polls = [
    {
      _id: "1",
      title: "Student President Election 2025",
      description: "Vote for the next student president of our institution",
      status: "Completed",
      voters: Array(150).fill(null),
      completedVoters: Array(145).fill(null),
      contestants: [
        {
          _id: "pos1",
          position: "President",
          description: "Lead the student body",
          candidates: [
            {
              _id: "c1",
              name: "Alice Johnson",
              email: "alice@university.edu",
              votes: 62,
            },
            {
              _id: "c2",
              name: "Bob Smith",
              email: "bob@university.edu",
              votes: 55,
            },
            {
              _id: "c3",
              name: "Charlie Davis",
              email: "charlie@university.edu",
              votes: 28,
            },
          ],
        },
        {
          _id: "pos2",
          position: "Vice President",
          description: "Support the president",
          candidates: [
            {
              _id: "c4",
              name: "Diana Wilson",
              email: "diana@university.edu",
              votes: 71,
            },
            {
              _id: "c5",
              name: "Eve Martinez",
              email: "eve@university.edu",
              votes: 48,
            },
            {
              _id: "c6",
              name: "Frank Brown",
              email: "frank@university.edu",
              votes: 26,
            },
          ],
        },
        {
          _id: "pos3",
          position: "Treasurer",
          description: "Manage financial affairs",
          candidates: [
            {
              _id: "c7",
              name: "Grace Lee",
              email: "grace@university.edu",
              votes: 83,
            },
            {
              _id: "c8",
              name: "Henry Garcia",
              email: "henry@university.edu",
              votes: 40,
            },
            {
              _id: "c9",
              name: "Ivy Rodriguez",
              email: "ivy@university.edu",
              votes: 22,
            },
          ],
        },
      ],
    },
    {
      _id: "2",
      title: "Faculty Award Voting",
      description: "Select the best faculty member of the year",
      status: "Active",
      voters: Array(200).fill(null),
      completedVoters: Array(87).fill(null),
      contestants: [
        {
          _id: "pos4",
          position: "Best Professor Award",
          description: "Recognize excellent teaching",
          candidates: [
            {
              _id: "c10",
              name: "Dr. Michael Anderson",
              email: "m.anderson@university.edu",
              votes: 45,
            },
            {
              _id: "c11",
              name: "Prof. Sarah Taylor",
              email: "s.taylor@university.edu",
              votes: 32,
            },
            {
              _id: "c12",
              name: "Dr. James Wilson",
              email: "j.wilson@university.edu",
              votes: 10,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-5xl font-black text-gray-900 dark:text-white">
              Results
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Live voting results and analytics
          </p>
        </div>

        {/* Polls */}
        <div className="space-y-12">
          {polls.map((poll) => (
            <PollResults key={poll._id} poll={poll} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PollResults({ poll }) {
  const totalVoters = poll.voters?.length || 0;
  const completedVoters = poll.completedVoters?.length || 0;
  const participation =
    totalVoters > 0 ? (completedVoters / totalVoters) * 100 : 0;

  return (
    <div className="space-y-8">
      {/* Poll Header Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
        <div className="flex items-start justify-between gap-6 mb-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {poll.title}
            </h2>
            <p className="text-gray-600 dark:text-slate-400 text-lg">
              {poll.description}
            </p>
          </div>
          <div
            className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap flex items-center gap-2 ${
              poll.status === "Active"
                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            }`}
          >
            {poll.status === "Active" ? (
              <Clock className="h-4 w-4" />
            ) : (
              <CheckCircle2 className="h-4 w-4" />
            )}
            {poll.status}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatCard label="Total Voters" value={totalVoters} />
          <StatCard label="Votes Cast" value={completedVoters} />
          <StatCard
            label="Participation"
            value={`${Math.round(participation)}%`}
          />
          <StatCard label="Positions" value={poll.contestants?.length || 0} />
        </div>
      </div>

      {/* Positions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {poll.contestants?.map((position) => (
          <PositionCard key={position._id} position={position} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl p-4 border border-gray-200 dark:border-slate-600">
      <p className="text-sm font-medium text-gray-600 dark:text-slate-400 mb-2">
        {label}
      </p>
      <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}

function PositionCard({ position }) {
  const totalVotes =
    position.candidates?.reduce(
      (sum, candidate) => sum + (candidate.votes || 0),
      0
    ) || 0;

  const sortedCandidates = [...(position.candidates || [])].sort(
    (a, b) => (b.votes || 0) - (a.votes || 0)
  );

  const winner = sortedCandidates[0];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{position.position}</h3>
        <p className="text-indigo-100">{position.description}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Winner Highlight */}
        {winner && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border-2 border-amber-200 dark:border-amber-700">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🏆</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-1">
                  WINNER
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white truncate">
                  {winner.name}
                </p>
                <p className="text-3xl font-black text-amber-600 dark:text-amber-400 mt-1">
                  {winner.votes}{" "}
                  <span className="text-sm font-medium">
                    ({((winner.votes / totalVotes) * 100).toFixed(1)}%)
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* All Candidates */}
        <div className="space-y-3">
          {sortedCandidates.map((candidate, index) => {
            const percentage =
              totalVotes > 0 ? ((candidate.votes || 0) / totalVotes) * 100 : 0;

            return (
              <div key={candidate._id} className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold text-gray-700 dark:text-slate-300 w-6 text-center">
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white truncate">
                          {candidate.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-slate-500 truncate">
                          {candidate.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {candidate.votes}
                    </p>
                    <p className="text-xs font-semibold text-gray-600 dark:text-slate-400">
                      {percentage.toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      index === 0
                        ? "bg-gradient-to-r from-amber-400 to-orange-500"
                        : index === 1
                        ? "bg-gradient-to-r from-gray-400 to-gray-500"
                        : index === 2
                        ? "bg-gradient-to-r from-orange-400 to-orange-500"
                        : "bg-gradient-to-r from-blue-400 to-indigo-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Votes */}
        <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 dark:text-slate-300">
              Total Votes
            </span>
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {totalVotes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
