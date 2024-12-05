const express = require("express");
const sequelize = require("./config/database");
const employeeRoutes = require("./routes/employeeRoutes");

// Initialize app
const app = express();
app.use(express.json());
app.use("/employee", employeeRoutes);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  console.log("Database synced successfully.");
  app.listen(3000, () => console.log("Server running at http://localhost:3000"));
});
