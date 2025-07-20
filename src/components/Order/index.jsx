import { OrderItem } from '../OrderItem';
import './index.css';

export const Order = ({ items }) => {
  if (items.length === 0) {
    return <p className="empty-order">Zatím nemáte nic objednáno</p>;
  }

  return (
    <div className="container order__content">
      <h1>Vaše objednávka</h1>
      <div className="order__items">
        {items.map(({ id, name, image }) => (
          <OrderItem key={id} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

