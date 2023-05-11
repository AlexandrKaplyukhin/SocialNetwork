import style from './Users.module.css'
import React from 'react';
import userPhoto from '../assets/images/users.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { usersAPI } from '../api/api';
import { follow, unfollow } from '../redux/users-reducer';

const UsersWrapper = styled.div`
    background-color: rgb(223, 223, 223);
    display: grid;
    grid-template-rows: 10fr minmax(5px 3vh);
    grid-area: c;
    height: 100%;
    overflow:hidden;
    padding-bottom: 7vh;
    @media (max-width:450px) {
        margin-bottom: 7vh;
    }
`
const InfoUsers = styled.div`
    display:grid;
    justify-content: center;
    align-items:center;
    grid-template-columns: repeat(auto-fit, minmax(210px, 15vw));
    padding:1em;
    grid-gap:1em;
    @media (max-width:450px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 5vw));

    }
`
const UserCard = styled.div`
    display:grid;
    grid-template-rows:7fr 1fr 1fr;
    border-radius:1em;
    background: rgb(120,120,120);
    background: linear-gradient(153deg, rgba(120,120,120,1) 0%, rgba(156,156,156,1) 46%, rgba(172,172,172,1) 100%);
    min-width: 200px;
    overflow:hidden;
    padding:1em 0.5em 1em 0.5em;
    justify-content:center;
    @media (max-width:450px) {
        display: grid;
        border-radius:0.5em;
        min-width: 50px;
        padding:1em 0.5em 1em 0.5em;
        grid-template-rows:4fr 1fr 1fr;

    }
`
const PhotoCard = styled.img`
    width:90%;
    justify-self:center;
    border-radius:0.5em;
`
const PagesCount = styled.div`
    width:15vw;
    min-width: 300px;
    overflow:hidden;
    display:grid;
    grid-column-gap:1em;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-self: center;
    justify-self: center;
    font-weight: bold;
    font-size:x-large;
`
const NumPage = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 0.5em;
    width:1.5em;
    height:1.5em;
    cursor: pointer;
    transition:0.5s;
    &:hover{
        background-color:grey;
    }
`
const Button = styled.button`
    width:100%;
    height:100%;
    font-weight:bold;
    border-radius:0.5em;
    border:none;
    cursor:poiner;
    transition:0.5s;
    &:hover{
        background-color:#1a1a54;
        color:white;
    }
`
const NameCard = styled.div`
    display:grid;
    justify-content: center;
`
const LinkToProfile = styled(NavLink)`
    width:100%;
    display:grid;
`
const Users = (props) => {
    //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 5; i++) {
        pages.push(i)
    }
    let Pages = pages.map(numPage => <NumPage onClick={(e) => props.onPageChange(numPage)} className={props.currentPage === numPage && style.currentPage}>{numPage}</NumPage>)

    return (
        <UsersWrapper>
            <InfoUsers>
                {props.users.map(user => (
                    
                    <UserCard key={user.id}>
                        <LinkToProfile to={'/profile' + user.id}>
                            <PhotoCard src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                        </LinkToProfile>
                        <NameCard>
                            {user.name}
                        </NameCard>
                        <div>
                            {user.followed
                                ? <Button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id)

                                }}>Unfollow</Button>

                                : <Button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)

                                }}>Follow</Button>
                            }
                        </div>

                    </UserCard>
                ))}
            </InfoUsers>
            <PagesCount>
                {Pages}            
            </PagesCount>
        </UsersWrapper>
    )
}

export default Users;