import Card from "./components/card";
import Header from "./components/header";

const genshinCharacters = [
  {
    id: 1,
    name: "Venti",
    about:
      "A bard that seems to have arrived on some unknown wind, sometimes sings songs as old as the hills, and other times sings poems fresh and new.",
    element: "Anemo",
    region: "Mondstadt",
    image: "/genshin/avatarPng/Venti.PNG",
    backgroundImage: "/genshin/characterBanner/UI_NameCardPic_Venti_P.png",
    link: "https://genshin.hoyoverse.com/en/character/mondstadt?char=7",
  },
  {
    id: 2,
    name: "Zhongli",
    about:
      "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
    element: "Geo",
    region: "Liyue",
    image: "/genshin/avatarPng/Zhongli.PNG",
    backgroundImage: "/genshin/characterBanner/UI_NameCardPic_Zhongli_P.png",
    link: "https://genshin.hoyoverse.com/en/character/liyue?char=9",
  },
  {
    id: 3,
    name: "Raiden Shogun",
    about:
      "Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.",
    element: "Electro",
    region: "Inazuma",
    image: "/genshin/avatarPng/Raiden Shogun.PNG",
    backgroundImage:
      "/genshin/characterBanner/UI_NameCardPic_Raiden Shogun_P.png",
    link: "https://genshin.hoyoverse.com/en/character/inazuma?char=4",
  },
  {
    id: 4,
    name: "Nahida",
    about:
      "A caged bird secluded within the Sanctuary of Surasthana who can only see the world in her dreams.",
    element: "Dendro",
    region: "Sumeru",
    image: "/genshin/avatarPng/Nahida.PNG",
    backgroundImage: "/genshin/characterBanner/UI_NameCardPic_Nahida_P.png",
    link: "https://genshin.hoyoverse.com/en/character/sumeru?char=6",
  },
  {
    id: 5,
    name: "Furina",
    about:
      "The absolute focus of the stage of judgment, until the final applause sounds.",
    element: "Hydro",
    region: "Fontaine",
    image: "/genshin/avatarPng/Furina.PNG",
    backgroundImage: "/genshin/characterBanner/UI_NameCardPic_Furina_P.png",
    link: "https://genshin.hoyoverse.com/en/character/Fontaine?char=7",
  },
  {
    id: 6,
    name: "Mavuika",
    about:
      "The leader of Natlan who inherited the Ancient Name of 'Kiongozi.' She made a vow to illuminate the future of the nation of war with the Sacred Flame.",
    element: "Pyro",
    region: "Natlan",
    image: "/genshin/avatarPng/Mavuika.PNG",
    backgroundImage: "/genshin/characterBanner/UI_NameCardPic_Mavuika_P.png",
    link: "https://genshin.hoyoverse.com/en/character/natlan?char=6",
  },
  {
    id: 7,
    name: "Columbina",
    about:
      "No. 3 of the Fatui Harbingers, known as 'Damselette.' A mysterious, seemingly gentle girl whose power is highly feared by her peers.",
    element: "Hydro",
    region: "Snezhnaya",
    image: "/genshin/avatarPng/IMG_8668.WEBP",
    backgroundImage: "/genshin/characterBanner/UI_NameCardPic_Columbina_P.png",
    link: "https://genshin.hoyoverse.com/en/character/snezhnaya?char=10",
  },
  {
    id: 8,
    name: "Wanderer",
    about:
      "A wayfaring figure whose identity is a mystery. Formerly known as Scaramouche, the 6th Fatui Harbinger 'The Balladeer.'",
    element: "Anemo",
    region: "Sumeru",
    image: "/genshin/avatarPng/Wanderer.PNG",
    backgroundImage: "/genshin/characterBanner/UI_NameCardPic_Wanderer_P.png",
    link: "https://genshin.hoyoverse.com/en/character/snezhnaya?char=13",
  },
];

const App = () => {
  return (
    <>
     <Header />
    <div className="container">
    
      
      {genshinCharacters.map(function (elem,idx) {
        return (
          <div key={idx}>
          <Card
            id={elem.id}
            name={elem.name}
            region={elem.region}
            element={elem.element}
            about={elem.about}
            image={elem.image}
            backgroundImage={elem.backgroundImage}
            link={elem.link}
          />
          </div>         
        );
      })}
      </div>
    </>
  );
};

export default App;
