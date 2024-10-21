import { useState } from "react";

export const useUpdateUserForm = () => {
  const [formValues, setFormValues] = useState<{
    username: string;
    image: File | null;
  }>({
    username: "",
    image: null,
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (name === "image" && files) {
      setFormValues((prev) => ({ ...prev, [name]: files[0] }));
      return;
    }

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const formFields = {
    username: {
      name: "username",
      value: formValues.username,
      label: "Username",
      onChange: onInputChange,
      required: true,
      isRequired: true,
      type: "text",
    },
    image: {
      name: "image",
      value: formValues.image,
      label: "User Image",
      onChange: onInputChange,
    },
  };

  return { formFields, formValues };
};
