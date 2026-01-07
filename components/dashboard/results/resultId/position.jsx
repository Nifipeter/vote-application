import { Users } from "lucide-react";
export default function ResultPosition({ poll }) {
  return (
    <>
      {poll.contestants?.map((position) => {
        const totalVotes =
          position.candidates?.reduce(
            (sum, candidate) => sum + (candidate.votes || 0),
            0
          ) || 0;

        const sortedCandidates = [...(position.candidates || [])].sort(
          (a, b) => (b.votes || 0) - (a.votes || 0)
        );

        return (
          <div
            key={position._id}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-indigo-600 to-blue-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-1 capitalize">
                {position.position}
              </h3>
              <p className="text-indigo-100">{position.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>Total Votes: {totalVotes}</span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wider">
                      Candidate
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wider">
                      Votes
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wider">
                      Percentage
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wider">
                      Progress
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                  {sortedCandidates.map((candidate, index) => {
                    const percentage =
                      totalVotes > 0
                        ? ((candidate.votes || 0) / totalVotes) * 100
                        : 0;
                    const isWinner = index === 0;

                    return (
                      <tr
                        key={candidate._id}
                        className={`hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors ${
                          isWinner
                            ? "bg-amber-50 dark:bg-amber-900/10"
                            : "bg-white dark:bg-slate-800"
                        }`}
                      >
                        {/* Rank */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {isWinner ? (
                              <div className="flex items-center gap-2">
                                <span className="text-2xl">🏆</span>
                                <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
                                  #1
                                </span>
                              </div>
                            ) : (
                              <span className="text-sm font-semibold text-gray-700 dark:text-slate-300">
                                #{index + 1}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Candidate Name */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">
                            {candidate.name}
                          </div>
                        </td>

                        {/* Email */}
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-600 dark:text-slate-400 truncate max-w-xs">
                            {candidate.email}
                          </div>
                        </td>

                        {/* Votes */}
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {candidate.votes}
                          </div>
                        </td>

                        {/* Percentage */}
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div
                            className={`text-sm font-semibold ${
                              isWinner
                                ? "text-amber-600 dark:text-amber-400"
                                : "text-gray-600 dark:text-slate-400"
                            }`}
                          >
                            {percentage.toFixed(1)}%
                          </div>
                        </td>

                        {/* Progress Bar */}
                        <td className="px-6 py-4">
                          <div className="w-32">
                            <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${"bg-linear-to-r from-amber-400 to-orange-500"}`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
}
