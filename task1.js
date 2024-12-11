export function costCalculator(amount) {
  amount = Number(amount);
  if (typeof amount !== "number" || amount < 0) {
    console.log("Invalid input");
  }

  const fee = 3;
  const interestRate = 0.01;
  const totalToPay = amount * interestRate + amount + fee;
  
  return totalToPay.toFixed(2);
}