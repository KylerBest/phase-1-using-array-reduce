const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (previousVal, currentVal) => previousVal + currentVal;
const totalBatteries = batteryBatches.reduce(reducer);
