export function rubricPerfect(score) {
  score =
    score == 11
      ? "Perfect"
      : score > 8
      ? "Excellent"
      : score >= 5
      ? "Pass"
      : "Fail";
  return score;
}
