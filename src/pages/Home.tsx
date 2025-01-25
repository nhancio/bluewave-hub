import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel Section */}
      <section id="home" className="relative h-[600px] overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <h1 className="text-5xl font-bold mb-4">{item.title}</h1>
                      <p className="text-xl mb-8">{item.description}</p>
                      <Button
                        variant="outline"
                        size="lg"
                        className="text-white border-white hover:bg-white hover:text-primary"
                      >
                        {item.buttonText} <ArrowRight className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="/placeholder.svg"
              alt="About us"
              className="w-full md:w-1/2 rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-lg text-gray-700">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Blog thumbnail"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Blog Post Title {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold mb-4">Hackathons</h2>
            <p className="text-xl text-gray-600">Coming Soon</p>
            <div className="animate-pulse">
              <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Getting Started Guide", size: "2.5 MB" },
              { title: "Best Practices", size: "1.8 MB" },
              { title: "Documentation", size: "3.2 MB" },
            ].map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <ArrowRight className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">Size: {resource.size}</p>
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-center space-x-2">
                <ArrowRight className="text-primary" />
                <a href="mailto:hello@nhancio.com" className="text-primary hover:underline">
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
              <Button type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
    title: "Advanced AI Solutions",
    description: "Transforming businesses with cutting-edge artificial intelligence",
    buttonText: "Learn More",
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    title: "Expert Consulting",
    description: "Get insights from our team of AI specialists",
    buttonText: "Contact Us",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    title: "Innovation Hub",
    description: "Join our community of innovators and creators",
    buttonText: "Join Now",
  },
];

export default Home;