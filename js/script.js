"use strict";

// 1. Opret variabler med startværdier
let subtotal = 100;  // Startværdi for subtotal (f.eks. $100)
let discount = 20;    // Rabatbeløb (f.eks. $20)
let shipping = 10;    // Forsendelsesomkostninger (f.eks. $10)

// 2. Brug -= operatoren til at trække rabatten fra subtotal
subtotal -= discount;  // Nu er subtotalen $100 - $20 = $80

// 3. Beregn totalen (subtotal + shipping)
let total = subtotal + shipping;  // $80 + $10 = $90

// 4. Find HTML-elementerne og opdater deres indhold
let subtotalElement = document.getElementById("subtotal");
let shippingElement = document.getElementById("shipping");
let totalElement = document.getElementById("total");

// Opdater HTML med de beregnede værdier
subtotalElement.textContent = subtotal.toFixed(2);  // Vis subtotal med 2 decimaler
shippingElement.textContent = shipping.toFixed(2);  // Vis shipping med 2 decimaler
totalElement.textContent = total.toFixed(2);        // Vis total med 2 decimaler
