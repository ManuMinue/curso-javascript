class Student {
  school = "Jules Ferry";
  #dni;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setNotes(notes) {
    this.notes = notes;
  }

  set direccion(d) {
    this._direccion = d;
  }

  set dni(value) {
    this.#dni = value;
  }

  get dni() {
    return this.#dni;
  }

  canPass() {
    return average(this.notes) >= 10;
  }
}

class SubStudent extends Student {}

const a1 = new SubStudent("John", "Doe");
const a2 = new Student("Jane", "Doe");
a2.setNotes([10, 10, 9]);
a1.direccion = "Madrid";
a1._direccion = "Barcelona"; // ❌
// a1.#dni = "1234556";
a1.dni = "1234556";
console.log(a1.dni);
