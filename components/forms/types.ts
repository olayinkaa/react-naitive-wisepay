import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface BaseControlledProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
}
