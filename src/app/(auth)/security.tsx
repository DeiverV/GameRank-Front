"use client";
import { IRootState } from "@/src/store";
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";
import { APP_ROUTES } from "../routes";

export const withSecurity = (
  Children: React.FC<{
    children: React.ReactNode;
  }>
) => {
  return (props: { children: React.ReactNode }) => {
    const { token, username, id } = useSelector(
      (state: IRootState) => state.user
    );
    const router = useRouter();

    if (token && username && id) {
      router.push(APP_ROUTES.USERS.PROFILE.path.replace(":username", username));
    }

    return <Children {...props} />;
  };
};
