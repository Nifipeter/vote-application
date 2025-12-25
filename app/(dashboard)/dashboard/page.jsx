"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-lg font-bold text-white shadow-lg">
                V
              </div>
              <div className="hidden sm:block">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Votely
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Dashboard
                </p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/dashboard"
                onClick={() => setActiveNav("dashboard")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeNav === "dashboard"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/polls"
                onClick={() => setActiveNav("polls")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeNav === "polls"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                My Polls
              </Link>
              <Link
                href="/analytics"
                onClick={() => setActiveNav("analytics")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeNav === "analytics"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                Analytics
              </Link>
              <Link
                href="/settings"
                onClick={() => setActiveNav("settings")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeNav === "settings"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                Settings
              </Link>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40">
                + New Poll
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold shadow-lg cursor-pointer hover:scale-105 transition-transform">
                U
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
              <p className="text-blue-100">
                Here&apos;s what&apos;s happening with your polls today
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <p className="text-sm text-blue-100">This Week</p>
                <p className="text-2xl font-bold">+28%</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <p className="text-sm text-blue-100">Engagement</p>
                <p className="text-2xl font-bold">92%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                +12%
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
              Total Polls
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-white">
              24
            </p>
          </div>

          <div className="group bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-xl hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                Active
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
              Active Polls
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-white">
              16
            </p>
          </div>

          <div className="group bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                +28%
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
              Total Votes
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-white">
              1,847
            </p>
          </div>

          <div className="group bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                +15%
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
              Participants
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-white">
              532
            </p>
          </div>
        </div>

        {/* Recent Polls */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg">
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-700 bg-gradient-to-r from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Recent Polls
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Your latest poll activity
                </p>
              </div>
              <Link
                href="/polls"
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                View All →
              </Link>
            </div>
          </div>
          <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {/* Poll Item 1 */}
            <div className="p-6 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all group cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 shrink-0">
                    Q1
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      What&apos;s your favorite programming language?
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        2 days ago
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                          />
                        </svg>
                        145 votes
                      </span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full shadow-sm">
                  Active
                </span>
              </div>
            </div>

            {/* Poll Item 2 */}
            <div className="p-6 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all group cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 shrink-0">
                    Q2
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Best time for team meetings?
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        4 days ago
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                          />
                        </svg>
                        98 votes
                      </span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full shadow-sm">
                  Active
                </span>
              </div>
            </div>

            {/* Poll Item 3 */}
            <div className="p-6 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all group cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/30 shrink-0">
                    Q3
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Office or Remote work?
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        1 week ago
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                          />
                        </svg>
                        234 votes
                      </span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1.5 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-600 text-zinc-700 dark:text-zinc-400 text-xs font-semibold rounded-full shadow-sm">
                  Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Create New Poll</h3>
            <p className="text-sm text-blue-100">
              Start gathering opinions with a new poll
            </p>
          </div>

          <div className="group bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">View Analytics</h3>
            <p className="text-sm text-purple-100">
              Deep dive into your poll performance
            </p>
          </div>

          <div className="group bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Share & Collaborate</h3>
            <p className="text-sm text-green-100">
              Invite others to vote on your polls
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
