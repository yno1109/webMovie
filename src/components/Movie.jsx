import { Link } from "react-router-dom";

// FIXME: 깨진 디자인 다시 손보기
const Movie = ({ item }) => {
  const MAX_LENGTH = 20;
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-72 px-16 pt-16 rounded-lg bg-gray-300 shadow-lg shadow-gray-900">
        <Link to={`/detail/${item.id}`}>
          <img
            className="w-60 rounded-sm shadow-lg shadow-gray-600"
            src={item.medium_cover_image}
            alt={item.title}
          />
        </Link>
        <div className="flex justify-center items-center h-40">
          <h3 className="text-center text-3xl font-bold h-fit text-slate-900">
            <Link to={`/detail/${item.id}`}>
              {item.title.length > MAX_LENGTH
                ? `${item.title.slice(0, MAX_LENGTH)}...`
                : item.title}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Movie;
