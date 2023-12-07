{
  // Generic Constrain with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually
  const person: Owner = "bike";
  //   console.log("person:", person);

  type Owner2 = keyof Vehicle; // keyof is important
  const person2: Owner2 = "car";
  //   console.log("person2:", person2);

  const user = {
    name: "swadeb",
    age: 46,
    address: "Dhk",
  };
  const name = user.name;
  const address = user.address;
  const age = user;
  //   console.log(name, address, age);

  // ------------------------------Get a value by using a function---------------

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user2 = {
    name: "swadeb",
    age: 46,
    address: "Dhk",
  };

  const result = getPropertyValue(user2, "name");
  console.log(result);
}
