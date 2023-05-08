import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d1537723-f777-4194-b396-b30cbe7650e2"
    }
    
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                    return response.data
                })
        },
        

    unfollow(userId){
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    },

    follow(userId){
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    },

    getProfile(userId) {
        console.warn("Old method")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status){
        return instance.put(`profile/status`,{
            status: status
        })

    }
}

export const authAPI = {
 meAuth(){
    return instance.get(`auth/me`)
 },

 login(email, password, rememberme = false){
    return instance.post(`auth/login`, {
        email, password, rememberme
    })
 },

 logout(){
    return instance.delete(`auth/login`)
 },
}

