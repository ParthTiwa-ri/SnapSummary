import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#150002] text-white py-4 border-t-[1px] border-slate-500 opacity-30 absolute bottom-0 left-0 w-full">
      <div className="flex justify-between items-center px-8">
        {/* Copyright */}
        <p className="sm:text-sm text-xs">
          &copy; 2025 <span className="font-semibold">Parth Tiwari</span>.
        </p>

        {/* Portfolio Link */}
        <p className="sm:text-sm text-xs">
          <Link href="https://parthtiwari.in" passHref>
            <button
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my personal portfolio
            </button>
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
