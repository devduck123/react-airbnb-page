import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  let cards = data.map((card) => <Card key={card.id} card={card} />);

  return (
    <div>
      <Header />
      <Hero />
      <section className="card-wrapper">{cards}</section>
    </div>
  );
}
