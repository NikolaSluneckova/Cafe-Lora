import './index.css';
import { Layer } from '../Layer';

export const Drink = ({ id, name, image, layers, ordered }) => {
  const imageUrl = `http://localhost:4000${image}`;

  return (
    <div className="drink">
      <div className="drink__cup">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="drink__info">
        <h3>{name}</h3>

        <div className="layers">
          {layers.map((layer, index) => (
            <Layer key={index} color={layer.color} label={layer.label} />
          ))}
        </div>

        <form data-id={id}>
          <button className={`order-btn ${ordered ? 'order-btn--ordered' : ''}`}>
            {ordered ? 'Zrušit' : 'Objednat'}
          </button>
        </form>
      </div>
    </div>
  );
};
