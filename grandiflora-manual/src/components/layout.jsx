import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";

import Box from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "gatsby";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Nav from "./nav";
import { Grid } from "@mui/material";

const ButtonLink = ({ children, href }) => (
  <ListItemButton component={Link} to={href}>
    {children}
  </ListItemButton>
);

export default function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Grid>
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
        <Container maxWidth="md">
          <List>
            <Nav components={{ a: ButtonLink }} />
          </List>
        </Container>
      </Drawer>
      {children}
    </Grid>
  );
}
