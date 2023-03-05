import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const Header = ({ isLoggined }) => {
  return (
    <header className="flex justify-around items-center p-12 bg-slate-300 select-none border-b-8 border-slate-600 fixed top-0 left-0 right-0">
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={faClapperboard} size="2x" className="mr-10" />
        <h1 className="text-4xl font-serif font-bold">Young Movie</h1>
      </div>
      <Menu path={"/"} menu={"홈"} />
      <Menu path={"/ranking"} menu={"랭킹"} />
      <Menu path={"/upcomingfilm"} menu={"상영/예정작"} />
      <Menu path={"/contents"} menu={"콘텐츠"} />
      <Menu
        path={"/signin"}
        menu={isLoggined ? "로그아웃" : "로그인"}
        isLoggined={isLoggined}
      />
    </header>
  );
};

export default Header;
