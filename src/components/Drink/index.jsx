import './index.css';
import { Layer } from '../Layer';

export const Drink = ({ name, image, layers }) => {
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
      </div>
    </div>
  );
};