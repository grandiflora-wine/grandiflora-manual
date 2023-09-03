import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Grandiflora Manual`,
    siteUrl: `https://manual.grandiflorawine.com/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: "appFvb4oVwT5mwLO8",
            tableName: "tblZJ8p8VEArIUYVs"
          }
        ]
      },
      __key: "inventory"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "components",
        "path": "./src/components/"
      },
      __key: "manuals"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "manuals",
        "path": "./src/pages/manuals/"
      },
      __key: "manuals"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
  ]
};

export default config;
