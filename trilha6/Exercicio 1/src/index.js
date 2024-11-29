"use strict";
// 1. Separação de Responsabilidades em Classe de Pedido
// Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.
// Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
// Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
// Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.
class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }
    addItem(item, price) {
        this.items.push({ item, price });
        this.totalPrice += price;
    }
    getTotalPrice() {
        return this.totalPrice;
    }
    getItems() {
        return this.items.map((entry) => entry.item);
    }
}
class Payment {
    constructor() {
        this.paymentStatus = "Pending";
    }
    processPayment(totalPrice) {
        if (this.paymentStatus === "Paid") {
            console.log("Pagamento já processado.");
            return;
        }
        this.paymentStatus = "Paid";
        console.log(`Pagamento de ${totalPrice} processado.`);
    }
    getPaymentStatus() {
        return this.paymentStatus;
    }
}
class Shipping {
    constructor() {
        this.shippingStatus = "Not Shipped";
    }
    updateShippingStatus(status) {
        this.shippingStatus = status;
        console.log(`Status de envio atualizado para: ${status}`);
    }
    getShippingStatus() {
        return this.shippingStatus;
    }
}
class Order {
    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }
    addItem(item, price) {
        this.cart.addItem(item, price);
    }
    processPayment() {
        this.payment.processPayment(this.cart.getTotalPrice());
    }
    updateShippingStatus(status) {
        this.shipping.updateShippingStatus(status);
    }
    getOrderSummary() {
        return `Itens: ${this.cart.getItems().join(", ")}\nPreço Total: ${this.cart.getTotalPrice()}\nStatus do Pagamento: ${this.payment.getPaymentStatus()}\nStatus do Envio: ${this.shipping.getShippingStatus()}`;
    }
}
const order = new Order();
order.addItem("Camiseta", 50);
order.addItem("Calça", 100);
order.processPayment();
order.updateShippingStatus("Shipped");
console.log(order.getOrderSummary());
