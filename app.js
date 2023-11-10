const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Azadi Model",
    price: 190000,
    p: "YJ Future Azadi modal motor power.       850 W Range.                   80-85 km Speed.                  60 km/h Battery type         12V 23 ah Graphene batteries battery life.           3 years cycels 1000 Charge time.        4-5 hours Security.               Anti theft Alarm , handel lock - Reverse Gear - Disk brake - Digital Speedo meter - Load capacity 300 kg - 3 power modes - ample trunk space - avilable in 3 colours Black , white , Red Six Months of battery, motor, controller warranty",
    colors: [
      {
        code: "black",
        img: "c-cutout.png",
      },
      {
        code: "red",
        img: "th-cutout.png",
      },
    ],
  },
  {
    id: 2,
    title: "Mehran Model",
    price: 170000,
    p:"YJ Future Mehran modal motor power:650 W\nRange.70-75 km\nSpeed.60 km/h\nBattery type12V 23 ah Graphene batteries\nbattery life.3 years cycels 1000\nCharge time.3-4hours\nSecurity.Anti theft Alarm , handel lock\n- Coast one unit electricity\n- Drum brakes\n- Digital Speedo meter\n- Load capacity 300 kg\n- 3 power modes\n- ample trunk space\n- avilable in 3 colours Yellow , Sea Blue , Red\nSix Months of battery, motor, controller warranty",
    colors: [
      {
        code: "blue",
        img: "4-cutout.png",
      },
      {
        code: "red",
        img: "f-cutout.png",
      },
    ],
  },
  {
    id: 3,
    title: "Indus Model",
    price: 90000,
    p: 'YJ Future Electric Bike Model: Indus\n\t\"Features:\"\nKey less Drive\nRemote Control \nTube less tires \nPaddle Drive plus future\nDigital speedometer\nNo need of Registration\nMotor: 450W\nImported Battery: 48V\n(Charging Cost half unit)\n Speed: 35-45KM/h\nCoverage Kilometers: 35-45 KM (Per Charging) \n06 Month Warranty of Batteries, Motors & Controller \nWeight capacity (120kg) \nAvailable in 4 colors red, white, black, blue \n Use as ',
    colors: [
      {
        code: "black",
        img: "screenshot-43-cutout.png",
      },
      {
        code: "red",
        img: "screenshot-50-cutout.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductDesc.textContent = choosenProduct.p;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// const productButton = document.querySelector(".productButton");
// const payment = document.querySelector(".payment");
// const close = document.querySelector(".close");

// productButton.addEventListener("click", () => {
//   payment.style.display = "flex";
// });

// close.addEventListener("click", () => {
//   payment.style.display = "none";
// });
