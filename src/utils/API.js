import axios from "axios";
const BASEURL = "https://randomuser.me/api/?inc=name,email,dob,picture&results=20";

async function search() {
    try {
        return await axios.get(BASEURL)
    } catch (error) {
        console.log(error)
    }
}

export default search;
