import style from './Users.module.css'
import React from 'react';
import userPhoto from '../assets/images/users.png'
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1 ; i<=pagesCount; i++){
        pages.push(i)
    }
    return (
        <div className={style.profile}>
            {pages.map(numPage => <span onClick={(e)=> props.onPageChange(numPage)} className={props.currentPage === numPage && style.currentPage}>{numPage}</span>)}
           { props.users.map(user =>  (
        <div key={user.id}>
            <NavLink to={'/profile' + user.id}>
            <img src={user.photos.small != null ? user.photos.small: userPhoto} alt="" />
            </NavLink>
            {user.name} 
            {user.userCountry}
            {user.followed 
            ? <button onClick={() => {props.follow(user.id)}}>Follow</button> 
            : <button  onClick={() => {props.unfollow(user.id)}}>Unfollow</button> 
            }
        </div>
    ))}
        </div>
    )
}

export default Users;