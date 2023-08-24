import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import './userPage.css'

export function UserPage(){
    const [user,setUser] = useState({})
    const [posts,setPosts] = useState([])
    const{id} = useParams()
    const [searchParams,setSearchParams] = useSearchParams()
    const post = searchParams.get('tab')
    useEffect(()=>{
        axios.get(`https://dummyjson.com/users/${id}`)
            .then(resp => setUser(resp.data))
    },[])

    useEffect(()=>{
        const url = post && `https://dummyjson.com/users/${id}/${post}`
        axios.get(url)
            .then(resp => setPosts(resp.data.posts))
    },[post])
    return (
        <>
        <div className='user-wrapper'>
            <img src={user.image} alt=""/>
            <p>User: {user.id}</p>
            <p>FirstName: {user.firstName}</p>
            <p>LastName: {user.lastName}</p>
            <p>MaidenName: {user.maidenName}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Phone: {user.phone}</p>
            <p>UserName: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>BirthDate: {user.birthDate}</p>
            <p>eyeColor: {user.eyeColor}</p>
            <p>Domain: {user.domain}</p>
            <p>macAddress: {user.macAddress}</p>
            <p>Ip: {user.ip}</p>
            <p>University: {user.university}</p>
            <p>UserAgent: {user.userAgent}</p>
        </div>
            <div className='button-wrapper'>
                <button onClick={()=>setSearchParams({tab:'posts'})}>Посты</button>
                <button onClick={() =>setSearchParams({tab: 'todos'})}>Список дел</button>
            </div>

            {posts.map(post => (
                <div key={post.id} className='post-wrapper'>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    )
}