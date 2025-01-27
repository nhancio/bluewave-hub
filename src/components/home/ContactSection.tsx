import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center space-x-2">
              <ArrowRight className="text-primary" />
              <a
                href="mailto:hello@nhancio.com"
                className="text-primary hover:underline"
              >
                hello@nhancio.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="text-primary" />
              <a href="tel:7095288950" className="text-primary hover:underline">
                709-528-8950
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 border rounded"
            ></textarea>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;