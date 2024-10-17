import { BsStars } from "react-icons/bs";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

const defaultDesc =
  "We store the scores of your favorite games, shows other users scores and rank them.";
const defaultSubtitle = "What is this? 🏆";

export const AppDescription = ({
  title = "Game Ranks",
  description = defaultDesc,
  subtitle = defaultSubtitle,
}: Props) => {
  return (
    <div className="w-full h-full relative grid place-items-center bg-[url(/background.svg)] bg-contain bg-no-repeat bg-center">
      <div className="w-[80%] grid">
        <h1 className="text-center text-6xl xl:text-9xl leading-[1.4] font-semibold bg-gradient-to-r from-gameRanks_tertiary to-gameRanks_quaternary text-transparent bg-clip-text">
          {title}
        </h1>

        <div className="text-center bg-black bg-opacity-30 p-4 rounded-md backdrop-blur-[1.2px] grid gap-2">
          <p className="text-2xl text-coco_primary-400 font-semibold">
            {subtitle}
          </p>

          <p>{description}</p>
        </div>
      </div>
      <BsStars className="block absolute right-[15px] size-14 lg:size-24 top-[20%] fill-gameRanks_quaternary" />
      <BsStars className="block absolute left-[15px] size-14 lg:size-24 bottom-[20%] fill-gameRanks_quaternary" />
    </div>
  );
};
