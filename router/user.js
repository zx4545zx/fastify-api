const UserController = require("../controllers/UserController");

module.exports = function (fastify, opts, done) {
  fastify.get("/user", UserController(fastify).index);
  fastify.get("/user/:id", UserController(fastify).show);
  fastify.post("/user", UserController(fastify).create);
  fastify.patch("/user/:id", UserController(fastify).update);
  fastify.delete("/user/:id", UserController(fastify).remove);
  done();
};
