"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import React from "react";
import { useLoginForm } from "../hooks";
import { useLoginMutation } from "@/src/store/services";

export const LoginForm = () => {
  const { formFields, submitButton, formValues } = useLoginForm();
  const [login] = useLoginMutation();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await login(formValues);
    console.log(res.data);
  };

  return (
    <div className="grid gap-3">
      <form className="grid gap-3" onSubmit={onSubmit}>
        <Input size="sm" {...formFields.email} />
        <Input size="sm" {...formFields.password} />
        <Button
          className="bg-gameRanks_secondary text-gameRanks_neutral_1"
          type="submit"
          {...submitButton}
        >
          Login
        </Button>
      </form>

      <div className="flex items-center justify-between">
        <figure className="flex-1 h-[1px] bg-gameRanks_secondary rounded-lg" />
        <p className="p-2 text-center break-keep">Or Try</p>
        <figure className="flex-1 h-[1px] bg-gameRanks_secondary rounded-lg" />
      </div>

      <Button
        as={Link}
        href="/register"
        className="bg-gameRanks_secondary text-gameRanks_neutral_1"
      >
        Create an account
      </Button>
    </div>
  );
};
