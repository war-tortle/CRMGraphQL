const { ApolloServer } = require('apollo-server')
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
const conectarDB = require('./config/db');

// conectar a la base de datos
conectarDB();

// servidor
const server = new ApolloServer({
	typeDefs,
	resolvers
});

// arrancar el servidor
server.listen().then( ({url}) => {
	console.log(`Servidor liste en la URL ${url}`)
})