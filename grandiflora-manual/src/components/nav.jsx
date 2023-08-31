import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

export default function Nav() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSitePage {
        nodes {
          path
          pageContext
        }
      }
    }
  `);
  return (
    <List>
      {data.allSitePage.nodes
        .filter((node) => node.pageContext?.frontmatter?.title)
        .map((node) => (
          <ListItemButton key={node.path}>
            <Link to={node.path}>{node.pageContext?.frontmatter?.title}</Link>
          </ListItemButton>
        ))}
    </List>
  );
}
