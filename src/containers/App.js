import "../App.scss";
import Card from "../components/Card";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";
import Scroll from "../components/Scroll";

function App() {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const handleApiRequest = async () => {
      const data = await getApi();
      setRobots(data);
    };

    handleApiRequest();
  }, [setRobots]);

  async function getApi() {
    const results = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await results.json();
    return data;
  }

  const updateCardsHandler = (e) => {
    const value = e.target.value;
    setSearchField(value);
  };

  const robotsShow = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-900 pb-52 h-screen min-h-screen">
      <h1 className="text-white text-center font-press text-6xl mb-14 pt-10 sm:text-7xl md:text-8xl lg:text-9xl">
        RoboFriends
      </h1>
      <SearchBox value={searchField} onChange={updateCardsHandler} />
      {!robots.length ? (
        <h1 className="text-center text-4xl mt-44 text-white">Loading....</h1>
      ) : (
        <Scroll>
          <CardList cards={robotsShow} />
        </Scroll>
      )}
    </div>
  );
}

export default App;
