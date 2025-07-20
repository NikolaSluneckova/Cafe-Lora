import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Order } from '../components/Order';

async function main() {
  const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
  const data = await response.json();

  console.log(data);       // ← kontrola výstupu
  const orderedDrinks = data.data;  // ← očekáváme, že to je pole

  document.querySelector('#root').innerHTML = render(
    <div className="page">
      <Header showMenu={false} />
      <main className="order">
        <Order items={orderedDrinks} />
      </main>
      <Footer />
    </div>
  );
}

main();





