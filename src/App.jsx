import { Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
