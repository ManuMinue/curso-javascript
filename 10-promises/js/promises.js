const pA = new Promise((resolve, reject) => {
  resolve("Valor de A");
  //   reject("Error en A");
});

pA.then()
  .then()
  .then((value) => {
    console.log(value);
  })
  .then()
  .then((value) => {
    console.log(value);
    return { name: "Alex" };
  })
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
