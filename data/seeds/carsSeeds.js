exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "BQE4TTBFSFC0N8WXQ",
          make: "Ford",
          model: "Ranger",
          mileage: "892378"
        },
        {
          vin: "XDH21CBGFTVSSZZRF",
          make: "Tesla",
          model: "Model X",
          mileage: "123654"
        },
        {
          vin: "1TRP6PZOHPUSMHKW3",
          make: "Nissan",
          model: "Bluebird",
          mileage: "67823"
        },
        {
          vin: "PLJ8Y3K9LO5D73G31",
          make: "Toyota",
          model: "Corolla",
          mileage: "123567"
        },
        {
          vin: "1MFKLQNBLN7MLPXJ2",
          make: "VW",
          model: "Polo",
          mileage: "567234"
        }
      ]);
    });
};
