import React from "react";
import { Card, CardMedia, Box, CardActions, CardContent, Typography } from "@mui/material";
import moment from "moment";
import { AiOutlineDelete, AiOutlineLike, AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from "../../context/ContextAPI";
import { useMutation } from "react-query";
import { deletePost, likePost } from "../../api/fetchServer";

const Post = ({ post }) => {
  const { setCurrentId, postData } = useGlobalContext();
  const { _id, title, message, creator, tags, selectedFile, likeCount, createdAt, __v } = post;

  const { mutate } = useMutation({
    mutationFn: () => deletePost(_id),
  });

  const likes = useMutation({
    mutationFn: () => likePost(_id),
  });

  const handleDelete = () => {
    mutate({ ...postData, creator: "", title: "", message: "", tags: "", selectedFile: "" });
  };

  const likeClick = () => {
    likes.mutate(likeCount);
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%", position: "relative", justifyContent: "space-between", borderRadius: "10px" }}>
      <CardMedia className="h-64 w-full hover:opacity-30 transition duration-500 opacity-80" component={"image"} alt={title} image={selectedFile ? selectedFile : ""} />
      <Box sx={{ position: "absolute", left: "20px", top: "20px" }}>
        <Typography variant="h6" className="text-sky-500">
          {creator}
        </Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </Box>
      <Box sx={{ position: "absolute", color: "#fff", right: "20px", top: "20px" }}>
        <button onClick={() => setCurrentId(_id)} className="p-2 bg-black hover:bg-black/50 rounded-full">
          <AiOutlineEdit className="text-xl" />
        </button>
      </Box>
      <Box sx={{ display: "flex", ml: 2, justifyContent: "space-between" }}>
        <Typography variant="body2" className="capitalize cursor-pointer text-slate-500">
          {tags.map((tag, i) => (
            <span className=" mx-[2px]" key={i}>
              #{tag}
            </span>
          ))}
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom className="px-4 capitalize">
        {title}
      </Typography>
      <CardContent>
        <Typography variant="body" gutterBottom className="px-4 capitalize">
          {message}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }} className="p-[0_14px_8px_16px]">
        <button className="flex items-center py-2 px-1" onClick={likeClick}>
          <AiOutlineLike className="ml-1" />
          &nbsp; {likeCount}
        </button>
        <button className="flex mr-1 text-red-500 items-center" onClick={handleDelete}>
          <AiFillDelete className="mr-1" />
          Delete
        </button>
      </CardActions>
    </Card>
  );
};

export default Post;
