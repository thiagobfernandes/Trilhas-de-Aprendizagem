class Order {
    items: string[] = [];
    totalPrice: number = 0;
    paymentStatus: string = "pending";
    shippingStatus: string = "pending";

    addItem(item: string, price: number): void {
        this.items.push(item);
        this.totalPrice += price;
    }

    processPayment(): void {
        if (this.totalPrice > 0) {
            this.paymentStatus = "paid";
        } else {
            this.paymentStatus = "failed";
        }
    }

    updateShippingStatus(status: string): void {
        this.shippingStatus = status;
    }
}
