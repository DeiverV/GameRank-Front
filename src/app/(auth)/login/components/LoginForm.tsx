"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { useLoginForm } from "../hooks";
import { useLoginMutation } from "@/src/store/services";
import { useRouter } from "next/navigation";

import { jwtDecode } from "jwt-decode";
import { TokenPayload } from "@/src/store/models";
import { useDispatch } from "react-redux";
import { loginInState } from "@/src/store/slices";
import { APP_ROUTES } from "@/src/config";
import { useEffect } from "react";

export const LoginForm = () => {
  const { formFields, submitButton, formValues } = useLoginForm();
  const [login, result] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await login(formValues);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (result.isSuccess) {
      const token = result.data.token;
      const { email, id, name, username } = jwtDecode<TokenPayload>(token);

      dispatch(loginInState({ email, id, name, username, token }));

      router.push(APP_ROUTES.USERS.PROFILE.path.replace(":username", username));
    }
  }, [result]);

  return (
    <div className="grid gap-3">
      <form className="grid gap-3" onSubmit={onSubmit}>
        <Input size="sm" {...formFields.email} />
        <Input size="sm" {...formFields.password} />
        <Button
          className="bg-gameRanks_secondary text-gameRanks_neutral_1"
          type="submit"
          isLoading={result.isLoading}
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
        href={APP_ROUTES.AUTH.REGISTER.path}
        className="bg-gameRanks_secondary text-gameRanks_neutral_1"
      >
        Create an account
      </Button>
    </div>
  );
};
