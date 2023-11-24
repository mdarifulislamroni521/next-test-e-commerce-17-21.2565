const express = require("express");
const next = require("next");
const { parse } = require("url");

const DEV = process.env.ENVIRONMENT !== "production";
console.log("process.env.ENVIRONMENT", process.env.ENVIRONMENT);
const PORT = process.env.ENVIRONMENT || 9001;

console.log("PORT", PORT);
const app = next({ dir: ".", dev: DEV });
const handle = app.getRequestHandler();

// const getRoutes = require("./routes");

// const routes = getRoutes();
app.prepare().then(() => {
  const server = express();
  server.get("/api", (req, res) => {
    res.status(200).json({ status: "200 OK" });
  });
  server.get("*", (req, res) => {
    // const parsedUrl = parse(req.url, true);
    // const { pathname, query } = parsedUrl;
    // const route = routes[pathname];
    // if (route) {
    //   return app.render(req, res, route.page, route.query);
    // }
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> READY FOR LIFOTFF http://localhost:${PORT}`);
  });
});
