import { people, getById } from "./db";

const gwuiin = {
  name: "Gwuiin",
  age: 23,
  gender: "male"
};

const resolvers = {
  Query: {
    people: () => people
  }
};

export default resolvers;
