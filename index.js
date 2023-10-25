let sidebarItems = getSidebarItemsFromLocalStorage();
function getSidebarItemsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('sidebarItems')) || [];

}

function calculateTotal() {
    const priceElements = document.querySelectorAll(".shopping-price");
    const numberDisplays = document.querySelectorAll(".numberDisplay");
    const totalPrices = document.querySelectorAll(".totalPrice");

    let total = 0;

    for (let i = 0; i < priceElements.length; i++) {
        const price = parseFloat(priceElements[i].textContent.replace('$', ''));
        const number = parseInt(numberDisplays[i].textContent);
        const itemTotal = price * number;
        total += itemTotal;
        totalPrices[i].textContent = `$${itemTotal}`;
    }

}
//delete
function deleteItem(newComponent) {
    const deleteButton = newComponent.querySelector(".deleteButton");
    deleteButton.addEventListener("click", () => {
        newComponent.remove();
        const itemIndex = sidebarItems.findIndex(item => item.content === newComponent.innerHTML);
        if (itemIndex !== -1) {
            sidebarItems.splice(itemIndex, 1);
            localStorage.setItem('sidebarItems', JSON.stringify(sidebarItems));
            console.log(sidebarItems);
            calculateTotal();
            updateNotificationBadge();

        }
    });
}


//notification
const notificationBadge = document.querySelector('.notification-badge');
console.log(notificationBadge);
notificationBadge.textContent = sidebarItems.length;

function updateNotificationBadge() {
    sidebarItems = getSidebarItemsFromLocalStorage();
    notificationBadge.textContent = sidebarItems.length;
}
//load

document.addEventListener('DOMContentLoaded', function () {
    sidebarItems;
    calculateTotal();
});
//

function updateAffichagePanie() {

    var panie = JSON.parse(localStorage.getItem('sidebarItems')) || [];
    for (let i = 0; i < panie.length; i++) {
        const newComponent = document.createElement("div");
        newComponent.classList.add("cart-component1");
        const newContentHTML = `
        <div class="cart-component1">
        <div class="sty-carre-bar">
        <div class="carre-bar" style=" width: 130px; height: 100px;">
        <img style="width: 100%; height: 100%;" src="./images/Rectangle 4.png" alt="Photo de SHARE">
        </div>
        </div>
        <div class="cart-component-info1">
            <div class="love2">
                <div>
                    <p style=" border-radius: 50px;border: 1px solid #94A3B8; padding: 4px 4px 4px 4px; background-color: #E2E8F0;  width: 140px;">Selected vue le 31</p>
                    </div>
                    <div class="pic1" style="display: inline-flex; gap: 10px;">
                    <img src="./images/image 8.png" alt="Photo de HEART">
                    <img src="./images/icons8-supprimer-30.png" alt="Photo de SUPPRIMER" class="deleteButton">
                    </div>
                    </div>
                    <h1 class="shopping-price">$1200</h1>
                    <div class="love1">
                    <div class="pic1" style="display: inline-flex; gap: 20px;">
                    <button class="incrementButton">+</button>
                    <p class="numberDisplay">1</p>
                    <button class="decrementButton">-</button>
                    </div>
            </div>
            <div class="total">
              <h2>Total :</h2>
              <p class="totalPrice">0</p>
              </div>
              
              </div>
              </div>
              
              `;
        newComponent.insertAdjacentHTML('afterbegin', newContentHTML);
        const sidebar = document.getElementById("sidebar1");
        sidebar.appendChild(newComponent);
        deleteItem(newComponent);
        calculateTotal();

        const incrementButton = newComponent.querySelector(".incrementButton");
        const decrementButton = newComponent.querySelector(".decrementButton");
        const numberDisplay = newComponent.querySelector(".numberDisplay");
        let number = parseInt(numberDisplay.textContent);
        

        incrementButton.addEventListener("click", () => {
            number++;
            numberDisplay.textContent = number;
            calculateTotal();
        });

        decrementButton.addEventListener("click", () => {
            if (number > 1) {
                number--;
                numberDisplay.textContent = number;
                calculateTotal();
            }
        });



    }
}


//SIDEBAR
const cartLink = document.getElementById('cart-link1');
const sidebar = document.getElementById('sidebar1');
const shopping = document.querySelectorAll(".shopping-mall");
let globalTotal = 0;

cartLink.addEventListener('click', () => {
    if (sidebar.classList.contains('sidebar-hidden1')) {
        sidebar.classList.remove('sidebar-hidden1');
    } else {
        sidebar.classList.add('sidebar-hidden1');
    }
});

//SHOPPING CART
shopping.forEach(Image => {
    Image.addEventListener("click", function () {
        console.log(Image);
        const newComponent = document.createElement("div");
        newComponent.classList.add("cart-component1");


        const newContentHTML = `
        <div class="cart-component1">
        <div class="sty-carre-bar">
        <div class="carre-bar" style=" width: 130px; height: 100px;">
        <img style="width: 100%; height: 100%;" src="./images/Rectangle 4.png" alt="Photo de SHARE">
        </div>
        </div>
        <div class="cart-component-info1">
            <div class="love2">
                <div>
                    <p style=" border-radius: 50px;border: 1px solid #94A3B8; padding: 4px 4px 4px 4px; background-color: #E2E8F0;  width: 140px;">Selected vue le 31</p>
                    </div>
                    <div class="pic1" style="display: inline-flex; gap: 10px;">
                    <img src="./images/image 8.png" alt="Photo de HEART">
                    <img src="./images/icons8-supprimer-30.png" alt="Photo de SUPPRIMER" class="deleteButton">
                    </div>
                    </div>
                    <h1 class="shopping-price">$1200</h1>
                    <div class="love1">
                    <div class="pic1" style="display: inline-flex; gap: 20px;">
                    <button class="incrementButton">+</button>
                    <p class="numberDisplay">1</p>
                    <button class="decrementButton">-</button>
                    </div>
            </div>
            <div class="total">
              <h2>Total :</h2>
              <p class="totalPrice">0</p>
              </div>
              
              </div>
              </div>
              
              `;
        newComponent.insertAdjacentHTML('afterbegin', newContentHTML);
        const sidebar = document.getElementById("sidebar1");
        sidebar.appendChild(newComponent);
        const incrementButton = newComponent.querySelector(".incrementButton");
        const decrementButton = newComponent.querySelector(".decrementButton");
        const numberDisplay = newComponent.querySelector(".numberDisplay");
        const priceElement = newComponent.querySelector(".shopping-price");
        const totalPrice = newComponent.querySelector(".totalPrice");
        let number = parseInt(numberDisplay.textContent);
        calculateTotal();
        incrementButton.addEventListener("click", () => {
            number++;
            numberDisplay.textContent = number;
            calculateTotal();
        });

        decrementButton.addEventListener("click", () => {
            if (number > 1) {
                number--;
                numberDisplay.textContent = number;
                calculateTotal();
            }
        });

        const deleteButton = newComponent.querySelector(".deleteButton");
        deleteButton.addEventListener("click", () => {
            newComponent.remove();
            calculateTotal();
            updateNotificationBadge();


        });

        function calculateTotal() {
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            const total = price * number;
            totalPrice.textContent = `$${total}`;
            updateGlobalTotal();
        }

        function updateGlobalTotal() {
            globalTotal = Array.from(document.querySelectorAll(".totalPrice")).reduce((total, element) => {
                const price = parseFloat(element.textContent.replace('$', ''));
                return total + price;
            }, 0);
            const globalTotalElement = document.getElementById("globalTotal");
            if (globalTotalElement) {
                globalTotalElement.textContent = `$${globalTotal}`;
            }
        }

        updateGlobalTotal();
        const newComponentData = {
            content: newComponent.innerHTML,
            price: 1200,
        };
        sidebarItems.push(newComponentData);
        localStorage.setItem('sidebarItems', JSON.stringify(sidebarItems));

    });


});

//navbar
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

//table accessoires
const itemTds = document.querySelectorAll(".item-td");
let isItemsVisible = true;
const toggleItemsVisibility = () => {
    isItemsVisible = !isItemsVisible;

    for (const itemTd of itemTds) {
        itemTd.style.display = isItemsVisible ? "table-cell" : "none";
    }
};

const clickableTd = document.querySelector("td");
clickableTd?.addEventListener("click", toggleItemsVisibility);

//validate form

var nomInput = document.getElementById("nom");
var prenomInput = document.getElementById("prenom");
var telephoneInput = document.getElementById("telephone");
var emailInput = document.getElementById("email"); 
var message = document.getElementById("message");

nomInput?.addEventListener("input", function () {
    validateNom();
});
prenomInput?.addEventListener("input", function () {
    validatePrenom();
});


telephoneInput?.addEventListener("input", function () {
    validateTelephone();
});

emailInput?.addEventListener("input", function () {
    validateEmail();
});

function validateNom() {
    var nom = nomInput.value;
    var nomRegex = /^[A-Za-z\s]+$/;
    if (!nom.match(nomRegex)) {
        message.innerHTML = "Le nom doit contenir uniquement des lettres et des espaces au cas de besoin.";
    } else {
        message.innerHTML = "";
    }
}
function validatePrenom() {
    var prenom = prenomInput.value;
    var prenomRegex = /^[A-Za-z\s]+$/;
    if (!prenom.match(prenomRegex)) {
        message.innerHTML = "Le prénom doit contenir uniquement des lettres et des espaces au cas de besoin.";
    } else {
        message.innerHTML = "";
    }
}

function validateTelephone() {
    var telephone = telephoneInput.value;
    var telephoneRegex = /^\d{10}$/;
    if (!telephone.match(telephoneRegex)) {
        message.innerHTML = "Le numéro de téléphone doit contenir 10 chiffres. Veuillez saisir votre numéro avec 10 chiffres.";
    } else {
        message.innerHTML = "";
    }
}

function validateEmail() {
    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        message.innerHTML = "Veuillez saisir une adresse email valide qui contient un symbole '@' avec le nom de domaine.";
    } else {
        message.innerHTML = "";
    }
}


//slide

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function autoSlide() {
    nextSlide();
}

setInterval(autoSlide, 2000); 

showSlide(slideIndex);