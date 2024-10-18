import { Card, CardBody, CardHeader } from "@nextui-org/card";

interface Props {
  counter: number;
  title: string;
}

export const InformationCard = ({ counter, title }: Props) => {
  return (
    <Card className="bg-gameRanks_secondary w-full md:w-[180px] text-white">
      <CardHeader>
        <h5 className="text-center w-full line-clamp-1">{title}</h5>
      </CardHeader>
      <CardBody>
        <p className="text-center text-4xl font-semibold line-clamp-1">
          {counter}
        </p>
      </CardBody>
    </Card>
  );
};
