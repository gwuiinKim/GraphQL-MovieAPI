const gwuiin = {
  name: "Gwuiin",
  age: 23,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => gwuiin
  }
};

export default resolvers;
