"use client";

import InvitationHeader from "@/components/dashboard/polls/invite/header";
import { Calendar, User, CheckCircle, ArrowRight, Clock } from "lucide-react";

export default function InvitationPage({ params }) {
  // Sample poll data
  const pollData = {
    id: 1,
    title: "Election for Company Leadership Team",
    description:
      "Vote for your preferred candidates for the upcoming company leadership positions. Each vote is important and will help shape our organization's future direction.",
    createdBy: {
      name: "HR Department",
      email: "hr@company.com",
      avatar: "HR",
    },
    startDate: "2025-01-15T10:00:00",
    endDate: "2025-01-22T18:00:00",
    status: "Active",
    position: "Chief Technology Officer",
    candidates: [
      {
        id: 1,
        name: "Michael Chen",
        role: "Senior Engineering Manager",
        email: "michael.chen@company.com",
        department: "Engineering",
        experience: "12 years in tech leadership",
        bio: "Passionate about building scalable systems and mentoring teams.",
      },
      {
        id: 2,
        name: "Alexandra Rodriguez",
        role: "Director of Product",
        email: "alex.rodriguez@company.com",
        department: "Product",
        experience: "10 years in product development",
        bio: "Focused on user-centric innovation and market strategy.",
      },
      {
        id: 3,
        name: "James Williams",
        role: "VP of Engineering",
        email: "james.williams@company.com",
        department: "Engineering",
        experience: "15 years in enterprise software",
        bio: "Expert in cloud architecture and team management.",
      },
    ],
    totalVoters: 50,
    votedCount: 24,
    // Voting rules from polls model
    rules: {
      emailPrefix: "@company.com",
      departmentCodes: ["eng", "product", "sales", "marketing"],
    },
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors">
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-2xl">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl dark:shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-700">
            <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600"></div>

            {/* Header Content */}
            <InvitationHeader pollData={pollData} />

            {/* Invitation Details */}
            <div className="px-8 sm:px-12 py-10">
              <p className="text-gray-700 dark:text-slate-300 text-center mb-8 leading-relaxed">
                {pollData.description}
              </p>

              {/* Divider */}
              <div className="relative mb-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-400 font-medium">
                    Voting Eligibility
                  </span>
                </div>
              </div>

              {/* Voting Criteria */}
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/50 rounded-xl p-5 mb-10">
                <p className="text-xs font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider mb-4">
                  Who Can Vote
                </p>
                <div className="space-y-3">
                  {pollData.rules.emailPrefix && (
                    <div className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-purple-600 dark:bg-purple-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          Email Domain Required
                        </p>
                        <p className="text-xs text-gray-600 dark:text-slate-400">
                          Must have a {pollData.rules.emailPrefix} email address
                        </p>
                      </div>
                    </div>
                  )}
                  {pollData.rules.departmentCodes.length > 0 && (
                    <div className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-purple-600 dark:bg-purple-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          Department Membership
                        </p>
                        <p className="text-xs text-gray-600 dark:text-slate-400 mb-2">
                          Must be part of one of these departments:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pollData.rules.departmentCodes.map((dept) => (
                            <span
                              key={dept}
                              className="inline-block px-2.5 py-1 bg-purple-200 dark:bg-purple-800/50 text-purple-900 dark:text-purple-300 text-xs font-semibold rounded-full uppercase"
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

              {/* Divider */}
              <div className="relative mb-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-400 font-medium">
                    Meet the Candidates
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-10">
                {pollData.candidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3 border border-gray-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        {candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {candidate.name}
                        </h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">
                          {candidate.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* From Section */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-xl p-5 mb-10">
                <p className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-3">
                  Sent by
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {pollData.createdBy.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {pollData.createdBy.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-slate-400">
                      {pollData.createdBy.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-700 dark:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg">
                  Accept & Vote
                </button>
                <button className="w-full px-6 py-3 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all duration-200">
                  Decline
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 sm:px-12 py-6 bg-gray-50 dark:bg-slate-700/50 border-t border-gray-100 dark:border-slate-700 text-center text-xs text-gray-600 dark:text-slate-400">
              <p>
                This invitation expires on{" "}
                <span className="font-semibold">
                  {formatDate(pollData.endDate)}
                </span>
              </p>
            </div>
          </div>

          {/* Floating Info Box */}
          <div className="mt-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-xl p-6 border border-gray-100 dark:border-slate-700 max-w-md mx-auto">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold">
                ℹ
              </span>
              Important Information
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-slate-400">
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  •
                </span>
                <span>Your vote is confidential and anonymous</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  •
                </span>
                <span>You can only vote once per person</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  •
                </span>
                <span>Results will be announced after voting closes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
