import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

const CreatePost = ({ eventId }) => {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(""); // エラーメッセージ用の状態

  const createPost = async (e) => {
    e.preventDefault();
    setError(""); // エラーメッセージをリセット

    if (!nickname || !content) {
      setError("ニックネームと内容は必須です。");
      return;
    }

    try {
      await addDoc(collection(db, "createpost"), {
        nickname,
        content,
        id: eventId,
        createdAt: new Date(),
      });
      setNickname("");
      setContent("");
      alert("投稿が追加されました"); // または他の通知方法を検討
    } catch (error) {
      setError("投稿の追加に失敗しました: " + error.message);
    }
  };

  return (
    <form onSubmit={createPost}>
      {error && <p className="error">{error}</p>}
      <div>
        <label htmlFor="nickname">ニックネーム</label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">内容</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">投稿</button>
    </form>
  );
};

export default CreatePost;
