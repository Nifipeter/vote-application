import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function InvitationError({ errorType = "not_found" }) {
  const errorConfig = {
    not_found: {
      title: "Poll Not Found",
      message:
        "The poll invitation you're looking for doesn't exist or has been removed.",
      description:
        "It may have expired, been deleted, or the link might be incorrect.",
      icon: AlertCircle,
    },
    expired: {
      title: "Invitation Expired",
      message: "This poll invitation is no longer available.",
      description:
        "The voting period has ended or this invitation has expired.",
      icon: AlertCircle,
    },
    unauthorized: {
      title: "Access Denied",
      message: "You don't have permission to access this poll.",
      description: "Check that you meet the voting eligibility requirements.",
      icon: AlertCircle,
    },
  };

  const config = errorConfig[errorType] || errorConfig.not_found;
  const Icon = config.icon;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Error Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl dark:shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-700">
          {/* Top Gradient Bar */}
          <div className="h-2 bg-gradient-to-r from-red-600 via-red-500 to-orange-600"></div>

          {/* Content */}
          <div className="p-8 sm:p-12 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <Icon className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              {config.title}
            </h1>
            <p className="text-gray-600 dark:text-slate-400 text-lg mb-2">
              {config.message}
            </p>
            <p className="text-gray-500 dark:text-slate-500 text-sm mb-8">
              {config.description}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-slate-700 my-8"></div>

            {/* Helpful Tips */}
            <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-5 mb-8">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
                What You Can Do
              </h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-400">
                  <span className="text-red-600 dark:text-red-400 font-bold">
                    •
                  </span>
                  <span>Check the invitation link for typos</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-400">
                  <span className="text-red-600 dark:text-red-400 font-bold">
                    •
                  </span>
                  <span>Ask the sender to resend the invitation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-400">
                  <span className="text-red-600 dark:text-red-400 font-bold">
                    •
                  </span>
                  <span>Go to your polls dashboard</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/dashboard/polls"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-700 dark:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Home className="h-5 w-5" />
                Go to Polls
              </Link>
              <Link
                href="/dashboard"
                className="w-full px-6 py-3 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Dashboard
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 sm:px-12 py-4 bg-gray-50 dark:bg-slate-700/50 border-t border-gray-100 dark:border-slate-700 text-center text-xs text-gray-600 dark:text-slate-400">
            Error Code: {errorType.toUpperCase()}
          </div>
        </div>
      </div>
    </main>
  );
}
