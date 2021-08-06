const password_holder = document.getElementById("password");
const copy_button = document.getElementById("copy");
const lowercase_checkbox = document.getElementById("lowercase");
const uppercase_checkbox = document.getElementById("uppercase");
const numbers_checkbox = document.getElementById("numbers");
const symbols_checkbox = document.getElementById("symbols");
const generate_button = document.getElementById("generate")


generate_button.addEventListener("click", () => {
    const lowercase = lowercase_checkbox.checked;
    const uppercase = uppercase_checkbox.checked;
    const numbers = numbers_checkbox.checked;
    const symbols = symbols_checkbox.checked;
    
    const length = Math.floor(Math.random() * 13) + 8;

    const password = generatePassword(length, lowercase, uppercase, numbers, symbols);
    password_holder.value = password;

})

copy_button.addEventListener("click", () => {
    const el = document.createElement('textarea');
    el.value = password_holder.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Copied")
})


let generatePassword = (length, lowercase, uppercase, numbers, symbols) => {
    let i = 0;
    let password = "";

    if(!lowercase && !uppercase && !numbers && !symbols){
        return "";
    }

    while(i < length){
        let this_char =  Math.floor(Math.random() * 4);

        switch(this_char){
            case 0:
                if(lowercase){
                    password += getLowercaseLetter()
                    i++;
                }
                break;
            
            case 1:
                if(uppercase){
                    password += getUppercaseLetter()
                    i++
                }
                break;
            case 2:
                if(numbers){
                    password += getNumbers()
                    i++
                }
                break;
            case 3:
                if(symbols){
                    password += getSymbols()
                    i++
                }
                break;
            default:
                password += ""
        }
    }
    return password;
}

let getLowercaseLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

let getUppercaseLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

let getNumbers = () => {
    return Math.floor(Math.random() * 10);
}

let getSymbols = () => {
    const symbols = "!@#$%^&*()-_=+{}[]\\|;:<>,./?";
    return symbols[Math.floor(Math.random() * symbols.length)];
}