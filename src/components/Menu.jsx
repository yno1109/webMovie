import { Link } from "react-router-dom";

const Menu = ({ path, menu, isLoggined }) => {
  const clickSignOut = () => {
    if (isLoggined) {
      alert("로그아웃되었습니다.");
    }
  };
  return (
    <div className="text-2xl text-slate-900 font-bold">
      <Link to={path} onClick={clickSignOut}>
        {menu}
      </Link>
    </div>
  );
};

export default Menu;
