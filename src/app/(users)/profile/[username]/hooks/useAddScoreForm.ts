import { InputModel } from "@/src/models";
import { useState } from "react";

export const useAddScoreForm = () => {
  const [formValues, setFormValues] = useState({
    score: 0,
    game: "",
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const formFields: Record<"score" | "game", InputModel> = {
    game: {
      name: "game",
      value: formValues.game,
      label: "Game",
      onChange: onInputChange,
      required: true,
      isRequired: true,
      type: "text",
    },
    score: {
      name: "score",
      value: formValues.score.toString(),
      label: "Score",
      type: "text",
      onChange: onInputChange,
      required: true,
      isRequired: true,
    },
  };

  return { formFields, formValues };
};
