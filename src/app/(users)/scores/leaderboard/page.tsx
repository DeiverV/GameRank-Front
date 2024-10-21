"use client";
import { NextPage } from "next";
import { LeaderboardTop, LeaderTable } from "./components";
import { Suspense } from "react";

const Leaderboard: NextPage = () => {
  return (
    <section className="flex flex-col gap-10">
      <h1>Leaderboard</h1>
      <Suspense>
        <LeaderboardTop />
        <LeaderTable />
      </Suspense>
    </section>
  );
};

export default Leaderboard;
