import './HeroesSection.css';

function HeroesSection({changeCat}){
  return(
    <section className="heroes-section__section">
      <div className="heroe-section-row__div">
        <div className="heroe-section-50__div--first" onClick={() => changeCat('Boards')}>
          <h2>
            Boards
          </h2>
        </div>
        <div className="heroe-section-50__div--second" onClick={() => changeCat('Sails')}>
          <h2>
            Sails
          </h2>
        </div>
      </div>
      <div className="heroe-section-row__div">
        <div className="heroe-section-100__div--third" onClick={() => changeCat('Booms')}>
          <h2>
            Booms
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroesSection;