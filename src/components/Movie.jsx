import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-96 px-16 pt-16 rounded-lg bg-gray-300 shadow-lg shadow-gray-900">
        <Link to={`/detail/${item.id}`}>
          <img
            className="w-full rounded-sm shadow-lg shadow-gray-600"
            src={item.medium_cover_image}
            alt={item.title}
          />
        </Link>
        <div className="flex justify-center items-center h-40">
          <h3 className="text-center text-3xl font-bold h-fit">
            <Link to={`/detail/${item.id}`}>{item.title}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Movie;
