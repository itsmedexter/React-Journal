import axios from "axios";

export default {
    // login user
    loginUser: function(userData2) {
        return axios.put("/api/user/login", userData2);
    },
    // Gets all users
    getUser: function() {
        return axios.get("/api/user");
    },
    // Get one user info, wednesday
    getUserById: function(id) {
        return axios.get("/api/user/:userid")
    },
    // Saves user to database
    saveUser: function(userData) {
        return axios.post("/api/user", userData)
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