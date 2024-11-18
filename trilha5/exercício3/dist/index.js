abstract class FavoriteManager {
  protected favorites: string[] = [];

  abstract addFavorite(item: string): void;

  getFavorites(): string[] {
    return this.favorites;
  }
}

class MoviesFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
      this.favorites.sort();
      console.log(`${item} adicionado à lista de filmes favoritos.`);
    } else {
      console.log(`${item} já está na lista de filmes favoritos.`);
    }
  }
}

class BooksFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    this.favorites.unshift(item);
    console.log(`${item} adicionado à lista de livros favoritos.`);
  }
}

const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("The Call of Cthulhu - H.P. Lovecraft");
moviesManager.addFavorite("Senhor dos aneis");
moviesManager.addFavorite("The Call of Cthulhu - H.P. Lovecraft");
console.log("Lista de filmes favoritos:", moviesManager.getFavorites());

const booksManager = new BooksFavoriteManager();
booksManager.addFavorite("O Silencio Dos Inocentes");
booksManager.addFavorite("Matrix");
booksManager.addFavorite("O bom, O mal e o feio");
console.log("Lista de livros favoritos:", booksManager.getFavorites());