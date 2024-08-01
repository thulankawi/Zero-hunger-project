document.addEventListener('DOMContentLoaded', function() {
    let cardHolderInput = document.querySelector('.cardHolderName');

    cardHolderInput.addEventListener('input', function(event) {
        // Replace any characters that are not letters or spaces
        this.value = this.value.replace(/[^A-Za-z\s]/g, '');
    });

    let cardNumberInput = document.querySelector('.cardNumber');

    cardNumberInput.addEventListener('input', function(event) {
        let rawValue = this.value.replace(/\D/g, ''); // Remove non-numeric characters
        let formattedValue = '';
        for (let i = 0; i < rawValue.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += '-'; // Insert a hyphen every 4 characters
            }
            formattedValue += rawValue[i];
        }
        this.value = formattedValue.slice(0, 19); // Limit the input to 16 characters
    });

    let cvvInput= document.querySelector('.cvv');

    cvvInput.addEventListener('input',function(event){
        let inputValue = this.value.replace(/\D/g, '');
        this.value=inputValue.slice(0,3);
    })

    let postalCodeInput = document.querySelector('.postalCode');
    postalCodeInput.addEventListener('input',function(event){
        let inputValue = this.value.replace(/\D/g, '');
        this.value=inputValue.slice(0,5);
    })


    let expYearInput=document.querySelector('.expYear');
    
    expYearInput.addEventListener('input',function(event){
        let inputValue=this.value.replace(/\D/g, '');
        this.value=inputValue.slice(0,4);
    })

    let townInput=document.querySelector('.town');
    let districtInput=document.querySelector('.district');
    let nameInput=document.querySelector('.firstName');
    let surNameInput=document.querySelector('.surName');

    let validateInputs=[townInput,districtInput,nameInput,surNameInput];

    validateInputs.forEach(function(input){
        input.addEventListener('input',function(event){
            let inputValue=this.value.replace(/[^A-Za-z\s]/g, '');
            this.value = inputValue;
        });

    });

    let phoneNumber = document.querySelector('.phone');

    phoneNumber.addEventListener('input',function(event){
        let inputValue = this.value.replace(/\D/g, '');
        this.value=inputValue

    });

    // Select the "Proceed to Checkout" button
    let proceedButton = document.querySelector('.submit-btn');

    // Add event listener for the click event on the "Proceed to Checkout" button
    proceedButton.addEventListener('click', function(event) {
        // Check if any of the required fields are empty
        let requiredInputs = document.querySelectorAll('.required');
        let formFullyFilled = true; 

        requiredInputs.forEach(function(input) {
            if (input.value.trim() === '') {
                formFullyFilled = false; // Set formFullyFilled to false if any required field is empty
            }
        });

        if (formFullyFilled) {
            alert('Thank you, it\'s done!');
        } else {
            // Show the error message container
            let errorContainer = document.querySelector('.error-container');
            errorContainer.style.display = 'block';
            event.preventDefault(); // Prevent form submission
        }
    });
});