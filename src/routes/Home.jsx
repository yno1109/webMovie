import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Movie from "../components/Movie";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const callAPI = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
      )
    ).json();
    // console.log(json.data.movies);
    setIsLoading(false);
    setMovies(json.data.movies);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    // TODO: 로그인 폼 기능 구현
    // TODO: 원하는 영화 검색과 장르나 최신영화 검색할 수 있게 input 만들기
    <div className="h-screen flex flex-col relative">
      <Header />
      <section className="flex flex-1 justify-center items-center p-36 mt-36 bg-slate-500">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <form>
              <div className="flex items-center mb-36 w-96 rounded-full px-4 py-2 bg-white">
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
