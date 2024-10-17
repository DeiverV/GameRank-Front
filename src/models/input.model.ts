import { InputProps } from "@nextui-org/input";

export interface InputModel extends InputProps {
  name: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password" | "email";
  autoComplete?: string;
  placeholder?: string;
}
