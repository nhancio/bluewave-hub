import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

const HeroCarousel = () => {
  return (
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
  );
};

export default HeroCarousel;