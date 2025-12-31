import { useState } from "react";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";

export default function VoteTab({ pollData }) {
  const [selectedVotes, setSelectedVotes] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [voted, setVoted] = useState(false);

  const positions = [
    {
      id: 1,
      title: "Chief Technology Officer",
      description: "Lead the technical strategy and innovation",
    },
    {
      id: 2,
      title: "Head of Product",
      description: "Direct product vision and roadmap",
    },
    {
      id: 3,
      title: "VP of Operations",
      description: "Oversee operational excellence",
    },
  ];

  const candidatesByPosition = {
    1: pollData.candidates.slice(0, 2),
    2: pollData.candidates.slice(1, 3),
    3: pollData.candidates,
  };

  const handleVoteSelection = (positionId, candidateId) => {
    setSelectedVotes((prev) => ({
      ...prev,
      [positionId]: candidateId,
    }));
  };

  const handleSubmitVotes = () => {
    const votedPositions = Object.keys(selectedVotes).length;
    if (votedPositions === 0) {
      alert("Please select at least one candidate before submitting");
      return;
    }
    setShowConfirmation(true);
  };

  const confirmVotes = () => {
    setVoted(true);
    setShowConfirmation(false);
  };

  if (voted) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center max-w-md">
          <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Votes Submitted!
          </h2>
          <p className="text-gray-600 dark:text-slate-400 mb-6">
            Thank you for voting. Your votes have been recorded successfully.
            You can view the results once voting is complete.
          </p>
          <button
            onClick={() => {
              setVoted(false);
              setSelectedVotes({});
            }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            View Results
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800/50 rounded-2xl p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Cast Your Votes
        </h2>
        <p className="text-gray-600 dark:text-slate-400 mb-4">
          Select your preferred candidate for each position. You can vote for
          one candidate per position.
        </p>
        <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
          <Clock className="h-4 w-4" />
          <span>Voting closes on January 22, 2025 at 6:00 PM</span>
        </div>
      </div>

      {/* Voting Sections */}
      <div className="space-y-6">
        {positions.map((position) => (
          <div
            key={position.id}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-4 sm:p-6"
          >
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                {position.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                {position.description}
              </p>
            </div>

            <div className="space-y-3">
              {candidatesByPosition[position.id]?.map((candidate) => (
                <div
                  key={candidate.id}
                  onClick={() => handleVoteSelection(position.id, candidate.id)}
                  className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedVotes[position.id] === candidate.id
                      ? "border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 bg-white dark:bg-slate-900"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {candidate.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    {/* Candidate Info */}
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {candidate.name}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                        {candidate.role}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-slate-400">
                        {candidate.email}
                      </p>
                    </div>

                    {/* Checkbox */}
                    <div className="flex-shrink-0">
                      <div
                        className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedVotes[position.id] === candidate.id
                            ? "border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500"
                            : "border-gray-300 dark:border-slate-600"
                        }`}
                      >
                        {selectedVotes[position.id] === candidate.id && (
                          <CheckCircle className="h-4 w-4 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!candidatesByPosition[position.id] ||
            candidatesByPosition[position.id].length === 0 ? (
              <div className="text-center py-6">
                <p className="text-gray-500 dark:text-slate-500">
                  No candidates available for this position
                </p>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-slate-700">
        <button className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
          Clear All Votes
        </button>
        <button
          onClick={handleSubmitVotes}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-700 dark:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          Submit Votes
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Confirm Your Votes
            </h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-xl p-4 mb-6 max-h-48 overflow-y-auto">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-3">
                You are voting for:
              </p>
              <div className="space-y-2">
                {positions.map((position) => {
                  const selectedCandidate = candidatesByPosition[
                    position.id
                  ]?.find((c) => c.id === selectedVotes[position.id]);
                  return (
                    <div key={position.id} className="text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {position.title}
                      </p>
                      {selectedCandidate ? (
                        <p className="text-blue-700 dark:text-blue-300">
                          → {selectedCandidate.name}
                        </p>
                      ) : (
                        <p className="text-gray-500 dark:text-slate-500">
                          → No selection
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-slate-400 mb-6">
              This action cannot be undone. Your votes will be final and
              confidential.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={confirmVotes}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-colors shadow-lg"
              >
                Confirm Votes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
