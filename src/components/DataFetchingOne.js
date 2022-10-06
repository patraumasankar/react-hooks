import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetchingOne = () => {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setPosts(res.data)
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            <input type='text' value={id} onChange={
                (e) => {
                    setId(e.target.value)
                }} />
            <div>{JSON.stringify(posts)}</div>
            {/* {posts.title} */}
        </div>
    )
}

export default DataFetchingOne