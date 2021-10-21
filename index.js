const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capitalizer(title){
  title = title.padStart(title.length + 1);
  for (const match of title.matchAll(/\b\w/g)){
    title = title.replace(' ' + title[match.index], ' ' + title[match.index].toUpperCase());
  }
  return title.trim();
}

const titleCased = function() {
  return tutorials.map(capitalizer);
}
