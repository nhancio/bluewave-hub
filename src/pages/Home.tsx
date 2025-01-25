import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
    title: "Advanced AI Solutions",
    description: "Transforming businesses with cutting-edge artificial intelligence",
    buttonText: "Learn More",
    link: "/about",
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    title: "Expert Consulting",
    description: "Get insights from our team of AI specialists",
    buttonText: "Contact Us",
    link: "/contact",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    title: "Innovation Hub",
    description: "Join our community of innovators and creators",
    buttonText: "Join Now",
    link: "/resources",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Carousel Section */}
      <div className="relative h-[600px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
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
                    onClick={() => window.location.href = item.link}
                  >
                    {item.buttonText} <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-primary-lighter to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800"
                alt="Why Choose Us"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We combine cutting-edge AI technology with deep industry expertise
                to deliver solutions that drive real business value. Our team of
                experts is dedicated to helping you navigate the complex world of
                artificial intelligence and machine learning.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="text-primary mr-2" />
                  Expert Team of AI Specialists
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="text-primary mr-2" />
                  Customized Solutions for Your Business
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="text-primary mr-2" />
                  Proven Track Record of Success
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;