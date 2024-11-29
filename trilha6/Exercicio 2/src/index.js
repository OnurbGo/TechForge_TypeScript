"use strict";
// 2. Gerenciamento de Usuários e Notificações
// Implemente uma classe UserManager que gerencie a criação de usuários e envie notificações por email.
// Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
// Em seguida, refatore para dividir a responsabilidade de envio de notificação em uma classe EmailNotification.
// Objetivo: Aumentar a coesão separando a lógica de notificação e reduzir o acoplamento ao injetar EmailNotification na UserManager.
class EmailNotification {
    sendEmail(username) {
        console.log(`Enviando email para ${username}...`);
    }
}
class UserManager {
    constructor(emailNotification) {
        this.users = [];
        this.emailNotification = emailNotification;
    }
    createUser(username) {
        this.users.push(username);
        console.log(`Usuário ${username} criado com sucesso!`);
        this.emailNotification.sendEmail(username);
    }
    getUsers() {
        return this.users;
    }
}
const emailNotification = new EmailNotification();
const userManager = new UserManager(emailNotification);
userManager.createUser("João");
userManager.createUser("Maria");
console.log("Usuários:", userManager.getUsers());
