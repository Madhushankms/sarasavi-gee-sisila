"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().optional(),
  email: z
    .string()
    .email({ message: "Enter a valid email" })
    .min(1, { message: "Email is required" }),
  mobile: z
    .string()
    .min(1, { message: "Mobile number is required" })
    .regex(/^[0-9()+\-\s]{6,20}$/, { message: "Enter a valid mobile number" }),
  company: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    alert(JSON.stringify(values, null, 2));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1">
          <Input
            id="firstName"
            className="placeholder:font-poppins"
            placeholder="First Name *"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-sm text-destructive mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Input
            id="lastName"
            className="placeholder:font-poppins"
            placeholder="Last Name"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-sm text-destructive mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Input
            id="email"
            type="email"
            className="placeholder:font-poppins"
            placeholder="Email Address *"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Input
            id="mobile"
            placeholder="Mobile Number *"
            className="placeholder:font-poppins"
            {...register("mobile")}
          />
          {errors.mobile && (
            <p className="text-sm text-destructive mt-1">
              {errors.mobile.message}
            </p>
          )}
        </div>

        <div className="grid col-span-2">
          <Textarea
            id="message"
            placeholder="Message *"
            className="placeholder:font-poppins"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <div className="pt-2 flex justify-end  font-poppins ">
        <Button
          type="submit"
          className="bg-amber-400 rounded-[5px] text-md tracking-[1px]"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
}

export default FormContact;
