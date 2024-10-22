"use client";
import { IRootState } from "@/src/store";
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";
import { APP_ROUTES } from "../routes";
import { RolesEnum } from "@/src/models";

export const withSecurity = (
  Children: React.FC<{
    children: React.ReactNode;
  }>
) => {
  return (props: { children: React.ReactNode }) => {
    const { token, role, username } = useSelector(
      (state: IRootState) => state.user
    );
    const router = useRouter();

    if (!token) {
      router.push(APP_ROUTES.AUTH.LOGIN.path);
    }

    if (role === RolesEnum.PLAYER) {
      router.push(APP_ROUTES.USERS.PROFILE.path.replace(":username", username));
    }

    return <Children {...props} />;
  };
};
