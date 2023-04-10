import style from './Users.module.css'
import React from 'react';
import userPhoto from '../assets/images/users.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={style.profile}>
            {pages.map(numPage => <span onClick={(e) => props.onPageChange(numPage)} className={props.currentPage === numPage && style.currentPage}>{numPage}</span>)}
            {props.users.map(user => (
                <div key={user.id}>
                    <NavLink to={'/profile' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                    </NavLink>
                    {user.name}
                    {user.userCountry}
                    {user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${user.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "c473d61a-65d0-4c1b-a02b-b7d670b60d1b"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                })


                        }}>Unfollow</button>

                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "c473d61a-65d0-4c1b-a02b-b7d670b60d1b"
                                }
                            })

                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                })

                        }}>Follow</button>

                    }
                </div>
            ))}
        </div>
    )
}

export default Users;