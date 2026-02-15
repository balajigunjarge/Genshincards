const Card = (props) => {
  return (
    <div className="card">
      <div className="avatar-container">
        <img src={props.backgroundImage} alt="" className="background-image" />

        <section className="avatar-info">
          <div>
            <img src={props.image} alt="" className="avatar" />
          </div>
          <div>
          <h1 className="name">{props.name}</h1>
          <section className="region" id={props.element}>
            <p className="region-p">{props.region}</p>
            {props.element}
          </section>
          </div>
        </section>
        <section className="bottom-info">
          <p className="about">{props.about}</p>
          
        </section>
        
      </div>
      <a className={props.element + " learn-more"} href={props.link} target="_blank">
            Learn More
          </a>
    </div>
  );
};

export default Card;
