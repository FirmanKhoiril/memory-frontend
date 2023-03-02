import { Container } from "@mui/material";
import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <Container sx={{ m: "auto" }}>
      <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={["#06b6d4", "#67e8f9", "#6366f1", "#0ea5e9", "#3b82f6"]} />
    </Container>
  );
};

export default Loading;
