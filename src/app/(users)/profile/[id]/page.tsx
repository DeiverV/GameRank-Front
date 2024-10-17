import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <div className="grid gap-4">
      <h1>Profile</h1>
      <div className="relative h-[120px] mb-[120px]">
        <figure className="w-full h-[120px] rounded-md bg-gradient-to-tr from-gameRanks_primary to-gameRanks_secondary" />
        <figure className="w-[120px] h-[120px] bg-gameRanks_tertiary border rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 md:left-[10%]" />
      </div>

      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-4 md:min-h-[400px]">
        <Card className="flex-[2] bg-gameRanks_secondary text-white">
          <CardHeader>
            <h3>Relevant Data</h3>
          </CardHeader>
          <CardBody className="max-h-[300px]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
              consequuntur. Mollitia, culpa impedit accusantium a quod omnis
              neque corporis laudantium debitis maiores vero nihil quibusdam
              alias placeat distinctio facilis quos.
            </p>
          </CardBody>
        </Card>
        <Card className="flex-1 bg-gradient-to-tr from-gameRanks_quaternary to-gameRanks_tertiary">
          <CardHeader>
            <h3>Relevant Data</h3>
          </CardHeader>
          <CardBody className="max-h-[300px]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
              consequuntur. Mollitia, culpa impedit accusantium a quod omnis
              neque corporis laudantium debitis maiores vero nihil quibusdam
              alias placeat distinctio facilis quos.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
