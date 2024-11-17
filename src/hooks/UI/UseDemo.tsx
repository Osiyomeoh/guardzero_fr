import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useRequestDemoMutation } from "../demo";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "This field is required",
  }),
  phoneNumber: z.string().min(1, {
    message: "This field is required",
  }),
  position: z.string().min(1, {
    message: "This field is required",
  }),
  message: z.string().min(1, {
    message: "This field is required",
  }),
  company: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .min(1, {
      message: "This field is required",
    })
    .email("Enter a valid email address."),
});

export const useDemo = () => {
  const { mutateAsync, isPending, isError, error } = useRequestDemoMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      company: "",
      position: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutateAsync(values).then(() => {
      form.reset();
      form.resetField("email");
      form.resetField("name");
      form.resetField("phoneNumber");
      form.resetField("company");
      form.resetField("position");
      form.resetField("message");
    });
  }

  return { mutateAsync, form, onSubmit, error, isError, isPending };
};
