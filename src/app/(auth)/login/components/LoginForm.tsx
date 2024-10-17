"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import React from "react";

export const LoginForm = () => {
  return (
    <div className="grid gap-3">
      <form className="grid gap-3">
        <Input label="Email" size="sm" type="email" />
        <Input label="Password" size="sm" type="password" />
        <Button
          className="bg-gameRanks_secondary text-gameRanks_neutral_1"
          onClick={(e) => e.preventDefault()}
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
