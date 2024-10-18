"use client";
import { NextPage } from "next";
import { LeaderTable } from "./components";
import { useSelector } from "react-redux";
import { IRootState } from "@/src/store";

const Leaderboard: NextPage = () => {
  const topLeaderboardUsers = useSelector(
    (state: IRootState) => state.scores.topLeaderboardUsers
  );
  console.log(topLeaderboardUsers);
  return (
    <section>
      <LeaderTable />
    </section>
  );
};

export default Leaderboard;
