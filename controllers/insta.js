const Dummy = require("../seeds/dummy");
const fetch = require("node-fetch");
module.exports =  {
    get_feed: async function (location){
        try{
            let link=`https://instagram47.p.rapidapi.com/hashtag_post?hashtag=${location.toLowerCase()}`;
            console.log("Insta query link:",link);
        const response = await fetch(link, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.INSTA_KEY,
            "x-rapidapi-host": "instagram47.p.rapidapi.com"
        }
        })
        const jsonResponse = await response.json()
        console.log("Insta response:",jsonResponse);
        let count = jsonResponse.body.edge_hashtag_to_media.edges.length
        let posts = []
        for(var i=0;i<count;i++){
            let firstPost = jsonResponse.body.edge_hashtag_to_media.edges[i].node.display_url
            posts.push(firstPost)
        }
        let data = {posts: posts}
        
        return data
    }
    catch(e){
        console.error("Something wrong with instagram api");
        return {posts:["https://leviticuslifestyle.com/sites/default/files/imagecache/mainSlider/Luxury-Travel-3_1.jpg",
        "http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/travel-advice/group-travel.jpg"
    ]};
    }
    }
};