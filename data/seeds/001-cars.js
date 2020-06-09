exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(() => {
      return knex("cars").insert(generateData());
    });
};

function generateData() {
  return [
    {
      VIN: "12345ABC",
      make: "VW",
      model: "New Beetle",
      mileage: 100000,
    },
    {
      VIN: "123HOTSHOT",
      make: "Lamborghini",
      model: "Aventador",
      mileage: 0,
      transmission: "single-clutch",
      title: "clean",
    },
  ];
}
