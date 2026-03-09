
import styles from "./styles/App.module.css";

import Cards from "./components/Cards/Cards";

import  Characters  from "./components/Characterinfo";

const App = () => {
  return (



  <div className={` ${styles.container} flex flex-wrap justify-center items-center gap-8 py-12`}>


      {Characters.map(function (elem,idx) {
        return (
          <div key={idx}>
          <Cards

            name={elem.character}
            region={elem.region}
            element={elem.element}
            about={elem.about}
            image={elem.pfp}
            backgroundImage={elem.background}
            link={elem.link}
          />
          </div>
        );
      })}


    </div>)




};

export default App;
