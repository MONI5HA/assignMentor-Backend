const express = require("express");
const app = express();

const cors = require("cors");
const studentRouter = require("./routes/student.routes");

function loadApp() {
  try {
    // Middlewares
    // Enable CORS for all origin
    app.use(cors());

    // Purpose => Parse Request Body
    app.use(express.json());
    app.use("/", studentRouter);

    app.listen(process.env.PORT || 3002, () =>
      console.log(`Server listening at port 3002...`)
    );
  } catch (err) {
    console.error(err);
    process.exit();
  }
}

loadApp();
