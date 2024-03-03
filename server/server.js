import { app } from "./app.js";
import { mongoDB } from "./database/db.js";

const PORT = process.env.PORT || 3000;

async function Server() {
  return await mongoDB()
    .then(() => {
      app.listen(PORT, function () {
        console.log(`Server listening on port http://localhost:${PORT}`);
      });
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

Server();
