import { useEffect, useState } from "react"


const JobPost = () => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    const handleClick = () => {
        setPage((page) => (page+1));
    }

    useEffect( async () => {

        await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
        .then(response=>response.json())
        .then(data=>{

            data.forEach(async item => {                
                await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
                .then(response=>response.json())
                .then(data2=>{
                    setPosts((posts) => [...posts, data2])
                })
                .catch(err=>console.log(err));  

            });

        })
        .catch(err=>console.log(err));
    }, []);

    return (
        <>

            <div className="posts-container">
                <h1>Hacker News Jobs Board</h1>
                {
                    posts.slice(0, page * 6).map(post=>(
                        <div className="post-content-container">
                            { post.url ? <a href="${post.url}"><h3>{post.title}</h3></a> : <h3>{post.title}</h3>}
                            <p>By {post.by} . {new Date().toLocaleString()}</p>
                        </div>
                ))}        

                { page*6 < posts.length && <button className="post-btn" style={{backgroundColor: '#ff9900'}} onClick={handleClick}>Load more jobs</button> }
            </div>

        </>
    )
}

export default JobPost
