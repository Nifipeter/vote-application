export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center gap-6">
      {/* Spinner Container */}
      <div className="relative">
        {/* Outer Ring */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 dark:border-slate-700 border-t-gray-900 dark:border-t-white"></div>

        {/* Inner Ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 dark:border-slate-700 border-b-gray-900 dark:border-b-white"
          style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
        ></div>

        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-gray-900 dark:bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
          Loading
        </p>
        <div className="flex gap-1 justify-center">
          <div
            className="h-1.5 w-1.5 bg-gray-900 dark:bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="h-1.5 w-1.5 bg-gray-900 dark:bg-white rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="h-1.5 w-1.5 bg-gray-900 dark:bg-white rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
