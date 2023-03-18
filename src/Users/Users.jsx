import style from './Users.module.css'
import React from 'react';
import axios from 'axios';
import userPhoto from '../assets/images/users.png'


const Users = (props) => {

    let usersElement = props.users.map(user =>  (
        <div key={user.id}>
            <img src={user.photos.small != null ? user.photos.small: userPhoto} alt="" />
            {user.name}
            {user.userCountry}
            {user.followed 
            ? <button onClick={() => {props.follow(user.id)}}>Follow</button> 
            : <button  onClick={() => {props.unfollow(user.id)}}>Unfollow</button> 
            }
        </div>
    ))


    let getUsers = () => {

        if(props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
    
        }
    }



    return (
        <div className={style.profile}>
            <button onClick={getUsers}>GetUsers</button>
           {usersElement}
        </div>
    )
}

export default Users;