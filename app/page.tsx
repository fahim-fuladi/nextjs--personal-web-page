import Link from "next/link";
import TypingComponent from "./components/typingComponent"
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex flex-col items-center content-center py-30">
      <img src="/logo.png" alt="logo" width={100} />
      <h1 className="text-4xl pt-4 pb-2 font-[jet-bold]">
        Fahim Fuladi
      </h1>
      <div>
        <TypingComponent />
      </div>
      <div className="flex gap-4 p-10">
        <Link href={"https://t.me/fahimfooladi"}>
          <FaTelegramPlane className="m-2.5" />
        </Link>
        <Link href={"https://github.com/fahim-fuladi"}>
          <TbBrandGithubFilled className="m-2.5" />
        </Link>
        <Link href={"https://www.linkedin.com/in/fahimfuladi/"}>
          <FaLinkedinIn className="m-2.5" />
        </Link>
      </div>

      <span className="font-[jet-light] mt-22">
        Coming-Soon...🔥
      </span>

    </div>
  );
}
