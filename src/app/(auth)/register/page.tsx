import { NextPage } from "next";
import { AppDescription } from "../components";
import { Card, CardBody } from "@nextui-org/card";
import { RegisterForm } from "./components";

const Register: NextPage = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row-reverse justify-around items-center">
      <div className="grid lg:w-[50%] xl:w-[60%] h-[35%] lg:h-full place-items-center">
        <AppDescription
          title="Register"
          subtitle="Create an account"
          description="Create an account to start using GameRanks!"
        />
      </div>

      <Card className="w-full h-[65%] lg:h-fit lg:w-[480px] lg:py-14 px-5 shadow-2xl grid place-items-center">
        <CardBody>
          <h1 className="font-semibold mb-4">Register</h1>
          <RegisterForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
