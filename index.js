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

const titleCased = () => {
  const titles = tutorials.map((title) => {
    let singelTitle = title
    let wordsarr =  singelTitle.split(' ')
     wordsarr = wordsarr.map((word => {
      let capitalizeWord =  word.charAt(0).toUpperCase() + word.substring(1)
      return capitalizeWord
    }))

    wordsarr = wordsarr.join(' ')

    return wordsarr
  }) 

return titles
}

// const capitalized = titles.map(title => {
//   return title.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
// })


console.log(titleCased());
