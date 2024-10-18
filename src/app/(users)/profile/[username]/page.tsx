"use client";
import { NextPage } from "next";
import { InformationCard, ScoresTable, UserInfo } from "./components";
import { useGetUserDetailsQuery } from "@/src/store/services";
import { useParams } from "next/navigation";

const Profile: NextPage = () => {
  const params = useParams<{ username: string }>();
  const { data, isLoading } = useGetUserDetailsQuery(params.username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-10">
      <h1 className="text-center md:text-left">Profile</h1>
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <UserInfo
          email={data?.email ?? ""}
          img={data?.image ?? ""}
          name={data?.name ?? ""}
          username={data?.username ?? ""}
        />

        <div className="flex items-center justify-center gap-4">
          <InformationCard
            counter={data?.highScore ?? 0}
            title="Highest Score"
          />
          <InformationCard counter={data?.rank ?? 0} title="Global Ranking" />
        </div>
      </div>

      <ScoresTable />
    </div>
  );
};

export default Profile;
