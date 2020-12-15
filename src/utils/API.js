import axios from "axios";
const BASEURL = "https://randomuser.me/api/?inc=id,name,email,dob,picture&results=20&nat=us";

// eslint-disable-next-line
export default {
    search: function (query) {
        return axios.get(BASEURL);
    }
};
