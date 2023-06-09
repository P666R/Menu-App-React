import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import Title from "./components/Title";
import menu from "./data";

const allCategories = ["all", ...new Set(menu.map((el) => el.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  const [categories, setCatogories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((el) => {
      return category === el.category;
    });
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="menu app" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
