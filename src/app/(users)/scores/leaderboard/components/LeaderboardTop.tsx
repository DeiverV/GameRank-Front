import { IRootState } from "@/src/store";
import { useSelector } from "react-redux";

export const LeaderboardTop = () => {
  const topLeaderboardUsers = useSelector(
    (state: IRootState) => state.scores.topLeaderboardUsers
  );

  const leaderPositions = [
    "md:col-start-2 md:col-end-3 ",
    "md:col-start-3 md:col-end-4 ",
    "md:col-start-1 md:col-end-2 ",
  ];

  const leaderHeights = ["h-[160px]", "h-[120px]", "h-[80px]"];
  const leaderOpacities = ["opacity-100", "opacity-60", " opacity-40"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {topLeaderboardUsers.map(
        ({ name, image, highestScore, username, id }, index) => (
          <div
            key={id}
            className={`relative grid place-items-center gap-2 w-full ${leaderPositions[index]} ${leaderOpacities[index]} md:row-start-1 `}
          >
            <div className="z-10 flex flex-row md:flex-col gap-5">
              <img
                src={image}
                alt="topUser Avatar"
                className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] rounded-full object-cover"
              />
              <div className="text-center">
                <h6>{name}</h6>
                <p className="font-bold text-xl md:text-4xl">{highestScore}</p>
                <small>@{username}</small>
              </div>
            </div>
            <figure
              className={`hidden md:block ${leaderHeights[index]} w-full bg-gradient-to-t from-gameRanks_primary to-gameRanks_secondary relative top-[-40px] rounded-md opacity-40`}
            />
          </div>
        )
      )}
    </div>
  );
};
