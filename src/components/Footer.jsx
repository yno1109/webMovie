import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";
import Span from "./Span";

const Footer = () => {
  return (
    <footer>
      <div className="h-60 bg-slate-900 p-10">
        <div className="flex justify-center">
          <Icon brand={faTwitter} path={"https://twitter.com/?lang=ko"} />
          <Icon brand={faFacebookF} path={"https://www.facebook.com/"} />
          <Icon brand={faInstagram} path={"https://www.instagram.com/"} />
        </div>
        <div className="flex justify-center">
          <Span option={"Info"} path={"/info"} />
          <Span option={"Support"} path={"/support"} />
          <Span option={"Marketing"} path={"/marketing"} />
        </div>
        <div className="flex justify-center">
          <Span option={"Terms of Use"} path={"/tersofuse"} />
          <Span option={"Privacy Policy"} path={"/privacypolicy"} />
        </div>
        <div className="flex justify-center">
          <span className="m-2 text-gray-600 text-sm">@ 2023 Young Movie</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
