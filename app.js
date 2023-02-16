import axios from "axios";
const getData = async (user_id) => {
    try {
        
    
    const {data: users} = await axios (
        `https://jsonplaceholder.typicode.com/users/users/${user_id}`
    );
    const {data: post} = await axios (
        `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );
        console.log(`users ${users}`);
        console.log(`posts ${posts}`);
    } catch (err) {
        console.log(err);
    }

    }
    
 
;
export default getData;