import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export const menuLoader = async () => {
  const menu = await getMenu();
  return menu;
};

function Menu() {
  const menu = useLoaderData(); // we use this custom hook to get data into component (react-router-dom)

  return <ul>
    {menu.map((pizza) => {
      return <MenuItem pizza={pizza} key={pizza.id} />;
    })}
  </ul>;
}

export default Menu;
// we are fetching data on render at the same time.
