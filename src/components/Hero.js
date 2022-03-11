import hero from "../images/hero.gif";

export default function Hero() {
  return (
    <section className="section-hero">
      <img className="hero" src={hero} alt="hero" />
      <h1>Come stay at my unique homes.</h1>
    </section>
  );
}
