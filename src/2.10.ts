{
  // Map types

  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];
  console.log(arrOfNumbers);

  //We will convert the arrayOfString using map
  const arrOfString = arrOfNumbers.map((number) => number.toString());
  console.log(arrOfString);

  //Map type

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; //lookup type

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };
  //   using keyof  for looping

  type AreaString<T> = {
    [idx in keyof T]: T[idx];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
