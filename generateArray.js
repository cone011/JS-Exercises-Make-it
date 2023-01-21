function generateArray(long) {
  return Array.from(
    { length: long },
    (_, i) =>
      function () {
        return i;
      }
  );
}

let arr = generateArray(5);

arr[0](); //return 0
arr[1](); //return 1
arr[2](); //return 2
