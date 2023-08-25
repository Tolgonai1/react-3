import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import './userPage.css'

export function UserPage(){
    const [user,setUser] = useState({})
    const [posts,setPosts] = useState([])
    const [todos,setTodos] =useState([])
    const{id} = useParams()
    const [tabParams,setTabParams] = useSearchParams()
    const post = tabParams.get('tab')
    useEffect(()=>{
        axios.get(`https://dummyjson.com/users/${id}`)
            .then(resp => setUser(resp.data))
    },[])

    useEffect(()=> {
        const url1 = post && `https://dummyjson.com/users/${id}/${post}`
        if(post === 'posts'){
            axios.get(url1)
            .then(resp => setPosts(resp.data.posts))
    } else if(post === 'todos'){
            const url2 = post && `https://dummyjson.com/users/${id}/${post}`
            axios.get(url2)
                .then(resp => setTodos(resp.data.todos))
                .catch(error => console.error('Error:', error))
        }
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
                <button onClick={()=>setTabParams({tab:'posts'})}>Посты</button>
                <button onClick={() =>setTabParams({tab: 'todos'})}>Список дел</button>
            </div>
            <div className="content-wrapper">
                {post === 'posts' && (
                    <div className='posts-wrapper'>
                        {posts.map(post => (
                            <div key={post.id} className='post-wrapper'>
                                <h4>{post.title}</h4>
                                 <p>{post.body}</p>
                            </div>
                         ))}
                    </div>
                )}

                {post === "todos" && (
                    <div>
                {todos.map(todo => (
                    <div className='todos-wrapper' key={todo.id}>
                        <h4>{todo.todo}</h4>
                        <p>{todo.completed  ? 'выполнено' : 'не выполнено'}</p>
                    </div>
                ))}
            </div>
                )}
            </div>
        </>
    )
}