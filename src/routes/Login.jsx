import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Login = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <section className="flex flex-1 justify-center items-center p-36 mt-36 bg-slate-500">
        <div className="flex flex-col items-center px-40 py-20 bg-white rounded-md shadow-lg shadow-gray-900">
          <h2 className="m-1.5 text-3xl text-slate-900 font-bold mb-10 select-none">
            로그인
          </h2>
          <input
            id="emailInput"
            type="email"
            placeholder="이메일"
            className="outline-0 border-b-2 border-slate-900 bg-inherit m-4 pl-1 pb-2 w-full"
          />
          <input
            id="pwInput"
            type="password"
            placeholder="비밀번호"
            className="outline-0 border-b-2 border-slate-900 bg-inherit m-4 pl-1 pb-2 w-full"
          />
          <button className="bg-slate-400 text-slate-900 font-bold rounded-md w-full py-2 m-4 shadow-sm shadow-gray-700">
            로그인
          </button>
          <hr className="bg-slate-900 w-full h-0.5 border-0 m-10" />
          <di className="flex justify-center">
            <div className="mx-6">
              <Link>아이디 찾기</Link>
            </div>
            <div className="mx-6">
              <Link>비밀번호 찾기</Link>
            </div>
            <div className="mx-6">
              <Link>회원가입</Link>
            </div>
          </di>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
