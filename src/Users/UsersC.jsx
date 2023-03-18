import style from './Users.module.css'
import React from 'react';
import axios from 'axios';
import userPhoto from '../assets/images/users.png'

class Users extends React.Component{
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    

    render() {
        return <div className={style.profile}>
           { this.props.users.map(user =>  (
        <div key={user.id}>
            <img src={user.photos.small != null ? user.photos.small: userPhoto} alt="" />
            {user.name}
            {user.userCountry}
            {user.followed 
            ? <button onClick={() => {this.props.follow(user.id)}}>Follow</button> 
            : <button  onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button> 
            }
        </div>
    ))}
        </div>
    }
}

export default Users;