{
  //   Functional Tuple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resGeneric = createArrayWithTuple<string, number>("Dhaka", 2023);
  console.log(resGeneric);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr.X",
    email: "x@gmail.com",
    devType: "Next level developer",
  });

  const student2 = addCourseToStudent({
    name: "Mr.Y",
    email: "y@gmail.com",
    hasWatch: "Apple watch",
  });

  console.log(student1);

  console.log(student2);
}
