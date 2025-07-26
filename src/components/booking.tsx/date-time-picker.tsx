import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import type { ControllerRenderProps } from "react-hook-form";
import type { BookingFormValues } from "./validation";

interface DateTimePickerProps {
  field: ControllerRenderProps<BookingFormValues>;
}

const DateTimePicker = ({ field }: DateTimePickerProps) => {
  const [open, setOpen] = React.useState(false);
  const { value, onChange } = field;

  return (
    <FormItem>
      <FormLabel>Date</FormLabel>
      <FormControl>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="w-full justify-between font-normal"
            >
              {value ? new Date(value).toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={value ? new Date(value) : undefined}
              captionLayout="dropdown"
              disabled={(dateObj) => {
                // Disable all dates before today
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return dateObj < today;
              }}
              onSelect={(date) => {
                setOpen(false);
                onChange(date?.toISOString() || "");
              }}
            />
          </PopoverContent>
        </Popover>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default DateTimePicker;
