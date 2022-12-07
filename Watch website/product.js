// console.log("hello")

// Product Section
document.getElementById("addcart").onclick = function addtoCart() {
    let title = document.getElementById("title");
    let div = document.createElement('div');
    title.appendChild(div);
    let img = document.createElement("img");
    img.src = "img/watch.jpg";
    img.style.height = "400px";
    img.style.width = "200px";
    img.style.marginTop = "20px";
    div.appendChild(img);
    let p = document.createElement('h2');
    div.appendChild(p)
    p.innerHTML = "SKMEI"
    let para = document.createElement('p');
    para.innerHTML = "1164 Blue Analog-Digital Watch - For Men";
    div.appendChild(para);
    para.style.fontSize = "x-large";
    let price = document.createElement("h3");
    price.innerHTML = "Rs. 467 (50% OFF)";
    div.appendChild(price);
    let button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.id = 'delete';
    // actions.innerHTML = ` <button class='delete'>Remove</button>`;
    div.appendChild(button)
    button.style.margin = "15px";
    button.style.background = "red";
    button.style.padding = "10px";
    button.style.fontSize = "large";
    button.style.color = "white";

let amount = document.getElementById("amount");
  
let span = document.createElement("span");
span.innerHTML = "Total Amount ₹467"
amount.appendChild(span);

span.style.fontSize = "x-large";

    let remove = document.getElementById("delete");
    remove.addEventListener('click',
          function () {
              title.remove()
          })


}



