"use strict";
// 3. Sistema de Envio de Emails e Validação de Contato
// Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.
// Implemente a validação e o envio de email na mesma classe.
// Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
// Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento.
class ContactValidator {
    validate(contact) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(contact);
    }
}
class EmailSender {
    constructor(contactValidator) {
        this.contactValidator = contactValidator;
    }
    sendEmail(contact, message) {
        if (this.contactValidator.validate(contact)) {
            console.log(`Enviando email para ${contact}: ${message}`);
        }
        else {
            console.log(`Erro: O contato ${contact} é inválido.`);
        }
    }
}
const contactValidator = new ContactValidator();
const emailSender = new EmailSender(contactValidator);
emailSender.sendEmail("test@exemplo.com", "teste");
emailSender.sendEmail("invalid-email", "falha na validação.");
