import modules from "./modules";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import deepmerge from "deepmerge";
import { addResolversToSchema } from "@graphql-tools/schema";
let resolvers = {};

modules.forEach((module: any) => {
  resolvers = deepmerge(resolvers, module);
  console.log(resolvers);
});

const schema = loadSchemaSync("src/**/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

export default schemaWithResolvers;
