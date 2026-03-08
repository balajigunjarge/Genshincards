import styles from "./Cards.module.css";
const Cards = (props) => {
  return (
    <div className='w-80 h-85 bg-[#ffffff44] rounded-4xl p-4 border shadow- shadow-xl/50 border-[#ffffff83]
     shadow-[#0000005b] backdrop-blur-sm'>
     <div className="relative">
      <img className="w-80 rounded-2xl" src={props.backgroundImage}/>

       <div className=" flex absolute top-1/4 left-6">
         <div >  <img className="w-18 object-cover object-center rounded-2xl " src={props.image}/>
     </div>
   <div className="p-3"> <h1 className={`${styles.title} text-[#ffffff]`}>{props.name}</h1>
   <section className="flex gap-3"><p className={` bg-[#0000002f] rounded-lg backdrop-blur-2xl px-3 py-0.5 ${styles[props.element]}`}  >{props.element} </p>  <p>{props.region}</p ></section>
        </div>

       </div>
       </div>
       <div className="p-3"> <p>{props.about}</p></div>






    </div>
  )
}

export default Cards
