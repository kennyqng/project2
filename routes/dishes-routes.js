module.exports = function(app) {
  const dishes = [
    {
      dishName: "Cheeseburger",
      ingredients: ["ground meat", "buns"],
      instructions: "grill meat, throw it on some buns. yum."
    },
    {
      dishName: "hotdog",
      ingredients: ["dogs", "buns"],
      instructions: "grill dog, throw it on some buns. also yum."
    }
  ];

  app.get("/instructions", (req, res) => {
    res.render("instructions", dishes[0]);
  });
};