import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

// TODO: 회원가입 중복 방지, 이메일 & 비밀번호 형식 검사, 빈 문자열 검사, 잘못 입력했을 시 입력 칸 비우기
const SignUp = () => {
  const inputName = useRef("");
  const inputEmail = useRef("");
  const inputPassword = useRef("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickSignUp = async () => {
    try {
      await axios.post("http://localhost:3001/profile", {
        name: name,
        email: email,
        password: password,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <section className="flex flex-1 justify-center items-center p-36 mt-36 bg-slate-500">
        <div className="flex flex-col items-center px-40 py-20 bg-white rounded-md shadow-lg shadow-gray-900">
          <h2 className="m-1.5 text-3xl text-slate-900 font-bold mb-10 select-none">
            회원가입
          </h2>
          <input
            id="nameInput"
            value={name}
            onChange={(event) => setName(event.target.value)}
            ref={inputName}
            type="text"
            placeholder="이름"
            className="outline-0 border-b-2 border-slate-900 bg-inherit m-4 pl-1 pb-2 w-full"
          />
          <input
            id="emailInput"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            ref={inputEmail}
            type="email"
            placeholder="이메일"
            className="outline-0 border-b-2 border-slate-900 bg-inherit m-4 pl-1 pb-2 w-full"
          />
          <input
            id="pwInput"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            ref={inputPassword}
            type="password"
            placeholder="비밀번호"
            className="outline-0 border-b-2 border-slate-900 bg-inherit m-4 pl-1 pb-2 w-full"
          />
          <button
            className="bg-slate-400 text-slate-900 font-bold rounded-md w-full py-2 m-4 shadow-sm shadow-gray-700"
            onClick={clickSignUp}
          >
            회원가입
          </button>
          <hr className="bg-slate-900 w-full h-0.5 border-0 m-10" />
          <div className="flex justify-center">
            <div className="mx-6">
              <Link to="/findemail">이메일 찾기</Link>
            </div>
            <div className="mx-6">
              <Link to="/findpassword">비밀번호 찾기</Link>
            </div>
            <div className="mx-6">
              <Link to="/signin">로그인</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;
