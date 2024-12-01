class EmailSender {
    sendEmail(email: string): void {
        if (this.validateEmail(email)) {
            console.log(`Enviando email para ${email}`);
        } else {
            console.log(`Email inválido: ${email}`);
        }
    }

    validateEmail(email: string): boolean {
        // Validação simples de email
        return email.includes("@");
    }
}
