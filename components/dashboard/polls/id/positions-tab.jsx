import { useEffect, useState } from "react";
import { Plus, Trash2, Award, Users, BarChart3, FileText, Edit, X } from "lucide-react";
import { toast } from "react-toastify";
import LoadingSpinner from "@/components/loadingspinner";

export default function PositionsTab({ pollId }) {
  const [positions, setPositions] = useState([]);
  const [newPositionName, setNewPositionName] = useState("");
  const [newPositionDescription, setNewPositionDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchPositions() {
      setLoading(true);
      try {
        const request = await fetch(`/api/polls/${pollId}/contestant/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const response = await request.json();
        if (!request.ok || response?.error) {
          toast.error(response?.error || "An error occurred.");
          setLoading(false);
          return setPositions([]);
        }
        setPositions(response?.contestant || []);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        return toast.error("Network Error");
      }
    }
    fetchPositions();
  }, [pollId]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewPositionName("");
    setNewPositionDescription("");
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-4 sm:p-6 border border-blue-100 dark:border-slate-600">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
              Manage Positions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400">
              Create and manage positions for your election
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl shrink-0"
          >
            <Plus className="h-5 w-5" />
            <span>New Position</span>
          </button>
        </div>
      </div>

      {/* Modal Backdrop */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 transition-opacity"
          onClick={handleCloseModal}
        />
      )}

      {/* Create Position Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 py-6 sm:py-0">
          <div
            className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-700/80 px-6 py-5 border-b border-gray-200 dark:border-slate-600 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Create Position
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-gray-600 dark:text-slate-400"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                  Position Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newPositionName}
                  onChange={(e) => setNewPositionName(e.target.value)}
                  placeholder="e.g., President, Vice President..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                  Description <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <textarea
                  value={newPositionDescription}
                  onChange={(e) => setNewPositionDescription(e.target.value)}
                  placeholder="Add details about this position..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-slate-700">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg font-semibold text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Plus className="h-4 w-4" />
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Positions List */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
            <Award className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Positions
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              {positions.length} position{positions.length !== 1 ? "s" : ""} created
            </p>
          </div>
        </div>

        {positions.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 p-12 text-center">
            <Award className="h-16 w-16 text-gray-400 dark:text-slate-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Positions Yet
            </h3>
            <p className="text-gray-600 dark:text-slate-400">
              Create your first position to get started
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {positions.map((position) => (
              <div
                key={position._id}
                className="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
              >
                {/* Position Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-700/50 dark:to-slate-700/30 px-6 py-5 border-b border-gray-200 dark:border-slate-700">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white capitalize mb-1 truncate">
                        {position.position}
                      </h4>
                      {position.description && (
                        <p className="text-sm text-gray-600 dark:text-slate-400 line-clamp-2">
                          {position.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Position Stats */}
                <div className="px-6 py-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Candidates */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase">
                          Candidates
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {position.candidates?.length || 0}
                      </p>
                    </div>

                    {/* Voters */}
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="text-xs font-semibold text-gray-600 dark:text-slate-400 uppercase">
                          Voters
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {position.voters?.length || 0}
                      </p>
                    </div>
                  </div>

                  {/* Description Preview */}
                  {position.description && (
                    <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4 border border-gray-200 dark:border-slate-600">
                      <div className="flex items-start gap-3">
                        <FileText className="h-4 w-4 text-gray-500 dark:text-slate-400 shrink-0 mt-1" />
                        <p className="text-sm text-gray-700 dark:text-slate-300 line-clamp-3">
                          {position.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-slate-700/30 border-t border-gray-200 dark:border-slate-700 flex gap-3">
                  <button className="flex-1 px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                  <button className="flex-1 px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
