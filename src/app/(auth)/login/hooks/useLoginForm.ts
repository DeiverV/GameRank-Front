import { InputModel } from "@/src/models";
import { LoginPayload } from "@/src/store/models";
import { useEffect, useState } from "react";

export const useLoginForm = () => {
  const [firstSubmitted, setFirstSubmitted] = useState(false);
  const [formValues, setFormValues] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      formValues.email
    );

    const password = formValues.password.length > 0;
    setIsValid({
      email,
      password,
    });

    if (!firstSubmitted) setFirstSubmitted(true);

    return { isGeneralValid: email && password };
  };

  useEffect(() => {
    if (firstSubmitted) validateForm();
  }, [formValues]);

  const formFields: Record<keyof LoginPayload, InputModel> = {
    email: {
      name: "email",
      value: formValues.email,
      label: "Email",
      onChange: onInputChange,
      type: "text",
      autoComplete: "email",
      isInvalid: !isValid.email,
      errorMessage: "Please enter a valid email address",
    },
    password: {
      name: "password",
      value: formValues.password,
      label: "Password",
      onChange: onInputChange,
      type: "password",
      autoComplete: "current-password",
      isInvalid: !isValid.password,
      errorMessage: "Please enter your password",
    },
  };

  const submitButton = {
    isDisabled: !(isValid.email && isValid.password),
  };

  return { formFields, submitButton, formValues, validateForm };
};
