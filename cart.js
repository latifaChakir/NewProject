document.addEventListener("DOMContentLoaded", function () {
    for (let index = 0; index < 3; index++) {
        calculateTotal(index);
    }
});

const navbarToggle = document.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);

    if (isNavbarExpanded) {
        navbarMenu.style.display = "block";
    } else {
        navbarMenu.style.display = "none";
    }
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);


const cartLink = document.getElementById('cart-link1');
const sidebar = document.getElementById('sidebar1');
const shopping = document.getElementById("shopping-mall");
let globalTotal=0;

cartLink.addEventListener('click', () => {
    if (sidebar.classList.contains('sidebar-hidden1')) {
        sidebar.classList.remove('sidebar-hidden1');
    } else {
        sidebar.classList.add('sidebar-hidden1');
    }
});

const incrementButtons = document.querySelectorAll(".incrementButton");
const decrementButtons = document.querySelectorAll(".decrementButton");
const deleteButtons = document.querySelectorAll(".deleteButton");
const numberDisplays = document.querySelectorAll(".numberDisplay");
const priceElements = document.querySelectorAll(".shopping-price");
const totalPrices = document.querySelectorAll(".totalPrice");


incrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let number = parseInt(numberDisplays[index].textContent);
        number++;
        numberDisplays[index].textContent = number;
        calculateTotal(index);
    });
});


decrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let number = parseInt(numberDisplays[index].textContent);
        if (number > 1) {
            number--;
            numberDisplays[index].textContent = number;
            calculateTotal(index);
        }
    });
});

deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const parentCartItem = button.closest(".cart-component1");
        if (parentCartItem) {
            parentCartItem.remove();
            calculateTotal(index);
        }
    });
});

function calculateTotal(index) {
    const price = parseFloat(priceElements[index].textContent.replace('$', ''));
    const number = parseInt(numberDisplays[index].textContent);
    const total = price * number;
    totalPrices[index].textContent = `$${total}`;
    updateGlobalTotal();
}


function updateGlobalTotal() {
    const totalElements = document.querySelectorAll(".totalPrice");
    let globalTotal = 0;
    totalElements.forEach((element) => {
        const price = parseFloat(element.textContent.replace('$', ''));
        globalTotal += price;
    });

    const globalTotalElement = document.getElementById("globalTotal");
    if (globalTotalElement) {
        globalTotalElement.textContent = `$${globalTotal.toFixed(2)}`;
    }
}


updateGlobalTotal();
