class Inventario {
  constructor() {
    this.inventario = [];
  }
  agregar(producto) {
    this.inventario.push(producto);
  }
  buscar(id) {
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id == id) return this.inventario[i];
    }
    return null;
  }
  eliminar(id) {
    let pos = 0;
    while (pos < this.inventario.length && this.inventario[pos].id !== id) {
      pos++;
    }
    let temp = this.inventario[pos];

    if (pos === this.inventario.length) {
      return null;
    }

    let i = pos;
    for (i; i < this.inventario.length - 1; i++) {
      this.inventario[i] = this.inventario[i + 1];
    }
    this.inventario.pop();
    return temp;
  }
  insertar(producto, posicion) {
    this.inventario.push(this.inventario[this.inventario.length - 1]);

    for (let i = this.inventario.length - 2; i >= posicion; i--) {
      this.inventario[i] = this.inventario[i - 1];
    }

    this.inventario[posicion] = producto;
  }
  listar() {
    let lista = "";
    for (let i = 0; i < this.inventario.length; i++) {
      lista += this.inventario[i].info();
    }
    return lista;
  }
  listarHtml() {
    let lista = "";
    for (let i = 0; i < this.inventario.length; i++) {
      lista += this.inventario[i].infoHtml();
    }
    return lista;
  }
  extraerPrimero() {
    let primero = this.inventario[0];
    for (let i = 0; i < this.inventario.length - 1; i++) {
      this.inventario[i] = this.inventario[i + 1];
    }
    this.inventario.pop();
    return primero;
  }
  agregarInicio(producto) {
    this.inventario.push(this.inventario[this.inventario.length - 1]);
    for (let i = this.inventario.length - 2; i >= 0; i--) {
      this.inventario[i] = this.inventario[i - 1];
    }
    this.inventario[0] = producto;
  }
}
