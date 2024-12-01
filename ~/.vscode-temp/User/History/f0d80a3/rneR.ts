class Cart {
    items: { item: string, price: number }[] = [];
    totalPrice: number = 0;

    addItem(item: string, price: number): void {
        this.items.push({ item, price });
        this.totalPrice += price;
    }

    getTotalPrice(): number {
        return this.totalPrice;
    }
}

class Payment {
    processPayment(amount: number): string {
        return amount > 0 ? "paid" : "failed";
    }
}

class Shipping {
    updateShippingStatus(status: string): string {
        return status;
    }
}

class Order {
    cart: Cart;
    payment: Payment;
    shipping: Shipping;
    paymentStatus: string = "pending";
    shippingStatus: string = "pending";

    constructor(cart: Cart, payment: Payment, shipping: Shipping) {
        this.cart = cart;
        this.payment = payment;
        this.shipping = shipping;
    }

    processOrder(): void {
        this.paymentStatus = this.payment.processPayment(this.cart.getTotalPrice());
        this.shippingStatus = this.shipping.updateShippingStatus("shipped");
    }
}
