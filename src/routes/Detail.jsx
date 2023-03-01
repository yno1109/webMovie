import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const callAPI = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setIsLoading(false);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <section className="flex flex-1 justify-center items-center p-36 mt-36 bg-slate-500">
        {isLoading ? <Loading /> : <Info item={movie} />}
      </section>
      <Footer />
    </div>
  );
};

export default Detail;
