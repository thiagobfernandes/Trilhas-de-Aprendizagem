class UserManager {
    createUser(name: string, email: string): void {
        // Cria o usuário
        console.log(`Usuário ${name} criado!`);

        // Envia a notificação
        console.log(`Enviando email para ${email}`);
    }
}
