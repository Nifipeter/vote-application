"use client";

import { BadgeCheck, Bell, Lock, Mail, Phone, UserRound } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-xl shadow-black/40 sm:px-6 sm:py-5">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
            User settings
          </p>
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Your account, at a glance
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Update your profile details, contact info, and security preferences.
            Static view for now.
          </p>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <SettingsCard
              title="Profile"
              icon={<UserRound className="h-4 w-4" />}
              actionLabel="Edit profile"
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-lg font-semibold text-white">
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
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Full name" value="Jordan Doe" />
                <Field label="Username" value="@jordandoe" />
                <Field label="Title" value="Product Manager" />
                <Field label="Department" value="Product & Research" />
              </div>
            </SettingsCard>

            <SettingsCard
              title="Contact"
              icon={<Mail className="h-4 w-4" />}
              actionLabel="Edit contact"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Email" value="jordan.doe@example.com" />
                <Field label="Phone" value="+1 (415) 555-1024" />
                <Field label="Timezone" value="UTC" />
                <Field label="Location" value="San Francisco, CA" />
              </div>
              <p className="text-xs text-slate-500">
                Contact info is used for account recovery and notifications.
              </p>
            </SettingsCard>

            <SettingsCard
              title="Security"
              icon={<Lock className="h-4 w-4" />}
              actionLabel="Manage security"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Password" value="••••••••" />
                <Field label="Two-factor" value="Off" />
                <Field label="Login alerts" value="On" />
                <Field label="Active sessions" value="3 devices" />
              </div>
              <p className="text-xs text-slate-500">
                For stronger protection, turn on two-factor authentication.
              </p>
            </SettingsCard>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/40">
              <h2 className="text-sm font-semibold text-white">At a glance</h2>
              <div className="mt-3 space-y-3">
                <SummaryRow
                  label="Status"
                  value="Verified"
                  icon={<BadgeCheck className="h-4 w-4 text-emerald-300" />}
                />
                <SummaryRow
                  label="Notifications"
                  value="Email + Push"
                  icon={<Bell className="h-4 w-4 text-cyan-300" />}
                />
                <SummaryRow
                  label="Recovery"
                  value="Phone enabled"
                  icon={<Phone className="h-4 w-4 text-indigo-300" />}
                />
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function SettingsCard({ title, icon, children, actionLabel }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/40">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
            {icon}
          </div>
          <span>{title}</span>
        </div>
        {actionLabel && (
          <button
            type="button"
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10"
          >
            {actionLabel}
          </button>
        )}
      </div>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
      <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
        {label}
      </p>
      <p className="text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function SummaryRow({ label, value, icon }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
      <div className="flex items-center gap-2 text-slate-300">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}
