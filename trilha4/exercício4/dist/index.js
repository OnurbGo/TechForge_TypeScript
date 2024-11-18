"use strict";
class Biblioteca {
    constructor(livros) {
        this.livros = livros;
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter(livros => livros.disponivel == true);
    }
}
function imprimir(livros) {
    livros.forEach((livros) => {
        console.log(`Título do livro: ${livros.titulo}. Autor do Livro: ${livros.autor}. Disponivel: ${livros.disponivel}`);
    });
}
const livros = [
    { titulo: "Sherlock Holmes: Estudo em vermelho", autor: "Arthur Conan Doyle", disponivel: true },
    { titulo: "Onde Morre o Amor", autor: "Douglas Rodrigues", disponivel: false },
    { titulo: "Vida de Programador", autor: "Andre Noel", disponivel: true },
];
const biblioteca = new Biblioteca(livros);
const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
imprimir(livrosDisponiveis);
