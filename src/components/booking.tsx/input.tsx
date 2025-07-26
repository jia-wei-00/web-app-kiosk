import type { ControllerRenderProps } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import type { BookingFormValues } from "./validation";
import { Input } from "../ui/input";
import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<typeof Input> {
  label: string;
  field: ControllerRenderProps<BookingFormValues>;
}

const InputItem = ({ label, field, ...rest }: InputProps) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input {...field} {...rest} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default InputItem;
