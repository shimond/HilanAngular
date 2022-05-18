function sum(arr) {
  let total = 0;
  for (let index = 0; index < arr.legth; index++) {
    total += arr[index];
  }
  if (total > 20) {
    let  f = total % 2;
  }
  console.log(f);
  return total;
}


sum([123123, 123123]);
sum("asdasd");
sum(true);
sum({ name: 'david' });
