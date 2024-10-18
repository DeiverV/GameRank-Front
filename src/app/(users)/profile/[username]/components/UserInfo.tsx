import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";

interface Props {
  img: string;
  name: string;
  username: string;
  email: string;
}

export const UserInfo = ({ email, img, name, username }: Props) => {
  const imageStyles =
    "w-[120px] h-[120px] bg-gameRanks_tertiary border rounded-full relative border-2 border-white";

  return (
    <div className="flex flex-col md:flex-row items-center  w-full gap-5">
      {img ? (
        <Image
          src={img}
          alt={username ?? "user"}
          width={120}
          height={120}
          className={imageStyles}
        />
      ) : (
        <figure className={imageStyles} />
      )}
      <div>
        <h2>{name}</h2>
        <div className="flex items-center gap-1 opacity-70">
          <MdOutlineMail size={20} />
          <p>{email}</p>
        </div>
        <p className="opacity-70">@{username}</p>
      </div>
    </div>
  );
};
