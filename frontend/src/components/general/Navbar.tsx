import { Link } from "react-router";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <ul className={`${className}`}>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/add-product`}>Add Product</Link>
      </li>
    </ul>
  );
};
export default Navbar;
