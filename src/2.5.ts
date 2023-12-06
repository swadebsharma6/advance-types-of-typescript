{
  // Function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const result1 = createArray("Bangladesh");
  console.log(result1);

  //   Functional generics

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resGeneric = createArrayWithGeneric<string>("Dhaka");
  console.log(resGeneric);

  type User = {
    id: number;
    name: string;
    email: string;
  };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Swadeb",
    email: "S@gmail.com",
  });

  console.log(resGenericObj);
}
