"use client";

import { signIn } from "next-auth/react";
import Toggle from "../toggle";
export default function HeroSection() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-3.5 flex items-center justify-between w-full">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 items-center justify-center shrink-0 rounded-lg bg-linear-to-br from-blue-600 to-blue-700 text-base font-bold text-white">
            V
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Votely
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Decisions made clear
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href="#features"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Toggle />
          <button
            onClick={() => {
              signIn("google", {
                callbackUrl: "/dashboard",
              });
            }}
            className="rounded-lg cursor-pointer bg-zinc-900 dark:bg-zinc-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:hover:bg-zinc-600 transition shadow-md hover:shadow-lg shrink-0 flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}
