class EmailNotification {
    sendEmail(email: string): void {
        console.log(`Enviando email para ${email}`);
    }
}

class UserManager {
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser(name: string, email: string): void {
        // Cria o usuário
        console.log(`Usuário ${name} criado!`);

        // Envia a notificação usando o EmailNotification
        this.emailNotification.sendEmail(email);
    }
}
