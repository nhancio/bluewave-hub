import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ResourcesSection = () => {
  return (
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
  );
};

export default ResourcesSection;