import { InputModel } from "@/src/models";
import { useEffect, useState } from "react";

export const useRegisterForm = () => {
  const [firstSubmitted, setFirstSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isValid, setIsValid] = useState({
    name: true,
    username: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const name = formValues.name.length > 0;
    const username = /^[^\s]+$/.test(formValues.username);
    const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      formValues.email
    );
    const passwordValidation =
      formValues.password.toString() ===
        formValues.confirmPassword.toString() &&
      formValues.password.toString().length > 0;

    setIsValid({
      name,
      username,
      email,
      password: passwordValidation,
      confirmPassword: passwordValidation,
    });

    if (!firstSubmitted) setFirstSubmitted(true);

    return { isGeneralValid: name && username && email && passwordValidation };
  };

  useEffect(() => {
    if (firstSubmitted) validateForm();
  }, [formValues]);

  const formFields: Record<
    "name" | "username" | "email" | "password" | "confirmPassword",
    InputModel
  > = {
    name: {
      name: "name",
      value: formValues.name,
      label: "Name",
      onChange: onInputChange,
      type: "text",
      autoComplete: "name",
      isInvalid: !isValid.name,
      errorMessage: "Name is required",
    },
    username: {
      name: "username",
      value: formValues.username,
      label: "username",
      onChange: onInputChange,
      type: "text",
      autoComplete: "username",
      isInvalid: !isValid.username,
      errorMessage: "Username is Required and Must Not Contain Spaces",
    },
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
      autoComplete: "none",
      isInvalid: !isValid.password,
      errorMessage: "Password is Required and Should Match",
    },
    confirmPassword: {
      name: "confirmPassword",
      value: formValues.confirmPassword,
      label: "Confirm Password",
      onChange: onInputChange,
      type: "password",
      autoComplete: "none",
      isInvalid: !isValid.confirmPassword,
      errorMessage: "Password is Required and Should Match",
    },
  };

  const submitButton = {
    isDisabled: !(
      isValid.confirmPassword &&
      isValid.password &&
      isValid.email &&
      isValid.username &&
      isValid.name
    ),
  };

  return { formFields, submitButton, formValues, validateForm };
};
