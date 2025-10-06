class Producto {
  constructor(id, nombre, cantidad, precio) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }
  info() {
    return `Id = ${this.id}| Nombre = ${this.nombre}| Cantidad = ${this.cantidad}| Precio = ${this.precio} \n`;
  }
  infoHtml() {
    return `<h5>Id = ${this.id}| Nombre = ${this.nombre}| Cantidad = ${this.cantidad}| Precio = ${this.precio} \n</h5>`;
  }
}