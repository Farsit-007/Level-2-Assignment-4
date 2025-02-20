const blogData = {
  blog: {
    title: "Essential Bike Parts for Beginners",
    description:
      "Starting with biking? Here's a list of the essential parts every beginner needs to know about to ensure a smooth ride and lasting bike life.",
    sections: [
      {
        cards: [
          {
            image: "https://via.placeholder.com/300",
            title: "Bike Frame",
            description: "The heart of your bike, where everything is mounted.",
          },
          {
            image: "https://via.placeholder.com/300",
            title: "Wheels",
            description:
              "A good pair of wheels can make all the difference in performance and comfort.",
          },
          {
            image: "https://via.placeholder.com/300",
            title: "Brakes",
            description: "Keep yourself safe with quality brake systems.",
          },
          {
            image: "https://via.placeholder.com/300",
            title: "Gears",
            description:
              "Mastering gear shifting for different terrains is key.",
          },
        ],
      },
      {
        title: "Like Section",
        buttonText: "Like this Post",
      },
    ],
  },
};

const Blogs = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Blog Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          {blogData.blog.title}
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          {blogData.blog.description}
        </p>
      </header>

      {/* Creative Design Section */}
      {blogData.blog.sections.map((section, index) => {
        if (section.cards) {
          return (
            <section key={index} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="bg-white shadow-lg rounded-lg p-4"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="rounded-lg mb-4"
                    />
                    <h3 className="font-bold text-xl text-gray-700">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Blogs;
