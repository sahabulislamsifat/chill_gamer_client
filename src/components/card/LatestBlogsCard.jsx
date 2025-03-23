import { Link } from "react-router-dom";

const LatestBlogsCard = () => {
  const latestBlogs = [
    {
      id: 1,
      title: "Mystic Adventure",
      image: "https://i.ibb.co.com/f2KVPg5/adventure-game.jpg",
      rating: 4.7,
      releasedYear: 2022,
      genres: ["Adventure", "Fantasy", "Open World"],
    },
    {
      id: 2,
      title: "Cyber Strike",
      image: "https://i.ibb.co.com/4FQ3x1L/cyber-Strike.webp",
      rating: 4.5,
      releasedYear: 2021,
      genres: ["Action", "Shooter", "Sci-Fi"],
    },
    {
      id: 3,
      title: "Zombie Survival",
      image: "https://i.ibb.co.com/pQ7SpQZ/zoombie.webp",
      rating: 4.3,
      releasedYear: 2020,
      genres: ["Horror", "Survival", "Action"],
    },
    {
      id: 4,
      title: "Stellar Explorers",
      image: "https://i.ibb.co.com/qJbFPrd/steeler.jpg",
      rating: 4.8,
      releasedYear: 2023,
      genres: ["Sci-Fi", "Exploration", "Simulation"],
    },
  ];

  return (
    <section>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5">
        {latestBlogs.map((latest) => (
          <div
            key={latest.id}
            data-aos="flip-right"
            className="dark:bg-gray-800 dark:border-slate-700 border max-w-xs mx-auto bg-white rounded-md shadow-md overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={latest.image}
              alt="Card"
            />
            <div className="p-4">
              <h2 className="dark:text-slate-300 text-xl font-bold mb-2">
                {latest.title}
              </h2>
              <div className="dark:text-slate-300 text-sm text-gray-500 flex justify-between items-center mb-2">
                <span>Rating: ⭐ {latest.rating}</span>
                <span>📅 {latest.releasedYear}</span>
              </div>
              <div className="dark:text-slate-300 text-gray-700 text-sm mb-4">
                Genres: 🎮 {latest.genres}
              </div>
              <Link
                to={`/readMore/${latest.id}`}
                href="#"
                className="text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogsCard;
