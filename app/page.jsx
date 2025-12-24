import {
  ArrowRight,
  Check,
  Globe,
  Lock,
  Zap,
  Users,
  BarChart3,
  Shield,
  Sparkles,
  TrendingUp,
  Heart,
} from "lucide-react";
import HeroSection from "@/components/landing/hero";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 overflow-x-hidden">
      <HeroSection />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 w-full overflow-x-hidden pt-20">
        <div className="grid grid-cols-3 gap-8 py-16 border-t border-b border-zinc-200 dark:border-zinc-700">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400">
              100k+
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 font-medium">
              Active Users
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400">
              5M+
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 font-medium">
              Votes Cast
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400">
              99.9%
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 font-medium">
              Uptime SLA
            </p>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-32">
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              → Features
            </span>
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-6 text-zinc-900 dark:text-zinc-100">
              Everything you need
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Powerful, intuitive tools built for teams that value clarity and
              trust in their decision-making process.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Real-time Analytics",
                description:
                  "Watch votes update live with beautiful, interactive charts and detailed breakdowns",
              },
              {
                icon: Shield,
                title: "Bank-level Security",
                description:
                  "Enterprise-grade encryption ensures every vote stays private and authentic",
              },
              {
                icon: Users,
                title: "Easy Collaboration",
                description:
                  "Share polls instantly via link, QR code, or email to get responses fast",
              },
              {
                icon: BarChart3,
                title: "Advanced Insights",
                description:
                  "Export detailed reports and understand voting patterns with smart analytics",
              },
              {
                icon: Globe,
                title: "Mobile First",
                description:
                  "Responsive design works perfectly on desktop, tablet, and smartphone",
              },
              {
                icon: Heart,
                title: "User Friendly",
                description:
                  "Intuitive interface that anyone can use with zero learning curve",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-7 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition group"
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-300 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-32">
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              → Process
            </span>
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-6 text-zinc-900 dark:text-zinc-100">
              Three simple steps
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Create",
                desc: "Write your question and add options in seconds",
                icon: "✏️",
              },
              {
                num: "02",
                title: "Share",
                desc: "Invite participants via link, QR, or email",
                icon: "🔗",
              },
              {
                num: "03",
                title: "Analyze",
                desc: "Get instant results and export comprehensive reports",
                icon: "📊",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-8 text-center hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <p className="text-5xl font-black text-blue-600 dark:text-blue-400 mb-4 opacity-20">
                    {step.num}
                  </p>
                  <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="hidden sm:flex absolute top-1/2 -right-4 transform -translate-y-1/2 text-zinc-300 dark:text-zinc-700">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-32">
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              → Pricing
            </span>
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-6 text-zinc-900 dark:text-zinc-100">
              Plans for every team
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Start free, scale as you grow. No credit card required.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                features: [
                  "Up to 100 voters",
                  "Unlimited polls",
                  "Basic charts",
                  "Email support",
                ],
              },
              {
                name: "Professional",
                price: "$39",
                period: "/month",
                features: [
                  "Up to 10,000 voters",
                  "Advanced analytics",
                  "Custom branding",
                  "Priority support",
                  "API access",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Unlimited voters",
                  "Custom features",
                  "Dedicated support",
                  "SLA guarantee",
                  "On-premise option",
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl border p-8 transition ${
                  plan.popular
                    ? "border-blue-600 dark:border-blue-600 bg-linear-to-br from-blue-50 dark:from-blue-900/30 to-white dark:to-zinc-800 shadow-2xl scale-105"
                    : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block bg-blue-600 dark:bg-blue-600 text-white px-3.5 py-1 rounded-full text-xs font-bold mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                  {plan.name}
                </h3>
                <div className="mb-8">
                  <span className="text-5xl font-black text-zinc-900 dark:text-zinc-100">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-zinc-600 dark:text-zinc-300 ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 border-t border-zinc-200 dark:border-zinc-700 pt-8">
                  {plan.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
                    >
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-300 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full rounded-lg py-3 font-semibold transition ${
                    plan.popular
                      ? "bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500"
                      : "bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-600"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="py-32">
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              → Support
            </span>
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-6 text-zinc-900 dark:text-zinc-100">
              Frequently asked questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "Is voting truly anonymous?",
                a: "Yes. We separate voter identity from vote data using industry-standard encryption. Only aggregate results are visible.",
              },
              {
                q: "Can I edit results after voting closes?",
                a: "No. Once a poll closes, results are locked and immutable. You can view historical data anytime.",
              },
              {
                q: "What happens to my data?",
                a: "Your data is encrypted end-to-end and stored securely. We never sell or share your information with third parties.",
              },
              {
                q: "Does Votely work offline?",
                a: "Polls must be created and voted on with an internet connection, but results sync automatically once reconnected.",
              },
              {
                q: "How many people can vote?",
                a: "Starter plan supports 100 voters, Pro supports 10k, and Enterprise supports unlimited participants.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition cursor-pointer"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-zinc-900 dark:text-zinc-100">
                  <span className="text-lg">{item.q}</span>
                  <span className="text-2xl text-blue-600 dark:text-blue-400 group-open:rotate-45 transition shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-blue-700 dark:border-blue-600 bg-linear-to-br from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-700 px-6 sm:px-12 py-20 text-center text-white mb-20 mx-auto max-w-6xl">
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            Ready to decide better?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams making faster, smarter decisions with
            Votely.
          </p>
          <button className="rounded-lg bg-white dark:bg-zinc-100 text-blue-600 dark:text-blue-600 px-10 py-4 text-lg font-bold hover:bg-blue-50 dark:hover:bg-white transition shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Start Free Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-blue-100 dark:text-blue-200 text-sm mt-6">
            No credit card required. Start with 100 voters free.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
