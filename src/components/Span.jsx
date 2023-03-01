import { Link } from "react-router-dom";

const Span = ({ option, path }) => {
  return (
    <span className="m-2 text-white text-sm hover:text-slate-400 transition-colors duration-300 ease-linear">
      <Link to={path}>{option}</Link>
    </span>
  );
};

export default Span;
