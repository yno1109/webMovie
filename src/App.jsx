import { Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Login from "./routes/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
