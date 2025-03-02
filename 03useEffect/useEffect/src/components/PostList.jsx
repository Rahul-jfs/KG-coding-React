import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        addInitialPosts(data.posts);
      });

    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
    };
  }, []);

  return (
    <div className="p-4">
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
