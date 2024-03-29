import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";
import Username from "../features/users/Username";

function Header() {
  return (
    <header className=" flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
