console.clear();

function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
  }

  const productsOfAllIntsExceptAtIndex = [];

  // For each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }
  console.log(productsOfAllIntsExceptAtIndex);
  // For each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}

const getProductsOfAllIntsExceptAtIndex2 = (intArray) => {
  if (intArray.length < 2) {
    throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
  }

  const productsOfAllIntsExceptAtIndex = [];
  intArray.forEach((ele, index) => {
    const result = intArray.filter((_, ind) => ind !== index);
    const total = result.reduce((partial, a) => partial * a, 1);
    productsOfAllIntsExceptAtIndex.push(total);
  });

  return productsOfAllIntsExceptAtIndex;
};

const arr = [1, 7, 3, 4];
console.log(getProductsOfAllIntsExceptAtIndex(arr));
console.log(getProductsOfAllIntsExceptAtIndex2(arr));


