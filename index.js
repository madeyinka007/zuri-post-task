const http = require('http');
const fs = require('fs');

const fetchPosts = function () {
    const url = 'http://jsonplaceholder.typicode.com/posts'
    http.get(url, resp => {
        if (resp.statusCode !== 200) {
            console.log(`Message: ${resp.statusMessage} \nCode: ${resp.statusCode}`)
        }

        let posts = ''
        resp.on('data', (rawData) => {
            posts += rawData;
        })
        resp.on('close', ()=>{
            let dir = './result'
         if (!fs.existsSync(dir)) {
             fs.mkdirSync(dir)
         }
         fs.writeFile(dir + '/posts.json', posts, (callback) => {
             if (callback) {
                 console.log(callback)
             }
             console.log('Posts creation successful')
         })
          //check if result folder exists//if not create
        })
    })
}
fetchPosts()





