const Info = ({ item }) => {
  return (
    <div className="flex justify-evenly items-center p-16 rounded-lg bg-gray-300 shadow-lg shadow-gray-900">
      <img
        className="h-[555px] rounded-sm mr-16 shadow-lg shadow-gray-600"
        src={item.large_cover_image}
        alt={item.title}
      />
      <div className="h-[555px] flex flex-col justify-start p-16 rounded-lg bg-gray-400 shadow-lg shadow-gray-700">
        <h1 className="text-6xl mb-16">{item.title_long}</h1>
        <div>
          <div className="my-2">
            <span className="text-3xl">Genres : </span>
            {item.genres.map((genre, index) => (
              <span key={index} className="text-3xl">
                {`${genre} `}
              </span>
            ))}
          </div>
          <div className="text-3xl my-2">Rating : ⭐{item.rating}</div>
          <p className="text-3xl my-2">Summary : {item.description_full}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
