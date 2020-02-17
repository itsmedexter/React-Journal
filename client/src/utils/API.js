import axios from "axios";

export default {
    // Gets all users
    getUser: function() {
        return axios.get("/api/user");
    },
    // Saves user to database
    SaveUser: function(userData) {
        return axios.get("/api/user", userData)
    },
    // Gets all memory
    getMemory: function() {
        return axios.get("/api/memory");
    },
    // // Gets the memroy with given tag
    // getMemory: function(tag) {
    //     return axios.get("/api/memory/" + tag);
    // },
    // Saves memory to the database
    saveMemory: function(memoryData) {
        return axios.post("/api/memory", memoryData);
    }
};