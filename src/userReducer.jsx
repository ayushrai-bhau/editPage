import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./data";


const userSlice = createSlice({
    name : "users",
    initialState : userList,
    reducers:{
        UpdateUser:(state, action)=>{
            const {id,number,heading,name1,name2,detail1,detail2,time,avatar,Logo}= action.payload
            const uu = state.find(user => user.id==id)
            if(uu){
                uu.number=number
                uu.heading=heading
                uu.name1=name1
                uu.name2=name2
                uu.detail1=detail1
                uu.detail2=detail2
                uu.time=time
                uu.avatar=avatar
                uu.Logo=Logo
            }

        }
    }
})

export const {UpdateUser} = userSlice.actions
export default userSlice.reducer