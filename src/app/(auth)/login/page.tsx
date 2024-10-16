"use client";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
      <Card className="h-fit w-[450px] p-2 gap-5">
        <h1>Login</h1>
        <form className="grid gap-2">
          <Input label="email" size="sm" type="email" />
          <Input label="password" size="sm" type="password" />
          <Button size="sm" color="primary" onClick={(e) => e.preventDefault()}>
            Login
          </Button>
        </form>
      </Card>
  );
};

export default Login;
