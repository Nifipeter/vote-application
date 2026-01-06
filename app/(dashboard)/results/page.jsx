import { TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

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
          candidates: [
            { _id: "c1", name: "Alice Johnson", votes: 62 },
            { _id: "c2", name: "Bob Smith", votes: 55 },
            { _id: "c3", name: "Charlie Davis", votes: 28 },
          ],
        },
        {
          _id: "pos2",
          position: "Vice President",
          candidates: [
            { _id: "c4", name: "Diana Wilson", votes: 71 },
            { _id: "c5", name: "Eve Martinez", votes: 48 },
            { _id: "c6", name: "Frank Brown", votes: 26 },
          ],
        },
        {
          _id: "pos3",
          position: "Treasurer",
          candidates: [
            { _id: "c7", name: "Grace Lee", votes: 83 },
            { _id: "c8", name: "Henry Garcia", votes: 40 },
            { _id: "c9", name: "Ivy Rodriguez", votes: 22 },
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
          candidates: [
            { _id: "c10", name: "Dr. Michael Anderson", votes: 45 },
            { _id: "c11", name: "Prof. Sarah Taylor", votes: 32 },
            { _id: "c12", name: "Dr. James Wilson", votes: 10 },
          ],
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen px-6 mb-10 py-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Results
            </h1>
          </div>
          <p className="text-gray-600 dark:text-slate-400">
            View detailed results for each poll you joined
          </p>
        </header>

        {!polls.length && (
          <div className="border border-dashed border-gray-300 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-900 px-6 py-12 text-center shadow-sm">
            <div className="mx-auto h-14 w-14 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No results yet
            </h3>
            <p className="text-gray-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
              Join a poll to see voting results and analytics.
            </p>
          </div>
        )}

        {!!polls.length && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {polls.map((poll) => (
              <ResultCard key={poll._id} poll={poll} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function ResultCard({ poll }) {
  const totalVoters = poll.voters?.length || 0;
  const completedVoters = poll.completedVoters?.length || 0;
  const participation =
    totalVoters > 0 ? (completedVoters / totalVoters) * 100 : 0;

  // Get winner from first position
  const firstPosition = poll.contestants?.[0];
  const winner = firstPosition?.candidates?.sort(
    (a, b) => (b.votes || 0) - (a.votes || 0)
  )[0];

  return (
    <div className="border border-gray-200   dark:border-slate-700 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-xl transition-all hover:border-gray-300 dark:hover:border-slate-600 min-h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            poll.status === "Active"
              ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"
              : "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
          }`}
        >
          {poll.status}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {poll.title}
      </h3>
      <p className="text-gray-600 dark:text-slate-400 text-sm mb-4 grow">
        {poll.description}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-slate-400">Voters</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalVoters}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-slate-400">Positions</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {poll.contestants?.length || 0}
          </span>
        </div>
        {winner && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-slate-400">
              Leading: {winner.name}
            </span>
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              {winner.votes} votes
            </span>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4 space-y-3 border-t border-gray-200 dark:border-slate-700">
        <div>
          <div className="flex items-center justify-between text-xs mb-1 text-gray-600 dark:text-slate-400">
            <span>Participation</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {Math.round(participation)}%
            </span>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-indigo-500 to-blue-500 rounded-full transition-all"
              style={{ width: `${participation}%` }}
            />
          </div>
        </div>

        <Link
          href={`/results/${poll._id}`}
          className="w-full rounded-lg border cursor-pointer border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-600 flex items-center justify-center gap-2 transition"
        >
          View Results
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
