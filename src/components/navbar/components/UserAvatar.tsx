"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store/store";
import Link from "next/link";
import { APP_ROUTES } from "@/src/config";
import { useDisclosure } from "@nextui-org/modal";

import { TbLogout2, TbUser } from "react-icons/tb";
import { LogoutModal } from "./LogoutModal";

export const UserAvatar = () => {
  const user = useSelector((state: IRootState) => state.user);
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Dropdown
        backdrop="opaque"
        className="bg-gameRanks_secondary text-neutral-3 cursor-pointer"
      >
        <DropdownTrigger>
          <User
            name={user.name}
            description={`@${user.username}`}
            avatarProps={{
              size: "sm",
              getInitials: (name) => name.charAt(0),
            }}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="User Actions"
          itemClasses={{
            title: "text-xs",
            wrapper: "bg-red-500",
          }}
        >
          <DropdownItem
            textValue="Profile"
            as={Link}
            href={APP_ROUTES.USERS.PROFILE.path.replace(
              ":username",
              user.username
            )}
            startContent={<TbUser size={18} />}
            key="profile"
          >
            Profile
          </DropdownItem>

          <DropdownItem
            textValue="Log Out"
            startContent={<TbLogout2 size={18} />}
            key="logout"
            color="danger"
            onPress={onOpen}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <LogoutModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
