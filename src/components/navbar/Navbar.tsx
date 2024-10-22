import { NavItem } from "./components/NavItem";
import { PiRankingDuotone, PiUser } from "react-icons/pi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { APP_ROUTES } from "@/src/config";
import { UserAvatar } from "./components/UserAvatar";
import { useSelector } from "react-redux";
import { IRootState } from "@/src/store";
import { RolesEnum } from "@/src/models";

export const Navbar = () => {
  const { role } = useSelector((state: IRootState) => state.user);

  return (
    <nav className="w-full h-[54px] flex items-center bg-gameRanks_secondary px-[50px] gap-14 fixed md:static bottom-0 z-50 ">
      <div className="hidden md:flex items-center gap-2">
        <img
          src="/appLogo.png"
          alt="appLogo"
          className="object-cover w-[34px]"
        />
        <p className="text-1xl font-semibold">GameRanks</p>
      </div>
      <ul className="flex gap-2 w-full justify-between">
        <div className="flex gap-2">
          <li>
            <NavItem
              icon={<PiUser size={20} />}
              text="Profile"
              to={APP_ROUTES.USERS.PROFILE.path.replace(":username", "deiberv")}
            />
          </li>
          <li>
            <NavItem
              icon={<PiRankingDuotone size={20} />}
              text="Leaderboard"
              to={APP_ROUTES.USERS.SCORES.LEADERBOARD.path}
            />
          </li>
          {role === RolesEnum.ADMIN && (
            <li>
              <NavItem
                icon={<MdOutlineAdminPanelSettings size={20} />}
                text="Admin"
                to={APP_ROUTES.ADMIN.USERS.path}
              />
            </li>
          )}
        </div>
        <li className="cursor-pointer">
          <UserAvatar />
        </li>
      </ul>
    </nav>
  );
};
