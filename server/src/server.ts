import express from "express";
import { ApolloServer } from "apollo-server-express";
import schemaWithResolvers from "./schema";
import connectDB from "./config/db";
const app = express();
connectDB();
const server = new ApolloServer({ schema: schemaWithResolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;

  app.listen(PORT, () => {
    console.log(
      `Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startServer();
