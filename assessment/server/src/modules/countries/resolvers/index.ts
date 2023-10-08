import getCountriesDetails from "./query/getCountriesDetails";

const resolvers = {
  Query: {
    getCountriesDetails,
  },
};

export default resolvers;
