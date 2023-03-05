import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SignUpInput from "../components/SignUpInput";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggined, setIsLoggined] = useState(false);
  const navigate = useNavigate();

  const checkEmail = (email) => {
    let reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
  };

  const checkPassword = (password) => {
    let reg = /^[A-Za-z0-9]{6,12}$/;
    return reg.test(password);
  };

  const checkInput = () => {
    if (name.trim() === "") {
      throw new Error("이름을 입력해주세요.");
    } else if (email.trim() === "") {
      throw new Error("이메일을 입력해주세요.");
    } else if (password.trim() === "") {
      throw new Error("비밀번호를 입력해주세요.");
    } else if (!checkEmail(email)) {
      throw new Error("이메일 형식에 맞게 입력해주세요.");
    } else if (!checkPassword(password)) {
      throw new Error(
        "최소 6자리, 하나 이상의 문자와 숫자를 포함하여 비밀번호를 입력해주세요."
      );
    }
  };

  const clickSignUp = async () => {
    try {
      checkInput();
      const response = await axios.get(
        `http://localhost:3001/profile?email=${email}`
      );
      if (response?.data[0]?.email === email) {
        throw new Error("이미 존재하는 회원 정보입니다.");
      }

      await axios.post("http://localhost:3001/profile", {
        name: name,
        email: email,
        password: password,
      });

      setIsLoggined(true);
      navigate("/", { state: { isLoggined: isLoggined } });
    } catch (error) {
      setName("");
      setEmail("");
      setPassword("");
      alert(error);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <section className="flex flex-1 justify-center items-center p-36 mt-36 bg-slate-500">
        <SignUpInput
          name={name}
          email={email}
          password={password}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          clickSignUp={clickSignUp}
        />
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;
