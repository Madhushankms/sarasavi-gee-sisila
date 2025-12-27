"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";

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

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      // alert("Message sent successfully!");
      console.log("Message sent successfully!");
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      // alert("Failed to send message. Please try again.");
      console.error("Failed to send message. Please try again.");
      toast.error("Failed to send message. Please try again.");
    }
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
          disabled={isSubmitting}
          className="bg-amber-400 rounded-[5px] hover:text-white text-md tracking-[1px]"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default FormContact;
