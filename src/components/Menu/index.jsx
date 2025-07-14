import './index.css';
import { Drink } from '../Drink';

const drinks = [
  {
    id: 0,
    name: 'Espresso',
    imageSrc: '/cups/espresso.png',
    layers: [{ color: '#613916', label: 'espresso' }],
  },
  {
    id: 1,
    name: 'Doppio',
    imageSrc: '/cups/doppio.png',
    layers: [{ color: '#613916', label: 'espresso' }],
  },
  {
    id: 2,
    name: 'Lungo',
    imageSrc: '/cups/lungo.png',
    layers: [
      { color: '#b0dee1', label: 'voda' },
      { color: '#613916', label: 'espresso' },
    ],
  },
];

export const Menu = () => (
  <section id="menu" className="menu">
    <div className="container">
      <h2>Naše nabídka</h2>

      <p className="menu-intro">
        Vyberte si z našeho interaktivního menu a&nbsp;nemusíte čekat na obsluhu
      </p>

      <div className="drinks-list">
        {drinks.map((drink) => (
          <Drink key={drink.id} {...drink} />
        ))}
      </div>

      <div className="order-detail">
        <a href="/order.html">Detail objednávky</a>
      </div>
    </div>
  </section>
);