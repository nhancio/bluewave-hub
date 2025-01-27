const AboutSection = () => {
  return (
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;