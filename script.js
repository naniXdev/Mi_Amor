const secretCode = "NANI";

function checkPassword() {

    const input = document
        .getElementById("password")
        .value
        .toUpperCase();

    if(input === secretCode){

        createHeartBurst();

        setTimeout(() => {
           window.location.href = "flower.html";
        }, 2500);

    } else {

        alert("Wrong code ❤️");

    }
}

function createHeartBurst(){

    for(let i = 0; i < 80; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        heart.style.left =
            window.innerWidth / 2 + "px";

        heart.style.top =
            window.innerHeight / 2 + "px";

        const x =
            (Math.random() - 0.5) * 1000;

        const y =
            (Math.random() - 0.5) * 1000;

        heart.style.setProperty("--x", x + "px");
        heart.style.setProperty("--y", y + "px");

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2500);
    }
}