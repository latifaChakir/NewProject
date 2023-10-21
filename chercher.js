const cartLink = document.getElementById('cart-link2');
        const sidebar = document.getElementById('sidebar2');

        cartLink.addEventListener('click', () => {
        
            if (sidebar.classList.contains('sidebar-hidden2')) {
                sidebar.classList.remove('sidebar-hidden2');
            } else {
                sidebar.classList.add('sidebar-hidden2');
            }
        });    


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


                const deleteButton = document.getElementById("deleteButton");

                deleteButton.addEventListener("click", function() {
                    const cartComponent = deleteButton.closest(".cart-component1");
        
                    if (cartComponent) {
                        cartComponent.remove();
                    }
                });
        
        
                const deleteButton1 = document.getElementById("deleteButton1");
        
                        deleteButton1.addEventListener("click", function() {
                            const cartComponent = deleteButton1.closest(".cart-component1");
                
                            if (cartComponent) {
                                cartComponent.remove();
                            }
                        });
        
        
                        const deleteButton2 = document.getElementById("deleteButton2");
        
                        deleteButton2.addEventListener("click", function() {
                            const cartComponent = deleteButton2.closest(".cart-component1");
                
                            if (cartComponent) {
                                cartComponent.remove();
                            }
                        });
                
        
        