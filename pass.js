const number = "1234567890";
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const spcl = "!@#$%^&*()";
let res=document.getElementById("h1");
const passgen = () => {
    const input = parseInt(document.getElementById("inputLimit").value);
    console.log(input)
    let pass = "";

    for (let i = 0; i < input; i++) {
        pass += upper[Math.floor(Math.random() * upper.length)];
        pass += lower[Math.floor(Math.random() * lower.length)];
        pass += number[Math.floor(Math.random() * number.length)];
        pass += spcl[Math.floor(Math.random() * spcl.length)];
    }

    pass = pass.substring(0, input);
    res.textContent = pass;
   console.log(pass)
};


