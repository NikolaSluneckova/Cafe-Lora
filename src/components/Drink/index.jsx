import './index.css';
import { Layer } from '../Layer';

export const Drink = ({ id, name, imageSrc, layers = [], onOrder }) => {
  const handleOrder = (e) => {
    e.preventDefault();
    onOrder?.(id);
  };

  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map(({ color, label }, index) => (
            <Layer key={index} color={color} label={label} />
          ))}
        </div>
      </div>

      <form className="drink__controls" onSubmit={handleOrder}>
        <input type="hidden" className="order-id" value={id} />
        <button className="order-btn">Objednat</button>
      </form>
    </div>
  );
};