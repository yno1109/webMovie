import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Movie from "../components/Movie";

const Home = () => {
  const location = useLocation();
  const [isLoggined, setIsLoggined] = useState(location?.state);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const callAPI = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
      )
    ).json();
    setIsLoading(false);
    setMovies(json.data.movies);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    // TODO: 우측 상단에 설정 옵션 만들고 마이페이지 만들기
    // TODO: 원하는 영화 검색과 장르나 최신영화 검색할 수 있게 input 만들기
    <div className="h-screen flex flex-col relative">
      <Header isLoggined={isLoggined} />
      <section className="flex flex-1 justify-center items-center p-36 mt-24 bg-slate-500">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="flex justify-around items-center mb-24 bg-slate-300 px-8 py-10 rounded-2xl shadow-md shadow-gray-900">
              <form>
                <div className="flex items-center w-96 rounded-full px-4 py-2 bg-white">
                  <input
                    type="text"
                    placeholder="Write a Title!"
                    className="outline-none w-full text-slate-300"
                  />
                  <button>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      size="xl"
                      className="outline-none"
                    />
                  </button>
                </div>
              </form>
              <select className="h-full rounded-full px-2 py-1 text-slate-500 outline-none">
                <option>최신순</option>
                <option>오래된순</option>
                <option>가나다순</option>
                <option>평점높은순</option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-x-56 gap-y-28">
              {movies.map((movie) => (
                <Movie key={movie.id} item={movie} />
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
