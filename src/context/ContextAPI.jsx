import { createContext, useState, useContext } from "react";

const StateContext = createContext();

const initialPost = {
  creator: "",
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
};

export const GlobalContext = ({ children }) => {
  const [postData, setPostData] = useState(initialPost);
  const [createdDone, setCreatedDone] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  return <StateContext.Provider value={{ postData, setPostData, createdDone, setCreatedDone, currentId, setCurrentId }}>{children}</StateContext.Provider>;
};

export const useGlobalContext = () => useContext(StateContext);
