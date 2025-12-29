export default function InvitationFooter({ pollData }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
  return (
    <div className="px-8 sm:px-12 py-6 bg-gray-50 dark:bg-slate-700/50 border-t border-gray-100 dark:border-slate-700 text-center text-xs text-gray-600 dark:text-slate-400">
      <p>
        This invitation expires on{" "}
        <span className="font-semibold">{formatDate(pollData.endDate)}</span>
      </p>
    </div>
  );
}
