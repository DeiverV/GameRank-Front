import { NextPage } from "next";
import { LoginForm } from "./components";
import { AppDescription } from "../components";
import { Card, CardBody } from "@nextui-org/card";

const Login: NextPage = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-around items-center">
      <div className="grid lg:w-[50%] xl:w-[60%] h-[45%] lg:h-full place-items-center">
        <AppDescription />
      </div>

      <Card className="w-full h-[55%] lg:h-fit lg:w-[400px] lg:py-14 px-5 shadow-2xl grid place-items-center">
        <CardBody>
          <h1 className="font-semibold mb-4">Log In</h1>
          <LoginForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
