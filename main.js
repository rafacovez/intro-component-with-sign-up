const inputArr = document.querySelectorAll(".form-input__input");

for (let i = 0; inputArr.length > i; i++) {
    inputArr[i].addEventListener("click", () => {
        console.log(inputArr[i]);
    })
}