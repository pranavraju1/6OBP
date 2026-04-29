import axios from "axios";

async function fetchData(){
    try{
        const res = await axios("https://jsonplaceholder.typicode.com/posts/1");
        console.log(res.data);
    }catch(err){
        console.log(err)
    }
}
fetchData();