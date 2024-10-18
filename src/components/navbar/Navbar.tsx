import { NavItem } from "./components/NavItem";
import { PiRankingDuotone, PiUser } from "react-icons/pi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="w-full h-[54px] flex items-center bg-gameRanks_secondary px-[50px] gap-14 absolute md:static bottom-0">
      <div className="hidden md:flex items-center gap-2">
        <img
          src="/appLogo.png"
          alt="appLogo"
          className="object-cover w-[34px]"
        />
        <p className="text-1xl font-semibold">GameRanks</p>
      </div>
      <ul className="flex gap-2 w-full md:w-fit justify-center">
        <li>
          <NavItem
            icon={<PiUser size={20} />}
            text="Profile"
            to="/profile/4"
          />
        </li>
        <li>
          <NavItem
            icon={<PiRankingDuotone size={20} />}
            text="Leaderboard"
            to="/users/scores/leaderboard"
          />
        </li>
        <li>
          <NavItem
            icon={<MdOutlineAdminPanelSettings size={20} />}
            text="Admin"
            to="/admin/users"
          />
        </li>
      </ul>
    </nav>
  );
};
