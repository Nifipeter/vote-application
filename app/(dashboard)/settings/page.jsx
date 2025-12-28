"use client";

import { BadgeCheck, Bell, Lock, Mail, Phone, UserRound } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-xl shadow-black/40 sm:px-6 sm:py-5">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
            User settings
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-semibold text-white sm:text-3xl">
              Your account
            </h1>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">
              Up to date
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-400">
            Refresh your profile, contact, and security info. Static preview;
            connect actions later.
          </p>
        </header>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/40">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                    <UserRound className="h-4 w-4" />
                  </div>
                  <span>Profile</span>
                </div>
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10">
                  Edit profile
                </button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-lg font-semibold text-white">
                  JD
                </div>
                <div className="flex-1 min-w-[180px]">
                  <p className="text-sm text-slate-400">Display name</p>
                  <p className="text-base font-semibold text-white">
                    Jordan Doe
                  </p>
                  <p className="text-xs text-slate-500">
                    Shown on your public votes
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["Full name", "Username", "Title", "Department"].map(
                  (label, index) => {
                    const values = [
                      "Jordan Doe",
                      "@jordandoe",
                      "Product Manager",
                      "Product & Research",
                    ];
                    return (
                      <div
                        key={label}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                      >
                        <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-white">
                          {values[index]}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/40">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>Contact</span>
                </div>
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10">
                  Edit contact
                </button>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["Email", "Phone", "Timezone", "Location"].map(
                  (label, index) => {
                    const values = [
                      "jordan.doe@example.com",
                      "+1 (415) 555-1024",
                      "UTC",
                      "San Francisco, CA",
                    ];
                    return (
                      <div
                        key={label}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                      >
                        <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-white">
                          {values[index]}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Contact info is used for account recovery and notifications.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/40">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                    <Lock className="h-4 w-4" />
                  </div>
                  <span>Security</span>
                </div>
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10">
                  Manage security
                </button>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Password",
                  "Two-factor",
                  "Login alerts",
                  "Active sessions",
                ].map((label, index) => {
                  const values = ["••••••••", "Off", "On", "3 devices"];
                  return (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                    >
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {values[index]}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-slate-500">
                For stronger protection, turn on two-factor authentication.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/40">
              <h2 className="text-sm font-semibold text-white">At a glance</h2>
              <div className="mt-3 space-y-3">
                {["Status", "Notifications", "Recovery"].map((label, index) => {
                  const values = ["Verified", "Email + Push", "Phone enabled"];
                  const icons = [
                    <BadgeCheck
                      key="status"
                      className="h-4 w-4 text-emerald-300"
                    />,
                    <Bell key="notif" className="h-4 w-4 text-cyan-300" />,
                    <Phone key="phone" className="h-4 w-4 text-indigo-300" />,
                  ];
                  return (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                    >
                      <div className="flex items-center gap-2 text-slate-300">
                        {icons[index]}
                        <span>{label}</span>
                      </div>
                      <span className="font-semibold text-white">
                        {values[index]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/40">
              <h2 className="text-sm font-semibold text-white">Mobile ready</h2>
              <p className="mt-1 text-sm text-slate-300">
                Sections stack on small screens, with generous touch targets and
                legible type.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
