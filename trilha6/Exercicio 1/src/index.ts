// 1. Separação de Responsabilidades em Classe de Pedido
// Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.

// Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
// Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
// Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.

class Cart {
    private items: { item: string; price: number }[] = [];
    private totalPrice: number = 0;
  
    addItem(item: string, price: number): void {
      this.items.push({ item, price });
      this.totalPrice += price;
    }
  
    getTotalPrice(): number {
      return this.totalPrice;
    }
  
    getItems(): string[] {
      return this.items.map((entry) => entry.item);
    }
  }
  
  class Payment {
    private paymentStatus: string = "Pending";
  
    processPayment(totalPrice: number): void {
      if (this.paymentStatus === "Paid") {
        console.log("Pagamento já processado.");
        return;
      }
      this.paymentStatus = "Paid";
      console.log(`Pagamento de ${totalPrice} processado.`);
    }
  
    getPaymentStatus(): string {
      return this.paymentStatus;
    }
  }
  
  class Shipping {
    private shippingStatus: string = "Not Shipped";
  
    updateShippingStatus(status: string): void {
      this.shippingStatus = status;
      console.log(`Status de envio atualizado para: ${status}`);
    }
  
    getShippingStatus(): string {
      return this.shippingStatus;
    }
  }
  
  class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;
  
    constructor() {
      this.cart = new Cart();
      this.payment = new Payment();
      this.shipping = new Shipping();
    }
  
    addItem(item: string, price: number): void {
      this.cart.addItem(item, price);
    }
  
    processPayment(): void {
      this.payment.processPayment(this.cart.getTotalPrice());
    }
  
    updateShippingStatus(status: string): void {
      this.shipping.updateShippingStatus(status);
    }
  
    getOrderSummary(): string {
      return `Itens: ${this.cart.getItems().join(", ")}\nPreço Total: ${this.cart.getTotalPrice()}\nStatus do Pagamento: ${this.payment.getPaymentStatus()}\nStatus do Envio: ${this.shipping.getShippingStatus()}`;
    }
  }
  
  const order = new Order();
  order.addItem("Camiseta", 50);
  order.addItem("Calça", 100);
  order.processPayment();
  order.updateShippingStatus("Shipped");
  
  console.log(order.getOrderSummary());