function generateHashtag (str) {
    if (str.trim() === '') return false;
    // return str.charAt(0).toUpperCase() + str.slice(1)
    // return  `#${str.charAt(0).toUpperCase() + str.slice(1)}`

        let result =
            str.split(' ')
            // .unshift('#')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');


        // return '#'+result;
    return result.length > 140 ? false : '#'+result;
}

console.log(3)
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Codewars is nice"));