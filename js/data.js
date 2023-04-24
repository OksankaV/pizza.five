const products = {
  pizza: [
    {
      id: "margarita",
      name: "Маргарита",
      description: "соус неаполітано, моцарелла, помідори, орегано",
      weight: 470,
      price: 90,
      image: "./images/img-pizzamargarita.png",
    },
    {
      id: "neapolitano",
      name: "Неаполітано",
      description:
        "соус неаполітано, моцарелла, помідор, печериці, куряче філе, шинка, маслини, орегано",
      weight: 570,
      price: 150,
      image: "./images/img-pizzaneapolitano.png",
    },
    {
      id: "palermo",
      name: "Палєрмо",
      description:
        "соус вершковий, моцарелла, помідор, печериці, бекон, шинка, орегано",
      weight: 560,
      price: 125,
      image: "./images/img-pizzapalermo.png",
    },
    {
      id: "paperoni",
      name: "Пеппероні",
      description: "соус неаполітано, моцарелла, пеппероні, чілі, орегано",
      weight: 480,
      price: 100,
      image: "./images/img-pizzapaperoni.png",
    },
    {
      id: "vitelo",
      name: "Вітелло",
      description:
        "соус неаполітано, моцарелла, помідор, яловичина, болгарський перець, Дор Блю, орегано",
      weight: 590,
      price: 130,
      image: "./images/img-pizzavitelo.png",
    },
    {
      id: "4formadgi",
      name: "Квадро Формаджі",
      description:
        "соус вершковий, моцарелла, гауда, Дор Блю, гарана падана, груша, орегано",
      weight: 560,
      price: 140,
      image: "./images/img-pizza4formadgi.png",
    },
    {
      id: "bavarska",
      name: "Баварська",
      description:
        "соус неаполітано, моцарелла, помідор, колбаски, корнішони, цибуля маринована, орегано",
      weight: 550,
      price: 110,
      image: "./images/img-pizzabavarska.png",
    },
    {
      id: "mafia",
      name: "Мафія",
      description:
        "соус неаполітано, моцарелла, помідор, яловичина, куряче філе, шинка, цибуля маринована, орегано",
      weight: 600,
      price: 130,
      image: "./images/img-pizzamafia.png",
    },
  ],
  pasta: [
    {
      id: "carbonara",
      name: "Карбонара",
      description: "Паста з беконом у вершковому соусі",
      weight: 350,
      price: 90,
      image: "./images/img-pastacarbonara.png",
    },
    {
      id: "salmon",
      name: "Селмон",
      description: "Ніжна паста з лососем у вершково - томатному соусі",
      weight: 370,
      price: 120,
      image: "./images/img-pastasalmon.png",
    },
    {
      id: "fungi",
      name: "Фунгі",
      description: "Паста з грибами у вершковому соусі",
      weight: 320,
      price: 70,
      image: "./images/img-pastafungi.png",
    },
    {
      id: "beefburgerset",
      name: "БіфБургер сет",
      description:
        "Бургер з котлетою з яловичини, маринованими огірком, мариновоною цибулею, сиром чеддер, заправлений соусом сальса, подається з колой, картофлею фрі та колою",
      weight: 350,
      sauseWeight: 150,
      price: 90,
      image: "./images/img-beefburgerset.png",
    },
    {
      id: "chickenburgerset",
      name: "ЧікенБургер",
      description:
        "Бургер з ніжним курячим стейком, помідором, маринованим огірком, сиром чеддер, руколою, заправленим соусом песто, подається з Pepsi , картоплею фрі та соусом",
      weight: 350,
      sauseWeight: 150,
      price: 90,
      image: "./images/img-chickenburgerset.png",
    },
  ],
  drink: [
    {
      id: "lemonade",
      name: "Лимонад",
      volume: [0.5, 1, 2],
      price: [25, 45, 65],
      volumePrice: { 0.5: 25, 1: 45, 2: 65 },
      image: "./images/img-drinkslemonade.png",
    },
    {
      id: "cherryjuice",
      name: "Вишневий сік",
      volume: [0.5, 1, 2],
      price: [30, 50, 70],
      volumePrice: { 0.5: 25, 1: 45, 2: 65 },
      image: "./images/img-drinkscherryjuice.png",
    },
    {
      id: "water",
      name: "Вода",
      volume: [0.5, 1, 2],
      price: [5, 15, 25],
      volumePrice: { 0.5: 25, 1: 45, 2: 65 },
      image: "./images/img-drinkswater.png",
    },
    {
      id: "pepsi",
      name: "Pepsi",
      volume: [0.5, 1, 2],
      price: [30, 60, 90],
      volumePrice: { 0.5: 25, 1: 45, 2: 65 },
      image: "./images/img-drinkspepsi.png",
    },
  ],
  snack: [
    {
      id: "friedpotatoes",
      name: "Картопля фрі",
      weight: 200,
      sauseWeight: 35,
      price: 60,
      image: "./images/img-snacksfriedpotatoes.png",
    },
    {
      id: "cheesecrokets",
      name: "Сирні крокети",
      weight: 200,
      sauseWeight: 35,
      price: 80,
      image: "./images/img-snackscheesecrokets.png",
    },
    {
      id: "nagets",
      name: "Нагетси",
      weight: 150,
      sauseWeight: 35,
      price: 70,
      image: "./images/img-snacksnagets.png",
    },
    {
      id: "onionrings",
      name: "Цибулеві кільця",
      weight: 150,
      sauseWeight: 35,
      price: 90,
      image: "./images/img-snacksonionrings.png",
    },
  ],
  sause: [
    {
      id: "garlic",
      name: "Часниковий соус",
      description:
        "часниковий соус, чарівний соус, густий, вершковий зі смаком часнику",
      weight: 35,
      price: 20,
      image: "./images/img-sausegarlic.png",
    },
    {
      id: "souresweet",
      name: "Кисло - солодкий соус",
      description: "соус густий, солодкий з кислинкою",
      weight: 35,
      price: 20,
      image: "./images/img-sausesouresweet.png",
    },
    {
      id: "tomato",
      name: "Томатний соус",
      description: "томатний соус, зі справжніх помідорів, густий",
      weight: 35,
      price: 20,
      image: "./images/img-sausetomato.png",
    },
    {
      id: "cranbery",
      name: "Журавлиний соус",
      description: "журавлиний соус, ягідний з кислинкою, густий",
      weight: 35,
      price: 20,
      image: "./images/img-sausecranbery.png",
    },
  ],
};

localStorage.setItem("data", JSON.stringify(products));