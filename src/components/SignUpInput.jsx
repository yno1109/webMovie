import { Link } from "react-router-dom";

const SignUpInput = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  clickSignUp,
}) => {
  return (
    <div className="flex flex-col items-center px-40 py-20 bg-white rounded-md shadow-lg shadow-gray-900">
      <h2 className="m-1.5 text-3xl text-slate-900 font-bold mb-10 select-none">
        회원가입
      </h2>
      <input
        id="nameInput"
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="이름"
        className="outline-0 border-b-2 border-slate-900 bg-inherit m-4 pl-1 pb-2 w-full"
      />
      <input
        id="emailInput"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="이메일"
        className="outline-0 border-b-2 border-slate-900 bg-inherit m-4 pl-1 pb-2 w-full"
      />
      <input
        id="pwInput"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
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
  );
};

export default SignUpInput;
