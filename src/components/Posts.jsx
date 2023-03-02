import React from "react";
import { Grid } from "@mui/material";
import { Error, Loading } from "../components";
import { useQuery } from "react-query";
import { fetchPost, updatePost } from "../api/fetchServer";
import Post from "./post/Post";
import { useGlobalContext } from "../context/ContextAPI";

const Posts = () => {
  const { setCurrentId, currentId } = useGlobalContext();
  const { data, isSuccess, isLoading, isFetching, isError } = useQuery(["post"], fetchPost, {
    staleTime: 3000,
    refetchInterval: 3000,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading && isFetching ? <Loading /> : ""}
      {isSuccess && (
        <Grid spacing={3} alignItems="stretch" container sx={{ display: "flex" }}>
          {data?.data?.map((post, i) => (
            <Grid xs={12} item md={6} sm={6} key={post?._id}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
