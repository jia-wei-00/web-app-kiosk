import { ChevronDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { guestNumber, type BookingFormValues } from "./validation";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import type { ControllerRenderProps } from "react-hook-form";

interface GuesDropdownProps {
  field: ControllerRenderProps<BookingFormValues>;
}

const GuestDropdown = ({ field }: GuesDropdownProps) => {
  const { value, onChange } = field;

  return (
    <FormItem>
      <FormLabel>Number of Guests</FormLabel>
      <FormControl>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              id="guest-dropdown"
              className="w-full justify-between font-normal"
            >
              {value ? value : "Select number of guests"}
              <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel>Select number of guests</DropdownMenuLabel>
            <DropdownMenuGroup>
              {guestNumber.map((guest) => (
                <DropdownMenuItem
                  key={guest.value}
                  onClick={() => onChange(guest.value)}
                >
                  {guest.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default GuestDropdown;
