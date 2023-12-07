{
  // Utility type
  // ------------Pick--------------Something pick up
  //   example 01
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;
  type NameAgeEmail = Pick<Person, "name" | "age" | "email">;

  // ------------Omit--------------Something get up
  //   example 02
  type ContactInfo = Omit<Person, "name" | "age">;

  // ------------Required-------------Something get up
  //   example 02
  type PersonRequired = Required<Person>;

  // ------------Partial------------Something get up
  //   example 02
  type PersonPartial = Partial<Person>;

  // ------------Read Only------------Something get up
  //   read only
  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Swadeb",
    age: 27,
    email: "s@gmail.com",
    contactNo: "015555555555555",
  };

  //   person1.contactNo = "017777777777"; // you can not change it

  // ------------Record------------Something get up
  //   Record
  //   type MyObj1 = {
  //     a: string;
  //     b: string;
  //   };
  type MyObj2 = Record<string, string>;

  const obj1: MyObj2 = {
    a: "aaaaaaaaaa",
    b: "bbbbbbbbbb",
    c: "ccccccccccc",
    d: "dddddddd",
  };
}
