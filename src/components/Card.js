import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (!props.card.isAvailable) {
    badgeText = "SOLD OUT";
  } else if (props.card.price < 100) {
    badgeText = "DISCOUNT SALE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-image" src={props.card.img} alt="home" />
      <div className="card-description">
        <div className="card-rating">
          <img className="star" src={star} alt="star" />
          <small>
            {props.card.numStars} ({props.card.numReviews})
          </small>
          <small>{props.card.location}</small>
        </div>
        <h2>{props.card.title}</h2>
        <h4>${props.card.price}/person</h4>
      </div>
    </div>
  );
}
