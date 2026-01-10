import ResultCard from "@/components/dashboard/results/resultcard";
import { TrendingUp } from "lucide-react";
import { BASE_URL } from "@/libs/config/configuration";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ResultsPage() {
  const request = await fetch(`${BASE_URL}/api/polls`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });
  const response = await request.json();
  if (!request?.ok || response?.error) return redirect("/polls");
  const { polls } = response;

  return (
    <main className="min-h-screen px-6 pb-10 py-8 transition-colors">
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
