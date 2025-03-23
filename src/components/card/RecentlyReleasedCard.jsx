import { Link } from "react-router-dom";

const LatestBlogsCard = () => {
  const latestBlogs = [
    {
      id: 1,
      title: "Knight's Legacy",
      image: "https://via.placeholder.com/150?text=Knight's+Legacy",
      rating: 4.6,
      releasedYear: 2021,
      genres: ["RPG", "Fantasy", "Adventure"],
    },
    {
      id: 2,
      title: "Racing Mania",
      image: "https://via.placeholder.com/150?text=Racing+Mania",
      rating: 4.4,
      releasedYear: 2020,
      genres: ["Racing", "Arcade", "Simulation"],
    },
    {
      id: 3,
      title: "Puzzle Galaxy",
      image: "https://via.placeholder.com/150?text=Puzzle+Galaxy",
      rating: 4.0,
      releasedYear: 2018,
      genres: ["Puzzle", "Casual", "Strategy"],
    },
    {
      id: 4,
      title: "Dark Manor",
      image: "https://via.placeholder.com/150?text=Dark+Manor",
      rating: 4.2,
      releasedYear: 2022,
      genres: ["Mystery", "Horror", "Thriller"],
    },
  ];

  return (
    <section>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5">
        {latestBlogs.map((latest) => (
          <div
            key={latest.id}
            className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={latest.image}
              alt="Card"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{latest.title}</h2>
              <div className="text-sm text-gray-500 flex justify-between items-center mb-2">
                <span>Rating: ⭐ {latest.rating}</span>
                <span>📅 {latest.releasedYear}</span>
              </div>
              <div className="text-gray-700 text-sm mb-4">
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

