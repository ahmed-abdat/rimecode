import { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | RimeCode",
  description: "Get in touch with us for any inquiries or support.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      <ContactPageContent />
    </main>
  );
}
