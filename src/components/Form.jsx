import React from "react";
import { TextField, Typography } from "@mui/material";
import { useGlobalContext } from "../context/ContextAPI";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../api/fetchServer";
import { useMutation } from "react-query";
import { Loading } from "../components";

const Form = () => {
  const { postData, setPostData, currentId, setCurrentId } = useGlobalContext();

  const mutationPost = useMutation({
    mutationFn: (newPost) => createPost(newPost),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (newsPost) => updatePost(currentId, newsPost),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      mutate({ ...postData });
      setPostData({ ...postData, creator: "", title: "", message: "", tags: "", selectedFile: "" });
      setCurrentId(null);
    } else {
      mutationPost.mutate({ ...postData });
      setPostData({ ...postData, creator: "", title: "", message: "", tags: "", selectedFile: "" });
    }
  };

  if (isLoading) return <Loading />;

  const handleCancel = () => {
    setCurrentId(null);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setPostData({ ...postData, creator: "", title: "", message: "", tags: "" });
  };

  const buttonStyles = "py-2 px-5 hover:drop-shadow-lg rounded-lg text-white mt-1";
  return (
    <div className="bg-white/40 p-2 rounded-xl md:mr-2 shadow-xl">
      <form className="flex flex-col space-y-3" noValidate onSubmit={handleSubmit}>
        <Typography variant="body">
          <span className="font-neon">{currentId ? "Editing" : "Creating"} New Memory</span>
        </Typography>
        <TextField value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} name="creator" variant="outlined" label={currentId ? "Edit Creator" : "Creator"} fullWidth />
        <TextField value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} name="title" variant="outlined" label={currentId ? "Edit Title" : "Title"} fullWidth />
        <TextField value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} name="message" variant="outlined" label={currentId ? "Edit Message" : "Message"} fullWidth />
        <TextField value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })} name="tags" variant="outlined" label={currentId ? "Edit Tags" : "Tags"} fullWidth />
        <div>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <div className="flex items-center justify-around">
          <button type="submit" onSubmit={handleSubmit} className={`${buttonStyles} bg-blue-500`}>
            Submit
          </button>
          <button onClick={handleClear} className={`${buttonStyles} bg-red-500`}>
            Clear
          </button>
          {currentId && (
            <button onClick={handleCancel} type="button" className={`${buttonStyles} bg-green-500`}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
