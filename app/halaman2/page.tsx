'use client'
import Link from "next/link";
import styles from "./halaman2.module.css";
import ViewButton from "../components/ViewButton"
import Kotak from "../components/Kotak"
import { useEffect, useState } from "react";
const base_url="https://jsonplaceholder.typicode.com/posts"
interface Iposts{
  userId:number,
  id:number,
  title:string,
  body:string
}
const Home= ()=>{
  const [posts, setPosts] = useState<Iposts[]>([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(base_url);
      const data: Iposts[] = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);
  return (
      <>
      <p>{new Date().toLocaleTimeString()}</p>
      <p className="text-2xl">{base_url}</p>
      {posts.length > 0 && (
        <div>
          <p>IDnya: {posts[0].id}</p>
          <p>title: {posts[4].title}</p>
        </div>
      )}
   
      <h1 className={`${styles.wadah} ${styles.ukuran}`}>halaman2</h1>
      <br></br>
    {posts.map((post) => {
        return (
          <Kotak key={post.id}>
            <p className="text-2xl">id: {post.id}</p>
            <p className="text-2xl">title: {post.title}</p>
            <ViewButton id={post.id}/>
          </Kotak>
        )
      })}
     

      <Link href="/">halaman1</Link>
        </>
    );
  }
export default Home
  