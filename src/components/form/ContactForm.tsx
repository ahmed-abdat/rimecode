"use client";



import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import { motion, AnimatePresence } from "framer-motion";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";

import {

  Form,

  FormControl,

  FormField,

  FormItem,

  FormLabel,

  FormMessage,

} from "@/components/ui/form";

import {

  Select,

  SelectContent,

  SelectItem,

  SelectTrigger,

  SelectValue,

} from "@/components/ui/select";

import { CheckCircle2 } from "lucide-react";

import { useRouter } from "next/navigation";



interface ContactFormProps {

  selectedPlan?: string | null;

}



const formSchema = z.object({

  fullName: z

    .string()

    .min(2, "Full name must be at least 2 characters")

    .max(50, "Full name must not exceed 50 characters"),

  email: z.string().email("Invalid email address"),

  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),

  companyName: z

    .string()

    .min(2, "Company name must be at least 2 characters")

    .max(100, "Company name must not exceed 100 characters"),

  selectedPlan: z.enum(["Select plan", "BASIC PACKAGE", "STARTUP PACKAGE", "CUSTOM PACKAGE"]),

  additionalDetails: z

    .string()

    .max(500, "Additional details must not exceed 500 characters"),

  emailNews: z.boolean().default(false),

});



type FormValues = z.infer<typeof formSchema>;



const formVariants = {

  hidden: { opacity: 0, y: 20 },

  visible: {

    opacity: 1,

    y: 0,

    transition: {

      type: "spring",

      stiffness: 100,

      damping: 15,

    },

  },

};



const fieldVariants = {

  hidden: { opacity: 0, x: -20 },

  visible: {

    opacity: 1,

    x: 0,

    transition: {

      type: "spring",

      stiffness: 100,

      damping: 15,

    },

  },

};



const ContactForm: React.FC<ContactFormProps> = ({ selectedPlan }) => {

  console.log("selectedPlan", selectedPlan);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const router = useRouter();



  // Update the mapping to match the exact names from the pricing section

  const decodedPlan = selectedPlan ? decodeURIComponent(selectedPlan) : null;

  const mappedPlan = decodedPlan && ["BASIC PACKAGE", "STARTUP PACKAGE", "CUSTOM PACKAGE"].includes(decodedPlan)

    ? decodedPlan as "BASIC PACKAGE" | "STARTUP PACKAGE" | "CUSTOM PACKAGE"

    : "Select plan";



  const form = useForm<FormValues>({

    resolver: zodResolver(formSchema),

    defaultValues: {

      fullName: "",

      email: "",

      phoneNumber: "",

      companyName: "",

      selectedPlan: mappedPlan,

      additionalDetails: "",

      emailNews: false,

    },

  });



  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Remove the search params from the URL
      router.replace('/contact', { scroll: false });
      // make the Select plan as default value
      form.setValue("selectedPlan", "Select plan");
    }
  }, [isSubmitted, router]);



  const onSubmit = async (data: FormValues) => {

    setIsSubmitting(true);

    // Simulate API call

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);

    setIsSubmitting(false);

    setIsSubmitted(true);

    form.reset();

    // Here you would typically send the data to your backend

  };



  const handleReset = () => {

    form.reset();

  };



  return (

    <motion.div

      variants={formVariants}

      initial="hidden"

      animate="visible"

      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"

    >

      <AnimatePresence mode="wait">

        {!isSubmitted ? (

          <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              {["fullName", "email", "phoneNumber", "companyName"].map((fieldName) => (

                <motion.div key={fieldName} variants={fieldVariants}>

                  <FormField

                    control={form.control}

                    name={fieldName as keyof FormValues}

                    render={({ field }) => (

                      <FormItem>

                        <FormLabel className="text-gray-700 dark:text-gray-300">{fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</FormLabel>

                        <FormControl>

                          <Input 

                            placeholder={`Enter your ${fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()}`} 

                            {...field} 

                            value={field.value?.toString() ?? ''}

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-300 ease-in-out hover:border-blue-400"

                          />

                        </FormControl>

                        <FormMessage className="text-red-500" />

                      </FormItem>

                    )}

                  />

                </motion.div>

              ))}



              <motion.div variants={fieldVariants}>

                <FormField

                  control={form.control}

                  name="selectedPlan"

                  render={({ field }) => (

                    <FormItem className="space-y-2">

                      <FormLabel className="text-gray-700 dark:text-gray-300">

                        Selected Plan

                      </FormLabel>

                      <Select onValueChange={field.onChange} defaultValue={field.value}>

                        <FormControl>

                          <SelectTrigger className="w-full bg-gray-50 border p-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                            <SelectValue placeholder="Select a plan" />

                          </SelectTrigger>

                        </FormControl>

                        <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">

                          <SelectItem value="Select plan" className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700">Select plan</SelectItem>

                          <SelectItem value="BASIC PACKAGE" className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700">BASIC PACKAGE</SelectItem>

                          <SelectItem value="STARTUP PACKAGE" className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700">STARTUP PACKAGE</SelectItem>

                          <SelectItem value="CUSTOM PACKAGE" className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700">CUSTOM PACKAGE</SelectItem>

                        </SelectContent>

                      </Select>

                      <FormMessage className="text-red-500" />

                    </FormItem>

                  )}

                />

              </motion.div>



              <motion.div variants={fieldVariants}>

                <FormField

                  control={form.control}

                  name="additionalDetails"

                  render={({ field }) => (

                    <FormItem>

                      <FormLabel className="text-gray-700 dark:text-gray-300">Additional details</FormLabel>

                      <FormControl>

                        <Textarea

                          placeholder="Please provide any additional information..."

                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none min-h-[120px] transition-all duration-300 ease-in-out hover:border-blue-400"

                          {...field}

                        />

                      </FormControl>

                      <FormMessage className="text-red-500" />

                    </FormItem>

                  )}

                />

              </motion.div>

              <motion.div variants={fieldVariants}>

                <FormField

                  control={form.control}

                  name="emailNews"

                  render={({ field }) => (

                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">

                      <FormControl>

                        <Checkbox

                          checked={field.value}

                          onCheckedChange={field.onChange}

                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"

                        />

                      </FormControl>

                      <div className="space-y-1 leading-none">

                        <FormLabel className="text-gray-700 dark:text-gray-300">

                          Email me news and special offers

                        </FormLabel>

                      </div>

                    </FormItem>

                  )}

                />

              </motion.div>

              <motion.div

                variants={fieldVariants}

                className="flex justify-between space-x-4"

              >

                <Button

                  type="submit"

                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full"

                  disabled={isSubmitting}

                >

                  {isSubmitting ? "Sending..." : "Submit"}

                </Button>

                <Button

                  type="button"

                  variant="outline"

                  onClick={handleReset}

                  className="border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"

                >

                  Reset

                </Button>

              </motion.div>

            </form>

          </Form>

        ) : (

          <motion.div

            initial={{ opacity: 0, scale: 0.8 }}

            animate={{ opacity: 1, scale: 1 }}

            exit={{ opacity: 0, scale: 0.8 }}

            transition={{ duration: 0.5, ease: "easeOut" }}

            className="text-center p-4 h-full sm:p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-lg shadow-lg"

          >

            <motion.div

              initial={{ scale: 0 }}

              animate={{ scale: 1 }}

              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}

              className="mb-4 sm:mb-6"

            >

              <CheckCircle2 className="w-14 h-14 sm:w-18 sm:h-18 mx-auto text-green-500 dark:text-green-400" />

            </motion.div>

            <motion.h3

              initial={{ y: 20, opacity: 0 }}

              animate={{ y: 0, opacity: 1 }}

              transition={{ delay: 0.4, duration: 0.5 }}

              className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 sm:mb-4"

            >

              Thank You!

            </motion.h3>

            <motion.p

              initial={{ y: 20, opacity: 0 }}

              animate={{ y: 0, opacity: 1 }}

              transition={{ delay: 0.6, duration: 0.5 }}

              className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-8"

            >

              Your message has been sent successfully. We&apos;re excited to connect with you!

            </motion.p>

            <motion.div

              initial={{ y: 20, opacity: 0 }}

              animate={{ y: 0, opacity: 1 }}

              transition={{ delay: 0.8, duration: 0.5 }}

            >

              <Button

                onClick={() => setIsSubmitted(false)}

                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base"

              >

                Send Another Message

              </Button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>

  );

};



export default ContactForm;



