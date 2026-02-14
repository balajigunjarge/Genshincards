import Card from "./components/card";



const genshinCharacters = [
  {
    id:1,
    name: "Venti",
    about: "A free-spirited, wine-loving bard in Mondstadt who is actually the mortal vessel of Barbatos, the Anemo Archon.",
    element: "Anemo",
    region: "Mondstadt",
    image: "/src/assets/genshin/Venti.png",
    backgroundImage: "/src/assets/genshin/UI_NameCardPic_Venti_P.png",
    link:"https://genshin.hoyoverse.com/en/character/mondstadt?char=7"
  },
  {
    id:2,
    name: "Zhongli",
    about: "A calm and knowledgeable consultant for the Wangsheng Funeral Parlor, secretly the Geo Archon Morax.",
    element: "Geo",
    region: "Liyue",
    image: "/src/assets/genshin/Zhongli.PNG",
    backgroundImage: "/src/assets/genshin/UI_NameCardPic_Zhongli_P.png",
    link:"https://genshin.hoyoverse.com/en/character/liyue?char=9"
  },
  {
    id:3,
    name: "Raiden Shogun",
    about: "The undisputed supreme ruler of Inazuma and vessel of Beelzebul, the Electro Archon who pursues unchanging eternity.",
    element: "Electro",
    region: "Inazuma",
    image: "/src/assets/genshin/Raiden Shogun.PNG",
    backgroundImage: "/src/assets/genshin/UI_NameCardPic_Raiden Shogun_P.png",
    link:"https://genshin.hoyoverse.com/en/character/inazuma?char=4"
  },
  {
    id:4,
    name: "Nahida",
    about: "The current Dendro Archon, known as Lesser Lord Kusanali, who possesses a deep connection to the Irminsul tree.",
    element: "Dendro",
    region: "Sumeru",
    image: "/src/assets/genshin/Nahida.PNG",
    backgroundImage: "/src/assets/genshin/UI_NameCardPic_Nahida_P.png",
    link:"https://genshin.hoyoverse.com/en/character/sumeru?char=6"
  },
  {
    id:5,
    name: "Furina",
    about: "The flamboyant and theatrical former Hydro Archon of Fontaine who played a centuries-long role to save her people from prophecy.",
    element: "Hydro",
    region: "Fontaine",
    image: "/src/assets/genshin/Furina.PNG",
    backgroundImage: "/src/assets/genshin/UI_NameCardPic_Furina_P.png",
    link:"https://genshin.hoyoverse.com/en/character/Fontaine?char=6"
  },
  {
    id:6,
    name: "Kamisato Ayaka",
    about: "The elegant, noble, and highly capable daughter of the Yashiro Commission's Kamisato Clan.",
    element: "Cryo",
    region: "Inazuma",
    image: "/src/assets/genshin/Kamisato Ayaka.PNG",
    backgroundImage: "/src/assets/genshin/UI_NameCardPic_Kamisato Ayaka_P.png",
    link:"https://genshin.hoyoverse.com/en/character/inazuma?char=0"
  },
  {
    id:7,
    name: "Diluc",
    about: "The wealthy owner of the Dawn Winery who moonlights as Mondstadt's shadowy protector, the Darknight Hero.",
    element: "Pyro",
    region: "Mondstadt",
    image: "/src/assets/genshin/Diluc.PNG",
    backgroundImage: "/src/assets/genshin/UI_NameCardPic_Diluc_P.png",
    link:"https://genshin.hoyoverse.com/en/character/mondstadt?char=5"
  },
  {
    id:8,
    name: "Yelan",
    about: "A mysterious and elusive intelligence agent who claims to work for Liyue's Ministry of Civil Affairs.",
    element: "Hydro",
    region: "Liyue",
    image: "/src/assets/genshin/Yelan.PNG",
    backgroundImage: "/src/assets/genshin/UI_NameCardPic_Yelan_P.png",
    link:"https://genshin.hoyoverse.com/en/character/liyue?char=16"
  },
  {
    id:9, 
    name: "Alhaitham",
    about: "The highly rational and capable Scribe of the Sumeru Akademiya who prefers a quiet, comfortable life.",
    element: "Dendro",
    region: "Sumeru",
    image: "/src/assets/genshin/Alhaitham.PNG",
    backgroundImage: "/src/assets/genshin/UI_NameCardPic_Alhaitham_P.png",
    link:"https://genshin.hoyoverse.com/en/character/sumeru?char=10"
  },
  {
    id:10,
    name: "Navia",
    about: "The optimistic, determined, and stylish President of Fontaine's Spina di Rosula.",
    element: "Geo",
    region: "Fontaine",
    image: "/src/assets/genshin/Navia.PNG",
    backgroundImage:"/src/assets/genshin/UI_NameCardPic_Navia_P.png",
    link:"https://genshin.hoyoverse.com/en/character/Fontaine?char=7"
  }
];



const App = () => {
  return (
    <div className='home'>
      

      { genshinCharacters.map(function(elem){
        return (
         
            
      <Card key={elem.id}  name={elem.name} region={elem.region} about={elem.about} image={elem.image} backgroundImage={elem.backgroundImage} link={elem.link} />
        )
    })}
      
    </div>
  )
}

export default App