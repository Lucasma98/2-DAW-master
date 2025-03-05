import { Injectable } from '@angular/core';
import { ConexionRemotaService } from './conexion-remota.service';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosArticulosService {

  articulos: any[] = [];
  categorias: any[] = [];
  fabricantes: any[] = [];

  constructor(private data: ConexionRemotaService) {
    this.initArticulos();
    this.initCategorias();
    this.initFabricantes();
  }

  initArticulos() {
    this.data.getArticulosData().subscribe(
      json => {
        let articulos: any = json;
        this.articulos = articulos;
      }
    );
  }

  initCategorias() {
    this.data.getCategoriaData().subscribe(
      json => {
        let categorias: any = json;
        this.categorias = categorias;
      }
    );
  }

  initFabricantes() {
    this.data.getFabricantesData().subscribe(
      json => {
        let fabricantes: any = json;
        this.fabricantes = fabricantes;
      }
    );
  }

  getArticulos() {
    return this.articulos;
  }

  getCategorias() {
    return this.categorias;
  }

  getFabricantes() {
    return this.fabricantes;
  }

  getArticuloById(id: number) {
    return this.articulos.find(a => a.id == id);
  }

  getArticuloByCat(cat: number) {
    return this.articulos.find(c => c.id == cat);
  }

  getArticuloByFabricante(fab: number) {
    return this.articulos.find(f => f.id == fab);
  }

  getArticuloByNombre(patron: string) {
    return this.articulos.filter(n => n.nombre.toLowerCase().includes(patron.toLowerCase()));
  }

  filtrados(patron: string, selCat: string, selFab: string) {
    return this.articulos.filter(article => {
      const coincideNombre = !patron || article.nombre.toLowerCase().includes(patron.toLowerCase());
      const coincideCategoria = selCat === "0" || article.cat == selCat;
      const coincideFabricante = selFab === "0" || article.fab == selFab;

      return (selCat !== "0" || selFab !== "0" || patron) && coincideNombre && coincideCategoria && coincideFabricante;
    });
  }

}
