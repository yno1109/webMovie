import { Link } from "react-router-dom";

const Menu = ({ path, menu }) => {
  return (
    <div className="text-2xl text-slate-900 font-bold">
      <Link to={path}>{menu}</Link>
    </div>
  );
};

export default Menu;
