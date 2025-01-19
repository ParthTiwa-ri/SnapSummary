import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <h1 className="text-xl md:text-2xl text-[#E91515]">
        snap<span className="text-white">Summary</span>{" "}
        <span className="text-xs md:text-sm">BETA</span>
      </h1>
    </Link>
  );
}

export default Logo;
