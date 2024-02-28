import { useSelector } from "react-redux";
import CreateUser from "../features/users/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="text-semi-bold mb-8 text-xl md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username !== "" ? (
        <Button type="primary">Go to menu</Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
