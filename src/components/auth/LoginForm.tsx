"use client";

import { loginAction } from "@/actions/auth/auth";
import { ViewIcon, ViewOffSlashIcon } from "hugeicons-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth/auth";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  /* const [formState, formAction, isFormPending] = useActionState<
    LoginState,
    FormData
  >(loginAction, initialFormState); */

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input placeholder="Ej. username@fabula.com" {...field} />
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
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="********"
                    {...field}
                    type={showPassword ? "text" : "password"}
                    className="w-full outline-violet-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-2 text-violet-700 outline-none border-none">
                    {showPassword ? (
                      <ViewOffSlashIcon size={24} />
                    ) : (
                      <ViewIcon size={24} />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-violet-700 text-base" type="submit">
          {" "}
          Iniciar sesión{" "}
        </Button>
      </form>
    </Form>
  );
};
