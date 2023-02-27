import { useEffect, useState } from "react";
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
    // TODO: h1 메뉴 꾸미고 상단에 메뉴 만들고 하단에 footer 만들어서 그 안에는 트위터, 인스타그램 넣어두기
    // TODO: 로그인 폼 만들기
    // TODO: 원하는 영화 검색과 장르나 최신영화 검색할 수 있게 input 만들기
    <div className="h-screen flex flex-col">
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-y-28">
          {movies.map((movie) => (
            <Movie key={movie.id} item={movie} />
          ))}
        </div>
      )}
      <footer>footer</footer>
    </div>
  );
};

export default Home;
