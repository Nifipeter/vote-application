"use client";

import InvitationDetails from "@/components/dashboard/polls/invite/details";
import InvitationFooter from "@/components/dashboard/polls/invite/footer";
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



  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors">
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-2xl">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl dark:shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-700">
            <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600"></div>

            {/* Header Content */}
            <InvitationHeader pollData={pollData} />

            {/* Invitation Details */}
            <InvitationDetails pollData={pollData} />

            {/* Footer */}
            <InvitationFooter pollData={pollData} />
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
