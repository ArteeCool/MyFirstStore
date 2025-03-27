import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full border-b-2 h-16">
      <div className="mx-auto max-w-5xl flex justify-between h-full w-full items-center p-4">
        <h1 className="font-semibold text-2xl">ArteeCool's store</h1>
        <Navbar className="flex gap-10 font-semibold" />
      </div>
    </div>
  );
};
export default Header;
