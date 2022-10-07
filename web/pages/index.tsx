import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Teacher } from "../src/@types/Teacher";
import List from "../src/components/List/List";

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Alehandro",
      description: "Cara mais bonito do mundo!",
      value_hours: 100,
      img: "https://github.com/alehandrosv.png",
    },
    {
      id: 1,
      name: "Alehandro",
      description: "Cara mais bonito do mundo!",
      value_hours: 100,
      img: "https://github.com/alehandrosv.png",
    },
    {
      id: 1,
      name: "Alehandro",
      description: "Cara mais bonito do mundo!",
      value_hours: 100,
      img: "https://github.com/alehandrosv.png",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <List teachers={teachers}></List>
    </Box>
  );
};

export default Home;
