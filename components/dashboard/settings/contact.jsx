"use client";

import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function SettingsContactPage({ user }) {
  const [copiedId, setCopiedId] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-4 sm:p-5 shadow-md dark:border-slate-700 dark:bg-slate-800 dark:shadow-xl dark:shadow-black/40">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-cyan-700 dark:bg-slate-700 dark:text-cyan-300">
            <Mail className="h-4 w-4" />
          </div>
          <span>Contact</span>
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {[
          { label: "Primary email", value: user?.email, copyable: false },
          { label: "Account ID", value: user?._id, copyable: true },
          {
            label: "Auth provider",
            value: user?.googleId ? "Google" : "Email",
            copyable: false,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-200 bg-white px-3 py-3 dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
              {item.label}
            </p>
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                {item.value || "Not set"}
              </p>
              {item.copyable && item.value && (
                <button
                  onClick={() => copyToClipboard(item.value)}
                  className="shrink-0 p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                  title="Copy ID"
                >
                  {copiedId ? (
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  )}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
        Google is the authentication provider for all account.
      </p>
    </div>
  );
}
