const blogData = {
  blog: {
    title: "Essential Bike Parts for Beginners",
    description:
      "Starting with biking? Here's a list of the essential parts every beginner needs to know about to ensure a smooth ride and lasting bike life.",
    sections: [
      {
        cards: [
          {
            image:
              "https://i.ibb.co.com/Rp3ZwWy8/motorbike-wall-with-white-background-vintage-custom-motorcycle-toy-460848-13004.jpg",
            title: "Bike Frame",
            description: "The heart of your bike, where everything is mounted.",
          },
          {
            image:
              "https://i.ibb.co.com/9mcGxrPc/front-tire-orange-motorbike.jpg",
            title: "Wheels",
            description:
              "A good pair of wheels can make all the difference in performance and comfort.",
          },
          {
            image:
              "https://i.ibb.co.com/Fbv1DqCk/man-choosed-motorcycles-moto-shop-guy-black-jacket.jpg",
            title: "Brakes",
            description: "Keep yourself safe with quality brake systems.",
          },
          {
            image:
              "https://i.ibb.co.com/jP4Krn8K/WMF36-OICPZEJDPKABMHQVHXBZ4.jpg",
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
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          {blogData.blog.title}
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          {blogData.blog.description}
        </p>
      </header>

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
                    <figure className="w-full">
                      {" "}
                      <img
                        src={card.image}
                        alt={card.title}
                        className="rounded-lg mb-4 w-full h-28 object-cover"
                      />
                    </figure>
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
