export function rubricPassFail(score) {
  score =
    score === 11
      ? "Perfect"
      : score > 8
      ? "Excellent"
      : score >= 5
      ? "Pass"
      : "Fail";
  return score;
}

console.log(rubricPassFail(10));
