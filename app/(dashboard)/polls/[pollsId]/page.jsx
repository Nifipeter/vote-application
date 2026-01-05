import PollsIdHeader from "@/components/dashboard/polls/id/header";
import PollsIdBody from "@/components/dashboard/polls/id/body";
import { BASE_URL } from "@/libs/config/configuration";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PollDetailsPage({ params }) {
  const { pollsId } = await params;
  const request = await fetch(`${BASE_URL}/api/polls/${pollsId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });
  const response = await request.json();
  if (!request.ok || response?.error) return redirect("/polls");
  const { poll } = response;

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <PollsIdHeader pollData={poll} />
      <PollsIdBody poll={poll} pollId={pollsId} />
    </main>
  );
}
