"use client";
import ResultHeader from "@/components/dashboard/results/resultId/header";
import ResultPosition from "@/components/dashboard/results/resultId/position";
import { useState, useEffect } from "react";
export default function ResultIdContainer({ poll: polls, pollId }) {
  const [poll, setPoll] = useState(polls || {});
  useEffect(() => {
    const streamRequest = new EventSource(`/api/polls/${pollId}/stream`, {
      withCredentials: true,
    });

    streamRequest.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        setPoll(parsedData.poll);
      } catch (err) {
        toast.error("Abnormal Network. Please refresh the page.");
      }
    };
    streamRequest.onerror = () => {
      toast.error("Connection lost. Please refresh the page.");
      streamRequest.close();
    };
    return () => {
      streamRequest.close();
    };
  }, [pollId]);
  return (
    <>
      <ResultHeader poll={poll} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="space-y-6">
          <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
            Position Results
          </h2>
          <ResultPosition poll={poll} />
        </div>
      </div>
    </>
  );
}
