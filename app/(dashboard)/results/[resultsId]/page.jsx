import ResultHeader from "@/components/dashboard/results/resultId/header";
import ResultPosition from "@/components/dashboard/results/resultId/position";
import { Trophy, CheckCircle2, Clock, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResultDetailsPage() {
  // Static sample poll data
  const poll = {
    _id: "1",
    title: "Student President Election 2025",
    description: "Vote for the next student president of our institution",
    status: "Completed",
    startDate: "2026-01-01",
    endDate: "2026-01-15",
    voters: Array(150).fill(null),
    completedVoters: Array(145).fill(null),
    contestants: [
      {
        _id: "pos1",
        position: "President",
        description: "Lead the student body and represent all students",
        candidates: [
          {
            _id: "c1",
            name: "Alice Johnson",
            email: "alice@university.edu",
            votes: 62,
          },
          {
            _id: "c2",
            name: "Bob Smith",
            email: "bob@university.edu",
            votes: 55,
          },
          {
            _id: "c3",
            name: "Charlie Davis",
            email: "charlie@university.edu",
            votes: 28,
          },
        ],
      },
      {
        _id: "pos2",
        position: "Vice President",
        description: "Support the president and manage committees",
        candidates: [
          {
            _id: "c4",
            name: "Diana Wilson",
            email: "diana@university.edu",
            votes: 71,
          },
          {
            _id: "c5",
            name: "Eve Martinez",
            email: "eve@university.edu",
            votes: 48,
          },
          {
            _id: "c6",
            name: "Frank Brown",
            email: "frank@university.edu",
            votes: 26,
          },
        ],
      },
      {
        _id: "pos3",
        position: "Treasurer",
        description: "Manage financial affairs and budgeting",
        candidates: [
          {
            _id: "c7",
            name: "Grace Lee",
            email: "grace@university.edu",
            votes: 83,
          },
          {
            _id: "c8",
            name: "Henry Garcia",
            email: "henry@university.edu",
            votes: 40,
          },
          {
            _id: "c9",
            name: "Ivy Rodriguez",
            email: "ivy@university.edu",
            votes: 22,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <ResultHeader poll={poll} />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="space-y-6">
          <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
            Position Results
          </h2>
          <ResultPosition poll={poll} />
        </div>
      </div>
    </main>
  );
}
