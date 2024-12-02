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

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const { error } = await loginAction(data);

    if (error) {
      form.setError("root.server", {
        type: "server",
        message: error.message,
      });
    }
  };

  const errors = form.formState.errors;
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

        <Button
          className="bg-violet-700 text-base hover:bg-violet-900 disabled:bg-violet-500"
          type="submit"
          disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting
            ? "Iniciando sesión..."
            : "Iniciar sesión"}
        </Button>

        {errors.root?.server && <p className="text-red-600 text-sm text-center">{errors.root.server.message}</p>}
      </form>
    </Form>
  );
};
