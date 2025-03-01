import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const viewsElement = useRef();
  const hashTagsElement = useRef();

  const { addPost } = useContext(PostList);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const views = viewsElement.current.value;
    const hashTags = hashTagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    viewsElement.current.value = "";
    hashTagsElement.current.value = "";
    addPost(userId, postTitle, postBody, views, hashTags);
  };

  return (
    <div className="p-4 create-post">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="mb-3">
          <label htmlFor="userID" className="form-label">
            UserId
          </label>
          <input
            type="text"
            ref={userIdElement}
            placeholder="Enter user ID"
            className="form-control"
            id="userID"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            placeholder="How are you feeling today...."
            id="postTitle"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows="4"
            ref={postBodyElement}
            placeholder="Tell us more about it"
            className="form-control"
            id="postContent"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="views" className="form-label">
            Number of views
          </label>
          <input
            type="text"
            rows="4"
            ref={viewsElement}
            placeholder="How many people reacted to this post?"
            className="form-control"
            id="views"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">
            Enter your hashTags
          </label>
          <input
            type="text"
            rows="4"
            ref={hashTagsElement}
            placeholder="Please enter your hashtags using spaces"
            className="form-control"
            id="hashtags"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
