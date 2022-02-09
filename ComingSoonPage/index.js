const submitButton = document.querySelector("form button");
const flexContainer = document.querySelector(".flex-container");
const userEmail = document.querySelector("#femail");
const errorMsg = document.querySelector(".error-msg");
const errorSymbol = document.querySelector(".error-symbol");

submitButton.addEventListener("click", function(event){
    if (!userEmail.validity.valid){
        event.preventDefault();
        errorSymbol.classList = "error-symbol";
        flexContainer.classList = "flex-container red-border";
        showErrorMsg();
    }
});

function showErrorMsg(){
    if(userEmail.validity.typeMismatch){
        errorMsg.textContent = "Please provide a valid email";
    }else if(userEmail.validity.valueMissing){
        errorMsg.textContent = "Please provide a email";
    }
}

