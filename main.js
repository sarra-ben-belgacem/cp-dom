var btnminus = Array.from(document.getElementsByClassName("btn-minus"));
var btnplus = Array.from(document.getElementsByClassName("btn-plus"));
var QTE = document.getElementsByClassName("QTE");
console.log(QTE);
var totalPrice = document.getElementById("total");
var price = document.getElementsByClassName("price");
var btnsupp = Array.from(document.getElementsByClassName("mb-2"));
var like = Array.from(document.getElementsByClassName("fa fa-heart"));
var x = Array.from(document.getElementsByClassName("item"));

for (let i = 0; i < btnminus.length; i++) {
    btnplus[i].addEventListener("click", function () {
        QTE[i].innerText = Number(QTE[i].innerText) + 1;
        sommePrice();
    });
}
for (let i = 0; i < btnplus.length; i++) {
    btnminus[i].addEventListener("click", function () {
        if (Number(QTE[i].innerText <= 0)) {
            QTE[i].innerText = 0;
        } else {
            QTE[i].innerText = Number(QTE[i].innerText) - 1;
        }
        sommePrice();
    });
}

function sommePrice() {
    let total = 0;
    for (let i = 0; i < price.length; i++) {
        total = total + Number(QTE[i].innerHTML) * Number(price[i].innerHTML);
    }
    totalPrice.innerHTML = total;
}
sommePrice();

for (let i = 0; i < btnsupp.length; i++) {
    btnsupp[i].addEventListener("click", function () {
        x[i].remove();
        sommePrice();
    });
}

for (let i = 0; i < like.length; i++) {
    like[i].addEventListener("click", function () {
        like[i].style.color = "red";
    });
}
