import Container from "../container";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <Container>
      <ul className="sticky top-0 flex justify-end items-center gap-6 py-4">
        <li className="cursor-pointer">
          <p>Home</p>
        </li>
        <li className="cursor-pointer">
          <p>About</p>
        </li>
        <li className="cursor-pointer">
          <p>Services</p>
        </li>
        <li>
          <Button variant="outline" className="cursor-pointer">
            Book Now
          </Button>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
