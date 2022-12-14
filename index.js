const sendMessageBtn = document.getElementById("send-message");

sendMessageBtn.addEventListener("click", () => {
    //show #modal
    const modal = document.getElementById("modal");
    modal.style.display = "block";
});

const closeModalBtn = document.getElementById("close-modal");

closeModalBtn.addEventListener("click", () => {
    //hide #modal
    const modal = document.getElementById("modal");
    modal.style.display = "none";
});

//change h1
const changeH1 = (text) => {
    const h1 = document.getElementById("headingOne");
    h1.innerHTML = text;
};

//change background color
const changeBackgroundColor = (color) => {
    //get body element without id
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = color;
};

//change footer address
const changeFooterAddress = (address) => {
    const footerAddress = document.getElementById("footer-address");
    footerAddress.innerHTML = address;
};

//add css to every link
const addCssToLinks = (css) => {
    const links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].style.cssText = css;
    }
};

//toggle css class on every image
const toggleCssClassOnImages = (cssClass) => {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].classList.toggle(cssClass);
    }
};

//color the price of the products
let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
];

const colorThePrice = (different = false) => {
    const prices = document.getElementsByClassName("price");
    const color = colors[Math.floor(Math.random() * colors.length)];
    //random colors
    for (let i = 0; i < prices.length; i++) {
        prices[i].style.color = different
            ? colors[Math.floor(Math.random() * colors.length)]
            : color;
    }
};

const runJavaScript = () => {
    changeH1("The Best Phone Shop");
    changeBackgroundColor("lightblue");
    changeFooterAddress("1234 Main Street, New York, NY 10001");
    addCssToLinks("color: red; font-size: 20px;");
    toggleCssClassOnImages("img-visible");
    colorThePrice(true);
};
