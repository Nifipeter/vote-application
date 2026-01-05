import PollsIdHeader from "@/components/dashboard/polls/id/header";
import PollsIdBody from "@/components/dashboard/polls/id/body";
export default function PollIdContainer({ poll, pollsId }) {
  return (
    <>
      <PollsIdHeader pollData={poll} />
      <PollsIdBody poll={poll} pollId={pollsId} />
    </>
  );
}
