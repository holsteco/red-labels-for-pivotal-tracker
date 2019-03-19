var isLabelEligible = function isLabelEligible(labelText) {
  return !!labelText.match(/\b(?:stuff|blocked|needs|theme)\b/);
};
