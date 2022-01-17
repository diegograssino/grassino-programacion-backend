console.log('Entrega de desafio clase 2 - Principios básicos de Javascript\n---\n');

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getName() {
    return `${this.nombre} ${this.apellido}`;
  }
  getBooks() {
    return this.libros.map(book => book.nombre);
  }
  countPets() {
    return this.mascotas.length;
  }
  addPet(nombre) {
    this.mascotas.push(nombre);
  }
  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }
}

const ryanRay = new Usuario(
  'Ryan',
  'Ray',
  [
    { nombre: 'Duna', autor: 'Frank Herbert' },
    { nombre: 'El señor de los anillos', autor: 'J.R.R. Tolkien' },
  ],
  ['Zamba', 'Logan']
);

console.log(`Cantidad de mascotas: ${ryanRay.countPets()}\n`);
console.log(`Libros: ${ryanRay.getBooks()}\n`);
ryanRay.addPet('Berta');
console.log(`Cantidad de mascotas despues de agregar a Berta: ${ryanRay.countPets()}\n`);
ryanRay.addBook('La Torre Oscura', 'Stephen King');
console.log(`Libros despues de agregar la Torre Oscura: ${ryanRay.getBooks()}\n`);
