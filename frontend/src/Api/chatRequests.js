import axios from "axios";



const API=axios.create({baseURL:"https://social-media-1-ff39.onrender.com"});

export const userChats=(userId,token)=>API.get(`/chat/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

