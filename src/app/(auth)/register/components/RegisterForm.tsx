"use client";
import { APP_ROUTES } from "@/src/config";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { useRegisterForm } from "../hooks";
import { useRegisterMutation } from "@/src/store/services";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const { formFields, formValues, submitButton, validateForm } =
    useRegisterForm();

  const [register, result] = useRegisterMutation();
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { isGeneralValid } = validateForm();

    if (!isGeneralValid) return;
    const { name, username, email, password } = formValues;

    await register({ name, username, email, password });
  };

  useEffect(() => {
    if (result.isSuccess) {
      router.push(APP_ROUTES.AUTH.LOGIN.path);
    }
  }, [result]);

  return (
    <div className="grid gap-3">
      <form className="grid gap-3" onSubmit={onSubmit}>
        <Input size="sm" {...formFields.name} />
        <Input size="sm" {...formFields.username} />
        <Input size="sm" {...formFields.email} />

        <div className="flex items-center justify-between gap-2">
          <Input size="sm" {...formFields.password} />
          <Input size="sm" {...formFields.confirmPassword} />
        </div>

        <Button
          type="submit"
          className="bg-gameRanks_secondary text-gameRanks_neutral_1"
          {...submitButton}
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
        href={APP_ROUTES.AUTH.LOGIN.path}
        className="bg-gameRanks_secondary text-gameRanks_neutral_1"
      >
        Log In with your account
      </Button>
    </div>
  );
};
