import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SignInInput from "../components/SignInInput";

// TODO: 이메일 찾기, 비밀번호 찾기 만들기
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggined, setIsLoggined] = useState(false);
  const navigate = useNavigate();

  const checkInput = () => {
    if (email.trim() === "") {
      throw new Error("이메일을 입력해주세요.");
    } else if (password.trim() === "") {
      throw new Error("비밀번호를 입력해주세요.");
    }
  };

  const clickSignIn = async () => {
    try {
      checkInput();
      const response = await axios.get(
        `http://localhost:3001/profile?email=${email}`
      );
      if (
        !response?.data[0]?.email ||
        password !== response?.data[0]?.password
      ) {
        setPassword("");
        throw new Error("아이디나 비밀번호가 잘못되었습니다.");
      }
      setIsLoggined(true);
      navigate("/", { state: { isLoggined: isLoggined } });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <section className="flex flex-1 justify-center items-center p-36 mt-36 bg-slate-500">
        <SignInInput
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          clickSignIn={clickSignIn}
        />
      </section>
      <Footer />
    </div>
  );
};

export default SignIn;
