import Logo from "@/components/Logo";

function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-4 md:px-8 md:py-4 border-b-2 border-[#E91515]">
      <Logo />
    </div>
  );
}

export default Header;
