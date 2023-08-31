import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Nav from "./nav.jsx";

export default function Layout({ children }) {
  const components = {
    p: Typography,
    ul: List,
    li: ListItem,
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <MDXProvider components={components}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="outline" onClick={() => setDrawerOpen(true)}>
            Manuals
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <Nav />
      </Drawer>
      {children}
    </MDXProvider>
  );
}
