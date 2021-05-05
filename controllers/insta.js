const Dummy = require("../seeds/dummy");
const fetch = require("node-fetch");
module.exports =  {
    get_feed: async function (location){
        const response = await fetch("https://instagram47.p.rapidapi.com/hashtag_post?hashtag=maldives", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.INSTA_KEY,
            "x-rapidapi-host": "instagram47.p.rapidapi.com"
        }
        })
        const jsonResponse = await response.json()
        let count = jsonResponse.body.edge_hashtag_to_media.edges.length
        let posts = []
        for(var i=0;i<count;i++){
            let firstPost = jsonResponse.body.edge_hashtag_to_media.edges[i].node.display_url
            posts.push(firstPost)
        }
        let data = {posts: posts}
        return data
    }
};