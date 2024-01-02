import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

export const Posts = () => {
  const { eventId } = useParams();
  const [posts, setPosts] = useState([]); // 投稿データを保持するための状態

  useEffect(() => {
    const getPosts = async () => {
      const q = query(collection(db, "createpost"), where("id", "==", eventId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
      console.log(data);
    };

    if (eventId) {
      getPosts();
    }
  }, [eventId]); // eventIdが変更されたときにのみ効果を再実行

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.nickname}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
