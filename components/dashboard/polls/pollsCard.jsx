import { ArrowRight, Clock, Users } from "lucide-react";
export default function PollsCard({ poll }) {
  const {
    title,
    description,
    status,
    startDate,
    endDate,
    voters,
    completedVoters,
    userId,
  } = poll;
  return (
    <div
      key={poll._id}
      className="border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-xl transition-all hover:border-gray-300 dark:hover:border-slate-600"
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            poll.status === "Active"
              ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"
              : "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300"
          }`}
        >
          {poll.status}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {poll.title}
      </h3>
      <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">
        {poll.description}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
          <Clock className="h-4 w-4" />
          <span>{poll.createdAt}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
          <Users className="h-4 w-4" />
          <span>{poll?.voters?.length} voting</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-slate-500">
          By {poll.creatorName}
        </p>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-xs mb-1 text-gray-600 dark:text-slate-400">
          <span>Participation</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {poll.progress}%
          </span>
        </div>
        <div className="h-2 w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 dark:bg-blue-600 rounded-full transition-all"
            style={{ width: `${poll.progress}%` }}
          />
        </div>
      </div>

      <button className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-600 flex items-center justify-center gap-2 transition">
        View Poll
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
