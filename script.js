// async function getPosts() {
//   let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   let parsedJSON = await response.json()
//   return parsedJSON
// }

// getPosts()
//   .then(function(posts) {
//     console.log('posts: ', posts)
//   })

fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(res => res.json())
  .then(data => console.log('data', data))
