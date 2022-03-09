const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((word) => {
    let k = word.split(" ");
    let s = "";
    k.forEach((str) => {
      s = s + str[0].toUpperCase() + str.slice(1, str.length) + " ";
    });
    return s.trim();
  });
};

console.log(titleCased());
