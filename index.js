const cartLink = document.getElementById('cart-link1');
const sidebar = document.getElementById('sidebar1');
const shopping = document.getElementById("shopping-mall");
let globalTotal = 0;

cartLink.addEventListener('click', () => {
    if (sidebar.classList.contains('sidebar-hidden1')) {
        sidebar.classList.remove('sidebar-hidden1');
    } else {
        sidebar.classList.add('sidebar-hidden1');
    }
});

shopping.addEventListener("click", function () {
    const newComponent = document.createElement("div");
    newComponent.classList.add("cart-component1");

    newComponent.innerHTML = `
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
                  <p class="numberDisplay">0</p>
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

    const sidebar = document.getElementById("sidebar1");
    sidebar.appendChild(newComponent);

    const incrementButton = newComponent.querySelector(".incrementButton");
    const decrementButton = newComponent.querySelector(".decrementButton");
    const deleteButton = newComponent.querySelector(".deleteButton");
    const numberDisplay = newComponent.querySelector(".numberDisplay");
    const priceElement = newComponent.querySelector(".shopping-price");
    const totalPrice = newComponent.querySelector(".totalPrice");

    let number = 0;

    incrementButton.addEventListener("click", () => {
        number++;
        numberDisplay.textContent = number;
        calculateTotal();
    });

    decrementButton.addEventListener("click", () => {
        if (number > 0) {
            number--;
            numberDisplay.textContent = number;
            calculateTotal();
        }
    });

    deleteButton.addEventListener("click", () => {
        newComponent.remove();
        calculateTotal();
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
});
