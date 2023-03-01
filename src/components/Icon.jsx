import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Icon = ({ brand, path }) => {
  return (
    <Link to={path}>
      <div className="flex justify-center items-center bg-white rounded-full p-2 w-10 m-2 hover:bg-slate-400 transition-colors duration-300 ease-linear">
        <FontAwesomeIcon icon={brand} size="xl" />
      </div>
    </Link>
  );
};

export default Icon;
