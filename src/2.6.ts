{
  // Constraints in typescript

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 1,
    name: "Mr.X",
    email: "x@gmail.com",
    devType: "Next level developer",
  });

  const student2 = addCourseToStudent({
    id: 2,
    name: "Mr.Y",
    email: "y@gmail.com",
    hasWatch: "Apple watch",
  });

  const student3 = addCourseToStudent({
    id: 3,
    name: "swadeb",
    email: "f@gmail.com",
    emani: "Emni",
  });

  console.log(student1);

  console.log(student2);
  console.log(student3);
}
