import cardImage1 from "./images/cardImage1.jpg";
import cardImage2 from "./images/cardImage2.jpg";
import cardImage3 from "./images/cardImage3.jpg";
import cardImage4 from "./images/cardImage4.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 1,
    img: cardImage1,
    numStars: 5.0,
    numReviews: 6,
    location: "USA",
    title: "Title",
    price: 69,
    isAffordable: false,
    isAvailable: false,
  },
  {
    id: 2,
    img: cardImage2,
    numStars: 3.8,
    numReviews: 4,
    location: "UK",
    title: "Title",
    price: 69,
    isAffordable: false,
    isAvailable: true,
  },
  {
    id: 3,
    img: cardImage3,
    numStars: 4.6,
    numReviews: 12,
    location: "Canada",
    title: "Title",
    price: 69,
    isAffordable: false,
    isAvailable: false,
  },
  {
    id: 4,
    img: cardImage4,
    numStars: 5.0,
    numReviews: 18,
    location: "New York",
    title: "Title",
    price: 420,
    isAffordable: false,
    isAvailable: true,
  },
];
