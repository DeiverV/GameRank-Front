"use client";
import { NextPage } from "next";
import {
  AddScoreModal,
  BlockUserModal,
  DeleteUserModal,
  InformationCard,
  ScoresTable,
  UpdateUserModal,
  UserInfo,
} from "./components";
import { useGetUserDetailsQuery } from "@/src/store/services";
import { useParams } from "next/navigation";

const Profile: NextPage = () => {
  const params = useParams<{ username: string }>();
  const { data, isLoading, isSuccess } = useGetUserDetailsQuery(
    params.username
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return (
      <div className="grid gap-10">
        <h1 className="text-center md:text-left">Profile</h1>
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <UserInfo
            email={data.email}
            img={data.image}
            name={data.name}
            username={data.username}
          />

          <div className="flex items-center justify-center gap-4">
            <InformationCard
              counter={data.highestScore}
              title="Highest Score"
            />
            <InformationCard counter={data.rank} title="Global Ranking" />
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex flex-col md:flex-row items-start justify-between gap-2">
            <div className="flex gap-2 items-center">
              <UpdateUserModal />
              <DeleteUserModal />
              <BlockUserModal />
            </div>
            <AddScoreModal />
          </div>
          <ScoresTable />
        </div>
      </div>
    );
  }

  return <div>Error</div>;
};

export default Profile;
