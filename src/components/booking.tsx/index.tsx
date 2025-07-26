import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { bookingFormSchema, type BookingFormValues } from "./validation";
import InputItem from "./input";
import DateTimePicker from "./date-time-picker";
import GuestDropdown from "./dropdown-picker";

const BookingForm = ({ id }: { id: string }) => {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      movieTheme: "",
      numberOfGuests: "",
    },
  });

  function onSubmit(data: BookingFormValues) {
    console.log("Booking submitted:", data);
    alert(
      "Booking submitted successfully! We'll contact you soon to confirm your movie night birthday party."
    );

    form.reset();
  }

  return (
    <div id={id} className="mx-auto max-w-7xl px-6 py-20">
      <div className="w-full p-6 bg-background rounded-lg border shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Book Your Movie Night Birthday Party!
          </h2>
          <p className="text-muted-foreground">
            Create unforgettable memories with a personalized movie experience
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name, Email, Phone Row */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <InputItem
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <InputItem
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <InputItem
                  label="Phone"
                  placeholder="Enter your phone"
                  type="tel"
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => <DateTimePicker field={field} />}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <InputItem
                  label="Time"
                  field={field}
                  placeholder="Enter your time"
                  type="time"
                  id="time-picker"
                  step="1"
                  defaultValue="10:30:00"
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              )}
            />

            <FormField
              control={form.control}
              name="numberOfGuests"
              render={({ field }) => <GuestDropdown field={field} />}
            />

            <FormField
              control={form.control}
              name="movieTheme"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Movie Theme / Special Requests</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Tell us about your preferred movie theme, decorations, or any special requests..."
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto min-w-[200px]"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Reserving..." : "Reserve Now"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;
