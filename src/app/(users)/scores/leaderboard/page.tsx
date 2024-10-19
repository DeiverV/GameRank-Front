"use client";
import { NextPage } from "next";
import { LeaderTable } from "./components";
import { useSelector } from "react-redux";
import { IRootState } from "@/src/store";
import { Suspense } from "react";

const Leaderboard: NextPage = () => {
  const topLeaderboardUsers = useSelector(
    (state: IRootState) => state.scores.topLeaderboardUsers
  );
  console.log(topLeaderboardUsers);
  return (
    <section>
      <Suspense>
        <LeaderTable />
      </Suspense>
    </section>
  );
};

export default Leaderboard;
