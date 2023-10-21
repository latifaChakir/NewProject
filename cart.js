const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
const numberDisplay = document.getElementById("numberDisplay");

let number = 1;


incrementButton.addEventListener("click", () => {
    number++;
    numberDisplay.textContent = number;
});


decrementButton.addEventListener("click", () => {
    if (number > 0) {
        number--;
        numberDisplay.textContent = number;
    }
});


const incrementButton1 = document.getElementById("incrementButton1");
        const decrementButton1 = document.getElementById("decrementButton1");
        const numberDisplay1 = document.getElementById("numberDisplay1");

        let number1 = 0;

        incrementButton1.addEventListener("click", () => {
            number1++;
            numberDisplay1.textContent = number1;
        });

        decrementButton1.addEventListener("click", () => {
            if (number1 > 0) {
                number1--;
                numberDisplay1.textContent = number1;
            }
        });


        const incrementButton2 = document.getElementById("incrementButton2");
        const decrementButton2 = document.getElementById("decrementButton2");
        const numberDisplay2 = document.getElementById("numberDisplay2");

        let number2 = 0;

        incrementButton2.addEventListener("click", () => {
            number2++;
            numberDisplay2.textContent = number2;
        });

        decrementButton2.addEventListener("click", () => {
            if (number2 > 0) {
                number2--;
                numberDisplay2.textContent = number2;
            }
        });



        const cartLink = document.getElementById('cart-link');
        const sidebar = document.getElementById('sidebar');
        
        cartLink.addEventListener('click', () => {
           
            if (sidebar.classList.contains('sidebar-hidden')) {
                sidebar.classList.remove('sidebar-hidden');
            } else {
                sidebar.classList.add('sidebar-hidden');
            }
        });    



        const deleteButton = document.getElementById("deleteButton");

        deleteButton.addEventListener("click", function() {
            const cartComponent = deleteButton.closest(".cart-component");

            if (cartComponent) {
                cartComponent.remove();
            }
        });


        const deleteButton1 = document.getElementById("deleteButton1");

                deleteButton1.addEventListener("click", function() {
                    const cartComponent = deleteButton1.closest(".cart-component");
        
                    if (cartComponent) {
                        cartComponent.remove();
                    }
                });


                const deleteButton2 = document.getElementById("deleteButton2");

                deleteButton2.addEventListener("click", function() {
                    const cartComponent = deleteButton2.closest(".cart-component");
        
                    if (cartComponent) {
                        cartComponent.remove();
                    }
                });
        //SIDE BAR

        const deleteButton3 = document.getElementById("deleteButton3");

        deleteButton3.addEventListener("click", function() {
        const cartComponent = deleteButton3.closest(".cart-component1");

            if (cartComponent) {
                cartComponent.remove();
            }
        });


        const deleteButton4 = document.getElementById("deleteButton4");

                deleteButton4.addEventListener("click", function() {
                    const cartComponent = deleteButton4.closest(".cart-component1");
        
                    if (cartComponent) {
                        cartComponent.remove();
                    }
                });


                const deleteButton5 = document.getElementById("deleteButton5");

                deleteButton5.addEventListener("click", function() {
                    const cartComponent = deleteButton5.closest(".cart-component1");
        
                    if (cartComponent) {
                        cartComponent.remove();
                    }
                });

                //INCREMANT BUTTON

const incrementButton5 = document.getElementById("incrementButton5");
const decrementButton5 = document.getElementById("decrementButton5");
const numberDisplay5 = document.getElementById("numberDisplay5");

let number5 = 1;


incrementButton5.addEventListener("click", () => {
    number5++;
    numberDisplay5.textContent = number5;
});


decrementButton5.addEventListener("click", () => {
    if (number5 > 0) {
        number5--;
        numberDisplay5.textContent = number5;
    }
});


const incrementButton3 = document.getElementById("incrementButton3");
        const decrementButton3 = document.getElementById("decrementButton3");
        const numberDisplay3 = document.getElementById("numberDisplay3");

        let number3 = 0;

        incrementButton3.addEventListener("click", () => {
            number3++;
            numberDisplay3.textContent = number3;
        });

        decrementButton3.addEventListener("click", () => {
            if (number3 > 0) {
                number3--;
                numberDisplay3.textContent = number3;
            }
        });


        const incrementButton4 = document.getElementById("incrementButton4");
        const decrementButton4 = document.getElementById("decrementButton4");
        const numberDisplay4 = document.getElementById("numberDisplay4");

        let number4 = 0;

        incrementButton4.addEventListener("click", () => {
            number4++;
            numberDisplay4.textContent = number4;
        });

        decrementButton4.addEventListener("click", () => {
            if (number4 > 0) {
                number4--;
                numberDisplay4.textContent = number4;
            }
        });


        

