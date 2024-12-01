class ContactValidator {
    validateEmail(email: string): boolean {
        // Validação simples de email
        return email.includes("@");
    }
}

class EmailSender {
    private contactValidator: ContactValidator;

    constructor(contactValidator: ContactValidator) {
        this.contactValidator = contactValidator;
    }

    sendEmail(email: string): void {
        if (this.contactValidator.validateEmail(email)) {
            console.log(`Enviando email para ${email}`);
        } else {
            console.log(`Email inválido: ${email}`);
        }
    }
}
