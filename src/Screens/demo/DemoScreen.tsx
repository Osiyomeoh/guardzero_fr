"use client";
import { useDemo } from "@/src/hooks/UI/UseDemo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import CustomError from "@/src/components/reuseables/CustomError";
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/src/lib/utils";
import { Calendar } from "@/src/components/ui/calendar";
import { Textarea } from "@/src/components/ui/textarea";

const DemoScreen = () => {
  return (
    <div className="!min-h-screen md:!min-h-max h-screen w-screen bg-black text-waitlistText">
      <div className="py-5 px-5 md:px-5 fixed bg-black w-full">
        <Image
          src="/images/GuardZeroLogoWhite.png"
          alt="logo"
          className=""
          width={156}
          height={48}
        />
      </div>
      <div className=" px-5 xl:px-20 py-10 md:py-16 grid grid-cols-2 md:gap-5 lg:gap-0 h-full">
        <div className="col-span-2 md:col-span-1 flex items-center xl:px-20 md:py-6 ">
          <ColumnOne />
        </div>
        <div className="hidden md:block col-span-1 relative">
          <Image
            src={"/images/demo.jpeg"}
            alt="demo"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DemoScreen;

function ColumnOne() {
  const { error, form, isError, isPending, mutateAsync, onSubmit } = useDemo();

  return (
    <div className="w-full">
      <h1 className="text-waitlistText text-2xl lg:text-3xl mt-16 lg:mt-0">
        Schedule a demo
      </h1>
      <p className="md:mt-1.5 font-normal md:text-lg text-waitlist-blue-100">
        Our friendly team would love to hear from you.
      </p>
      <div className="items-center z-40 justify-center flex-col mt-8 w-full space-y-2">
        <CustomError isError={isError} error={error} />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 md:grid-cols-2 gap-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel className="text-waitlistInput">
                    Name
                    <span className="text-waitlist-blue-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tell us your name"
                      {...field}
                      type="text"
                      className="!rounded-lg h-10 border-waitlist-black-300 !bg-waitlist-black-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel className="text-waitlistInput">
                    Phone Number
                    <span className="text-waitlist-blue-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number"
                      {...field}
                      type="tel"
                      // leftIcon={<Sms size="20" variant="Bold" color="gray" />}
                      className="!rounded-lg h-10 border-waitlist-black-300 !bg-waitlist-black-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel className="text-waitlistInput">
                    Email
                    <span className="text-waitlist-blue-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      {...field}
                      type="email"
                      className="!rounded-lg h-10 border-waitlist-black-300 bg-waitlist-black-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-waitlistInput">
                    Company
                    <span className="text-waitlist-blue-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your company name"
                      {...field}
                      type="text"
                      className="!rounded-lg h-10 border-waitlist-black-300 !bg-waitlist-black-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-waitlistInput">
                    Position
                    <span className="text-waitlist-blue-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your position"
                      {...field}
                      type="text"
                      className="!rounded-lg h-10 border-waitlist-black-300 !bg-waitlist-black-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel className="text-waitlistInput">
                    Message <span className="text-waitlist-blue-500">*</span>
                  </FormLabel>
                  <Textarea {...field} />

                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={isPending}
              className="text-waitlistText bg-[#7F56D9] disabled:bg-gray-200 disabled:text-gray-900 rounded-full h-12 col-span-1 md:col-span-2"
            >
              {isPending ? "Requesting demo..." : "Request demo"}
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}
