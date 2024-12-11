export function rubricExcellent(score) {
  score = score > 8 ? "Excellent" : score >= 5 ? "Pass" : "Fail";
  return score;
}
