"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";

export const RegisterForm = () => {
  return (
    <div className="grid gap-3">
      <form className="grid gap-3">
        <Input label="Name" size="sm" type="text" />
        <Input label="Username" size="sm" type="text" />
        <Input label="Email" size="sm" type="email" />

        <div className="flex items-center justify-between gap-2">
          <Input label="Password" size="sm" type="password" />
          <Input label="Confirm Password" size="sm" type="password" />
        </div>

        <Button
          className="bg-gameRanks_secondary text-gameRanks_neutral_1"
          onClick={(e) => e.preventDefault()}
        >
          Create Account
        </Button>
      </form>

      <div className="flex items-center justify-between">
        <figure className="flex-1 h-[1px] bg-gameRanks_secondary rounded-lg" />
        <p className="p-2 text-center break-keep">Or Try</p>
        <figure className="flex-1 h-[1px] bg-gameRanks_secondary rounded-lg" />
      </div>

      <Button
        as={Link}
        href="/login"
        className="bg-gameRanks_secondary text-gameRanks_neutral_1"
      >
        Log In with your account
      </Button>
    </div>
  );
};
