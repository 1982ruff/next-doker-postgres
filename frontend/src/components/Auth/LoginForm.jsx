"use client";
import Image from "next/image";
import image from "/public/auth/image.jpg";
import H3 from "../Headings/H3";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import H6 from "../Headings/H6";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import * as z from "zod";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(5).max(50).email({ message: "Must be email" }),
  password: z.string().min(5, { message: "Must have at least 5 character" }),
  // .regex(passwordValidation, {
  //   message: "Your password is not valid",
  // }),
});

const LoginForm = () => {
  const [checked, setChecked] = useState(false);

  console.log(checked);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="relative grid items-center justify-center w-full grid-cols-1 gap-10 lg:grid-cols-2">
      <Link
        href={"/"}
        className="absolute p-1 border top-2 right-5 rounded-xl "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </Link>
      {/* image */}
      <Image src={image} alt="/" className="rounded-xl " />

      {/* form */}
      <div className="flex flex-col items-center justify-center w-full h-full 2xl:gap-10">
        <H3>Login</H3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="border-0 bg-Lynx_White"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="border-0 bg-Lynx_White"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col items-center justify-between w-full gap-3 gap-y-6 lg:flex-row xl:flex-col">
              <Button
                size="lg"
                className="w-full xl:text-xl text-Lynx_White hover:bg-Lead bg-Satoimo_Brown"
              >
                Register
              </Button>

              <h5 className="text-center text-gray-300">OR</h5>

              <div className="flex justify-center gap-5 2xl:gap-14">
                <button className="flex items-center justify-center rounded-full xl:size-14 size-10 bg-Lynx_White">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0184 12.7395L16.4142 12.739C15.946 12.739 15.5664 13.1186 15.5664 13.5869V16.9747C15.5664 17.4429 15.946 17.8226 16.4142 17.8226H22.3858C21.7319 19.5197 20.5114 20.941 18.9543 21.8441L21.5006 26.2524C25.5852 23.8899 28 19.7447 28 15.1044C28 14.4437 27.9513 13.9714 27.8539 13.4395C27.7799 13.0355 27.4291 12.7395 27.0184 12.7395Z"
                      fill="#3D6AD6"
                    />
                    <path
                      d="M14.9988 22.913C12.0764 22.913 9.52522 21.3161 8.15501 18.9531L3.74731 21.4939C5.99036 25.3818 10.1923 27.9999 14.9988 27.9999C17.3567 27.9999 19.5816 27.365 21.4982 26.2585V26.2525L18.9519 21.8442C17.7872 22.5198 16.4394 22.913 14.9988 22.913Z"
                      fill="#12B347"
                    />
                    <path
                      d="M21.4996 26.2586V26.2525L18.9533 21.8442C17.7886 22.5198 16.4409 22.913 15.0002 22.913V28C17.3581 28 19.5831 27.3651 21.4996 26.2586Z"
                      fill="#12B347"
                    />
                    <path
                      d="M7.08648 15C7.08648 13.5594 7.47959 12.2116 8.15497 11.0469L3.74727 8.5061C2.63481 10.4168 2 12.6359 2 15C2 17.3642 2.63481 19.5832 3.74727 21.494L8.15497 18.9532C7.47959 17.7884 7.08648 16.4406 7.08648 15Z"
                      fill="#FFD500"
                    />
                    <path
                      d="M14.9988 7.08694C16.9045 7.08694 18.655 7.76416 20.0222 8.89063C20.3595 9.16851 20.8498 9.14845 21.1588 8.83945L23.559 6.43902C23.9095 6.08843 23.8845 5.51456 23.5101 5.18966C21.2193 3.20214 18.2387 2 14.9988 2C10.1923 2 5.99036 4.61812 3.74731 8.50602L8.15501 11.0468C9.52522 8.6838 12.0764 7.08694 14.9988 7.08694Z"
                      fill="#FF4B26"
                    />
                    <path
                      d="M20.0237 8.89063C20.361 9.16851 20.8513 9.14845 21.1602 8.83944L23.5604 6.43902C23.9109 6.08843 23.8859 5.51456 23.5115 5.18966C21.2207 3.20209 18.2401 2 15.0002 2V7.08694C16.9059 7.08694 18.6564 7.76416 20.0237 8.89063Z"
                      fill="#FF4B26"
                    />
                  </svg>
                </button>

                <button className="flex items-center justify-center rounded-full xl:size-14 size-10 bg-Lynx_White">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1205 16.56H9.15051C8.67051 16.56 8.52051 16.38 8.52051 15.93V12.3C8.52051 11.82 8.70051 11.67 9.15051 11.67H12.1205V9.03003C12.1205 7.83003 12.3305 6.69003 12.9305 5.64003C13.5605 4.56003 14.4605 3.84003 15.6005 3.42003C16.3505 3.15003 17.1005 3.03003 17.9105 3.03003H20.8505C21.2705 3.03003 21.4505 3.21003 21.4505 3.63003V7.05003C21.4505 7.47003 21.2705 7.65003 20.8505 7.65003C20.0405 7.65003 19.2305 7.65003 18.4205 7.68003C17.6105 7.68003 17.1905 8.07003 17.1905 8.91003C17.1605 9.81003 17.1905 10.68 17.1905 11.61H20.6705C21.1505 11.61 21.3305 11.79 21.3305 12.27V15.9C21.3305 16.38 21.1805 16.53 20.6705 16.53H17.1905V26.31C17.1905 26.82 17.0405 27 16.5005 27H12.7505C12.3005 27 12.1205 26.82 12.1205 26.37V16.56Z"
                      fill="#3D6AD6"
                    />
                  </svg>
                </button>

                <button className="flex items-center justify-center rounded-full xl:size-14 size-10 bg-Lynx_White">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7736 0H20.987C21.1582 2.11566 20.3507 3.69648 19.3693 4.84126C18.4063 5.97813 17.0876 7.08075 14.9548 6.91345C14.8125 4.82809 15.6214 3.36451 16.6015 2.22237C17.5105 1.15795 19.1769 0.210776 20.7736 0ZM27.2299 22.0208V22.0801C26.6305 23.8954 25.7755 25.4512 24.7322 26.895C23.7797 28.2058 22.6126 29.9697 20.5285 29.9697C18.7277 29.9697 17.5316 28.8118 15.6859 28.7801C13.7336 28.7485 12.66 29.7484 10.875 30H10.2664C8.95561 29.8103 7.89778 28.7722 7.12713 27.8369C4.8547 25.0731 3.09868 21.5031 2.77197 16.9345V15.5921C2.91029 12.3225 4.49902 9.66407 6.61073 8.37571C7.72521 7.69069 9.25728 7.1071 10.9633 7.36794C11.6944 7.48123 12.4413 7.73152 13.096 7.97919C13.7165 8.21763 14.4924 8.64049 15.2275 8.6181C15.7255 8.60361 16.2208 8.34409 16.7227 8.16098C18.1929 7.63009 19.634 7.02147 21.5337 7.30734C23.8166 7.65248 25.437 8.66684 26.4382 10.2319C24.5069 11.4609 22.9801 13.3131 23.2409 16.4761C23.4728 19.3492 25.1432 21.0302 27.2299 22.0208Z"
                      fill="#222222"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-6 text-center lg:mt-2">
              <H6>
                Don't have an account ?{" "}
                <Link href={"/register"} className=" text-Orange">
                  Register
                </Link>
              </H6>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
