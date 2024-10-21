interface Props {
  counter: number;
  title: string;
}

export const InformationCard = ({ counter, title }: Props) => {
  return (
    <div className="grid place-items-center md:w-[140px]">
      <h5 className="text-center w-full line-clamp-1 text-sm">{title}</h5>
      <p className="text-center text-2xl font-semibold line-clamp-1">
        {counter}
      </p>
    </div>
  );
};
