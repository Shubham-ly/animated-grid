const productDetails = [
  {
    img: "https://tympanus.net/Development/ExpandingGridItemAnimation/img/1.png",
    title: "Marble Dream",
    subtitle: "Contantin Frecker",
    description:
      "Hastag cred air plant drinking vinegar. Leggings yuccie chambray pop-ip tousled hell of. Portland wolf mumblecore, synth cold-pressed polaroid poke cardigan gochujang farm-to-table photo booth",
    price: "$129",
  },
  {
    img: "https://tympanus.net/Development/ExpandingGridItemAnimation/img/2.png",
    title: "Space Fantasy",
    subtitle: "Danica Green",
    description:
      "Man bun banjo pop-up meh hammock. Skateboard hammock tousled retro, etsy taiyaki narwhal gentrify fixie food truck microdosing sustainable dreamcatcher.",
    price: "$199",
  },
  {
    img: "https://tympanus.net/Development/ExpandingGridItemAnimation/img/3.png",
    title: "Mighty Eighties",
    subtitle: "Elizabeth Smith",
    description:
      "Air plant affogato microdosing banjo, palo santo squid craft beer vexillologist chambray everyday carry cronut aesthetic intelligentsia.",
    price: "$159",
  },
  {
    img: "https://tympanus.net/Development/ExpandingGridItemAnimation/img/4.png",
    title: "Diamond Crafter",
    subtitle: "Fred House",
    description:
      "Crucifix shoreditch tumblr heirloom irony tbh gastropub migas sartorial mustache direct trade plaid readymade ramps hammock.",
    price: "$199",
  },
  {
    img: "https://tympanus.net/Development/ExpandingGridItemAnimation/img/5.png",
    title: "Disco Fever",
    subtitle: "Alice Muller",
    description:
      "Single-origin coffee air plant kitsch paleo iPhone vegan cold-pressed slow-carb cornhole dreamcatcher palo santo salvia lo-fi.",
    price: "$199",
  },
  {
    img: "https://tympanus.net/Development/ExpandingGridItemAnimation/img/6.png",
    title: "Little Boxes",
    subtitle: "Xavier Brighton",
    description:
      "Drinking vinegar lumbersexual 90's flexitarian. Live-edge man bun air plant XOXO. Master cleanse vaporware keffiyeh.",
    price: "$299",
  },
  {
    img: "https://tympanus.net/Development/ExpandingGridItemAnimation/img/6.png",
    title: "Fractal Lover",
    subtitle: "Walter Perry",
    description:
      "Leggings green juice DIY, flannel tattooed selvage plaid yr sartorial chia. Scenester you probably haven't heard of them locavore.",
    price: "$129",
  },
  {
    img: "https://tympanus.net/Development/ExpandingGridItemAnimation/img/7.png",
    title: "Liquidia",
    subtitle: "Lidia Greenwood",
    description:
      "Helvetica la croix readymade, butcher viral pitchfork chillwave pork belly vaporware blue bottle iceland semiotics subway tile irony.",
    price: "$249",
  },
];

const grid = document.querySelector(".grid");

for (const product of productDetails) {
  const productCardTemplate = document.querySelector("#product-card");
  const productCard = productCardTemplate.content.cloneNode(true);
  productCard.querySelector(".product-img").setAttribute("src", product.img);
  productCard.querySelector(".product-title").innerHTML = product.title;
  productCard.querySelector(".product-subtitle").innerHTML = product.subtitle;
  productCard.querySelector(".product-description").innerHTML =
    product.description;
  productCard.querySelector(".price").innerHTML = product.price;

  grid.appendChild(productCard);
}
