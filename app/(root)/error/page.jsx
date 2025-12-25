import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-red-600 dark:text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Oops!
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Something went wrong
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
            We encountered an unexpected error. Don&apos;t worry, it&apos;s not
            your fault. Try going back or return to the homepage.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            Dashboard
          </Link>
        </div>

        {/* Error Code */}
        <p className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">
          ERROR_CODE: 500
        </p>
      </div>
    </div>
  );
}
