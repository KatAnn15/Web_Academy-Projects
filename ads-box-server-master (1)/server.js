const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const multer = require("multer");
const middlewares = jsonServer.defaults({ noCors: true });
const path = require("path");
// For Chrome: Adding CORS
const cors = require("cors");
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../src/assets/images/user-uploads");
  },
  filename: (req, file, cb) => {
    // For Windows: It is good for Unix systems: new Date().toISOString() + "-" + file.originalname
    // For Windows: This solution will be work under Windows
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
// For Chrome: Using CORS
server.use(cors());
server.use(jsonServer.bodyParser);
server.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// Add cusrtom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});
server.post("/messages", (req, res, next) => {
  if (req.file && req.file.path) {
    const [_, ...rest] = req.file.path.split("/");
    req.body.image = rest.join("/");
    req.body.authorImage = rest.join("/");
    // For Windows: Some changes in file path
    req.body.image = req.file.path.replace(/\\/g, "/").replace("public/", "");
  } else {
    req.body.image = "";
  }
  next();
});
server.post("/movies", (req, res, next) => {
  if (req.file && req.file.path) {
    const [_, ...rest] = req.file.path.split("/");
    req.body.preview = rest.join("/");
  }
  next();
});
server.post("/advertisments", (req, res, next) => {
  if (req.file && req.file.path) {
    const [_, ...rest] = req.file.path.split("/");
    req.body.img = rest.join("/");
  }
  next();
});
// Use default router
server.use(router);
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("JSON Server is running:" + port);
});
