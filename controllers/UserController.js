module.exports = (fastify) => {
  function index(request, reply) {
    const sql = "SELECT * FROM user";

    fastify.mysql.query(sql, (err, result) => {
      reply.send(err || result);
    });
  }

  function show(request, reply) {
    const { id } = request.params;
    const sql = `SELECT * FROM user WHERE id = ${id}`;

    fastify.mysql.query(sql, (err, result) => {
      reply.send(err || result);
    });
  }

  function create(request, reply) {
    const data = request.body;
    const sql = `
    INSERT INTO user (name, age, address)
    VALUES ('${data.name}', '${data.age}', '${data.address}')
    `;

    fastify.mysql.query(sql, (err, result) => {
      reply.send(err || result);
    });
  }

  function update(request, reply) {
    const { id } = request.params;
    const data = request.body;
    const sql = `
    UPDATE user
    SET name = '${data.name}', age = '${data.age}', address = '${data.address}'
    WHERE id = ${id};
    `;

    fastify.mysql.query(sql, (err, result) => {
      reply.send(err || result);
    });
  }

  function remove(request, reply) {
    const { id } = request.params;
    const sql = `DELETE FROM user WHERE id = ${id};`;

    fastify.mysql.query(sql, (err, result) => {
      reply.send(err || result);
    });
  }

  return { index, show, create, update, remove };
};
