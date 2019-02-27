module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/capstone'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/capstone'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
