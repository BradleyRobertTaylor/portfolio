"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { motion } from "framer-motion";

const contactFormSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email().min(1),
  message: z.string().min(1),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormInputs) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <motion.form
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 1,
          delay: 0.5,
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <Card className="border-none">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">Contact</CardTitle>
            <CardDescription>
              Get in touch with me here or shoot me an email directly at{" "}
              <Link
                target="_blank"
                href="mailto:taylorbradleyr@gmail.com"
                className="font-bold hover:text-black dark:hover:text-white transition-colors duration-500"
              >
                taylorbradleyr@gmail.com
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder="How can I help?"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" variant="outline">
              Send Message
            </Button>
          </CardFooter>
        </Card>
      </motion.form>
    </Form>
  );
}
