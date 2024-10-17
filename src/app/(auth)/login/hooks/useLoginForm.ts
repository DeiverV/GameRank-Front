import { InputModel } from "@/src/models";
import { LoginPayload } from "@/src/store/models";
import { useState } from "react";

export const useLoginForm = () => {
  const [formValues, setFormValues] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateForm = () => {
    return {
      isEmailValid: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        formValues.email
      ),
      isPasswordValid: formValues.password.length > 0,
    };
  };

  const formFields: Record<keyof LoginPayload, InputModel> = {
    email: {
      name: "email",
      value: formValues.email,
      label: "Email",
      onChange: onInputChange,
      type: "email",
      autoComplete: "email",
      isInvalid: touched.email && !validateForm().isEmailValid,
      errorMessage: "Please enter a valid email address",
    },
    password: {
      name: "password",
      value: formValues.password,
      label: "Password",
      onChange: onInputChange,
      type: "password",
      autoComplete: "current-password",
      isInvalid: touched.password && !validateForm().isPasswordValid,
      required: true,
      errorMessage: "Please enter your password"
    },
  };

  const submitButton = {
    isDisabled: !validateForm().isEmailValid || !validateForm().isPasswordValid,
  };

  return { formFields, submitButton, formValues };
};
