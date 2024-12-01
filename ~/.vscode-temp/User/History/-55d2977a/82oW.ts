abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private favorites: Set<string> = new Set();

    addFavorite(item: string): void {
        this.favorites.add(item);
    }

    getFavorites(): string[] {
        return Array.from(this.favorites).sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(item: string): void {
        this.favorites.unshift(item);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}
