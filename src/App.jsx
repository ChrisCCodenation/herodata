import { useState } from 'react';
import './App.css';
import {allHeroes} from "./HeroData";
 
const App = () => {
  const [favourites, setFavourites] = useState([]);

  const handleAddToFav = (hero) => {
    let newFavArr = []
  }
 
  return (
    <>
      <h1>Superhero Wiki</h1>
 
      <div>
        <h3>Favourite Heroes</h3>
        {favourites.map((favHero, index) => {
          return <Favourites key={index} favHeroData={favHero}/>
        })}
      </div>
 
      {allHeroes.map((heroInfo, index) => {
        return <HeroCard key={index} heroObj={heroInfo}/>
      })}
    </>
  );
};
 
const Favourites = (props) => {
  return(
    <div>
      <p>Fav Hero</p>
    </div>
  )
}
 
const HeroCard = (props) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <p>HERO: {props.heroObj.hero}</p>
 
      {show && (
        <div>
          <p>INFO: {props.heroObj.info}</p>
          <p>VILLAIN: {props.heroObj.villain}</p>
        </div>
      )}
 
      <button onClick={() => setShow(!show)}>{show ? "Hide Info" : "Show Info"}</button>
      <button>Add to favourites</button>
    </>
  );
};
 
export default App;