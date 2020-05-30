let sentiment = require("sentiment");

let r1 = sentiment("I hate you, and your stupid little dog too.");

console.log(r1.score); // -5
if (r1.score < 0) {
  console.log("The sentiment is unhappy");
}

let r2 = sentiment(
  "everything about you is just awesome, and I love your cute little dog also!"
);

console.log(r2.score); // 9

if (r2.score > 0) {
  console.log("Happy");
}
