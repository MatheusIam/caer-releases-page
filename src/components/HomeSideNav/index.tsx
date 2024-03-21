import React from "react";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { GitHub, BarChart, Settings } from "@mui/icons-material";
import LogoCaer from "../LogoCaer";

interface AppBarProps {
  // Adicione props aqui se necessário
}

const AppBarLateral: React.FC<AppBarProps> = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        height: "100vh",
        width: 400,
        left: 0,
        backgroundColor: "#fff",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <LogoCaer />
        </Box>
      </Toolbar>
      <Divider />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <IconButton>
          <GitHub />
        </IconButton>
        <IconButton sx={{ my: 2 }}>
          <BarChart />
        </IconButton>
        <IconButton sx={{ my: 2 }}>
          <Settings />
        </IconButton>
      </Box>
    </AppBar>
  );
};

export default AppBarLateral;
