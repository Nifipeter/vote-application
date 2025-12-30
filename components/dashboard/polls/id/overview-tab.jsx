import {
  Mail,
  Building,
  Calendar,
  Clock,
  TrendingUp,
  Award,
  Crown,
} from "lucide-react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatDateShort = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    return `${diffHours} hour${diffHours > 1 ? "s" : ""}`;
  }
  return `${diffDays} day${diffDays > 1 ? "s" : ""}`;
};

export default function OverviewTab({ pollData }) {
  const totalVotes = pollData.candidates.reduce((sum, c) => sum + c.votes, 0);
  const leadingCandidate = pollData.candidates.reduce((prev, current) =>
    prev.votes > current.votes ? prev : current
  );

  return (
    <div className="space-y-6">
      {/* Timeline & Duration */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                Start Date
              </p>
              <p className="text-sm font-bold text-blue-900 dark:text-white">
                {formatDateShort(pollData.startDate)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-purple-600 dark:bg-purple-500 flex items-center justify-center">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                End Date
              </p>
              <p className="text-sm font-bold text-purple-900 dark:text-white">
                {formatDateShort(pollData.endDate)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-amber-600 dark:bg-amber-500 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                Duration
              </p>
              <p className="text-sm font-bold text-amber-900 dark:text-white">
                {calculateDuration(pollData.startDate, pollData.endDate)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Voting Eligibility */}
      {(pollData.rules.emailPrefix ||
        pollData.rules.departmentCodes.length > 0) && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-700 px-6 py-4 border-b border-gray-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Voting Eligibility Criteria
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pollData.rules.emailPrefix && (
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      Email Domain Restriction
                    </p>
                    <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
                      Only users with the following email domain can vote:
                    </p>
                    <div className="inline-block px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <code className="text-sm font-mono font-semibold text-blue-700 dark:text-blue-300">
                        {pollData.rules.emailPrefix}
                      </code>
                    </div>
                  </div>
                </div>
              )}
              {pollData.rules.departmentCodes.length > 0 && (
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                    <Building className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      Department Access
                    </p>
                    <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
                      Restricted to the following departments:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pollData.rules.departmentCodes.map((dept) => (
                        <span
                          key={dept}
                          className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-lg uppercase tracking-wide"
                        >
                          {dept}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Current Standings */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden">
        <div className="bg-linear-to-r from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-700 px-6 py-4 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
              Live Results & Rankings
            </h2>
            <div className="text-sm">
              <span className="text-gray-600 dark:text-slate-400">
                Total Votes:{" "}
              </span>
              <span className="font-bold text-gray-900 dark:text-white">
                {totalVotes}
              </span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-5">
            {pollData.candidates.map((candidate, index) => (
              <div key={candidate.id} className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`relative h-12 w-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 ${
                      index === 0
                        ? "bg-linear-to-br from-yellow-400 to-yellow-600 text-white shadow-lg"
                        : index === 1
                        ? "bg-linear-to-br from-gray-300 to-gray-400 text-gray-800"
                        : index === 2
                        ? "bg-linear-to-br from-orange-400 to-orange-500 text-white"
                        : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-400"
                    }`}
                  >
                    {index === 0 && (
                      <Crown className="h-6 w-6 absolute -top-2 -right-2 text-yellow-500" />
                    )}
                    #{index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                          {candidate.name}
                          {candidate.id === leadingCandidate.id && (
                            <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                              Leading
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400">
                          {candidate.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {candidate.votes}
                        </p>
                        <p className="text-xs font-semibold text-gray-500 dark:text-slate-500">
                          {candidate.percentage}% share
                        </p>
                      </div>
                    </div>
                    <div className="relative h-3 w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          index === 0
                            ? "bg-linear-to-r from-green-500 to-emerald-600"
                            : index === 1
                            ? "bg-linear-to-r from-blue-500 to-blue-600"
                            : "bg-linear-to-r from-purple-500 to-purple-600"
                        }`}
                        style={{ width: `${candidate.percentage}%` }}
                      >
                        <div className="h-full w-full bg-linear-to-r from-white/0 via-white/20 to-white/0 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
