import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const response = await fetch('http://localhost:4000/api/drinks');
const data = await response.json();
const allDrinks = data.data;
const orderedDrinks = allDrinks.filter((drink) => drink.ordered);

const orderedItemsHTML = orderedDrinks.map((drink) => `
  <div class="order-item">
    <img
      src="http://localhost:4000${drink.image}"
      class="order-item__image"
    />
    <div class="order-item__name">
      ${drink.name}
    </div>
  </div>
`).join('');

const emptyOrderText = orderedDrinks.length === 0
  ? '<p class="empty-order">Zatím nemáte nic objednáno</p>'
  : '';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={false} />

    <main className="order">
      <div className="container order__content">
        <h1>Vaše objedávka</h1>
        <div dangerouslySetInnerHTML={{ __html: emptyOrderText }} />
        <div className="order__items" dangerouslySetInnerHTML={{ __html: orderedItemsHTML }} />
      </div>
    </main>

    <Footer />
  </div>
);

