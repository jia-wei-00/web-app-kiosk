import { Button } from "../ui/button";
import useScroll from "../../hooks/use-scroll";

const Header = () => {
  const { show } = useScroll();

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ul
      className={`sticky top-0 flex justify-end items-center gap-6 py-4 container mx-auto transition-transform duration-300 z-50 bg-background ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <li className="cursor-pointer">
        <a onClick={() => handleScroll("home")}>Home</a>
      </li>
      <li className="cursor-pointer">
        <a onClick={() => handleScroll("packages")}>Packages</a>
      </li>
      <li className="cursor-pointer">
        <a onClick={() => handleScroll("trending")}>Trending</a>
      </li>
      <li>
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => handleScroll("booking")}
        >
          Book Now
        </Button>
      </li>
    </ul>
  );
};

export default Header;
