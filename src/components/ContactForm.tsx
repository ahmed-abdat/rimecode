'use client'

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BackgroundLines } from "@/components/ui/background-lines";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    alert('Thank you for contacting us!');
  };

  return (
    <BackgroundLines className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4" id="contact">  
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.div
          className="max-w-3xl w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <LabelInputContainer>
                <Label htmlFor="name" className="text-base mb-2">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register('name')}
                  className={cn(
                    "bg-gray-50 dark:bg-zinc-900 border-0 focus-visible:ring-0 text-black dark:text-white",
                    errors.name && "border-red-500"
                  )}
                />
                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="email" className="text-base mb-2">Email</Label>
                <Input
                  id="email"
                  placeholder="Your email"
                  {...register('email')}
                  className={cn(
                    "bg-gray-50 dark:bg-zinc-900 border-0 focus-visible:ring-0 text-black dark:text-white",
                    errors.email && "border-red-500"
                  )}
                />
                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
              </LabelInputContainer>
            </div>
            <LabelInputContainer>
              <Label htmlFor="message" className="text-base mb-2">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message"
                {...register('message')}
                className={cn(
                  "bg-gray-50 dark:bg-zinc-900 border-0 focus-visible:ring-0 text-black dark:text-white min-h-[120px]",
                  errors.message && "border-red-500"
                )}
              />
              {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
            </LabelInputContainer>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md h-12 text-base font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            >
              Send Message
              <BottomGradient />
            </Button>
          </form>
        </motion.div>
      </div>
    </BackgroundLines>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactForm;