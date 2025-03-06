import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: any[] = [];

  obtenerLista(): any[] {
    return this.favoritos;
  }

  añadir(favorito: any): void {
    if (!this.existe(favorito)) {
      this.favoritos.push(favorito);
    }
  }

  borrar(id: string): void {
    this.favoritos = this.favoritos.filter(p => p.id !== id);
  }

  vaciar(): void {
    this.favoritos = [];
  }

  existe(pelicula: any): boolean {
    return this.favoritos.some(p => p.id === pelicula.id);
  }
}
