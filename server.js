const fastify = require("fastify")({ logger: true });

// enable cors
fastify.register(require("@fastify/cors"));

// driver mysql
fastify.register(require("@fastify/mysql"), {
  connectionString: "mysql://root@localhost/testdb",
});

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.register(require("./router/user"));

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 4000 }, (err, address) => {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
      fastify.log.info(`server listening on ${address}`);
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
