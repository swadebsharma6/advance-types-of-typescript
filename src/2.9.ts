{
  //conditional type

  //   type a1 = null;
  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false; // conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  //   example-2

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  //using keyOf operator T extends keyof Sheikh

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type hasBike = CheckVehicle<"ship">;

  type hasTractor = CheckVehicle<"tractor">;
  type hasPlane = CheckVehicle<"plane">;
}
