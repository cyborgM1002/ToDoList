import { app } from "./app.js";
import { mongoDB } from "./database/db.js";
mongoDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server is running on Port http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  );
});
