console.clear();

const canCompleteCircuit = (gas, cost) => {
  let start = 0;
  let total = 0;
  let tank = 0;

  for (let i = 0; i < gas.length; i++) {
    tank = tank + gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      total = total + tank;
      tank = 0;
    }
  }
  if (total + tank < 0) {
    return -1;
  } else {
    return start;
  }
};

const gas = [1, 2];
const cost = [2, 1];

console.log(canCompleteCircuit(gas, cost));
