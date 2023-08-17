let items = document.querySelectorAll(".item")

items.forEach((elm, i) =>{
    elm.addEventListener("mouseover", (event) => {
        elm.className += " active"
    })

    elm.addEventListener("mouseleave", (event) => {
        elm.className = "item col-3"
    })
})

let americano_price = 20000
let latte_price = 25000
let caramel_price = 30000

let americano_qty = 0
let latte_qty = 0
let caramel_qty = 0

let americano_total = 0
let latte_total = 0
let caramel_total = 0

let grand_total = 0

function addAmericano() {
    const americano = document.getElementById("americano")
    
    if (americano.onclick) {
        document.getElementById("americano_row").innerHTML = `
        <td><button onclick="hapusAmericano()">x</button></td>
        <td>Americano</td>
        <td>${americano_qty += 1}</td>
        <td>${americano_price}</td>
        <td>${americano_total = americano_price * americano_qty}</td>
        `

        document.getElementById("grand-total").innerHTML = `
        <td colspan="4">Grand Total</td>
        <td id="total">${grand_total += americano_price}</td>
        `
    }
}

function addLatte() {
    const latte = document.getElementById("latte")
    latte_qty += 1
    latte_total = latte_price * latte_qty

    if (latte.onclick) {
        document.getElementById("latte_row").innerHTML = `
        <td><button onclick="hapusLatte()">x</button></td>
        <td>Latte</td>
        <td>${latte_qty}</td>
        <td>${latte_price}</td>
        <td>${latte_total}</td>
        `
    }

    document.getElementById("grand-total").innerHTML = `
        <td colspan="4">Grand Total</td>
        <td id="total">${grand_total += latte_price}</td>
        `
    
}

function addCaramel() {
    const caramel = document.getElementById("caramel")
    caramel_qty += 1
    caramel_total = caramel_price * caramel_qty

    if (caramel.onclick) {
        document.getElementById("caramel_row").innerHTML = `
        <td><button onclick="hapusCaramel()">x</button></td>
        <td>Caramel Machiatto</td>
        <td>${caramel_qty}</td>
        <td>${caramel_price}</td>
        <td>${caramel_total}</td>
        `
    }

    document.getElementById("grand-total").innerHTML = `
        <td colspan="4">Grand Total</td>
        <td id="total">${grand_total += caramel_price}</td>
        `
    
}

function hapusAmericano() {
    document.getElementById("americano_row").innerHTML = ``

    document.getElementById("grand-total").innerHTML = `
        <td colspan="4">Grand Total</td>
        <td id="total">${grand_total -= americano_total}</td>
        `
    americano_qty = 0
    americano_total = 0
}

function hapusLatte() {
    document.getElementById("latte_row").innerHTML = ``

    document.getElementById("grand-total").innerHTML = `
        <td colspan="4">Grand Total</td>
        <td id="total">${grand_total -= latte_total}</td>
        `
    latte_qty = 0
    latte_total = 0
}

function hapusCaramel() {
    document.getElementById("caramel_row").innerHTML = ``

    document.getElementById("grand-total").innerHTML = `
        <td colspan="4">Grand Total</td>
        <td id="total">${grand_total -= caramel_total}</td>
        `
    caramel_qty = 0
    caramel_total = 0
}


