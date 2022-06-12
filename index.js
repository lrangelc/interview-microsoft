console.clear();
console.log(`StoneWall`);

const H = [8, 8, 5, 7, 9, 8, 7, 4, 8];

function solution(H) {
  const stack = [];
  let head = -1;
  let block = 0;
  let i = 0;
  while (i < H.length) {
    const h = H[i];
    if (head < 0) {
      ++head;
      stack[head] = h; //stack push
      ++i;
    } else if (stack[head] == h) {
      ++i;
    } else if (stack[head] < h) {
      ++head;
      stack[head] = h; //stack push
      ++i;
    } else {
      //stack[head] > h
      --head; //stack pop
      ++block;
    }
  }
  return block + head + 1;
}

console.log(solution(H));
