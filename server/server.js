const express = require("express")
require("dotenv").config()
const db = require("./config/connection")

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const app=express();
const {typeDefs, resolvers} = require("./schemas");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use(routes);
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

const initServer=async ()=>{
    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
      });
    db.once("open", ()=>{  
        // app.listen(PORT, ()=>{
            console.log(`app running on PORT: ${PORT}`)
            console.log(`apollo studio running on : ${url}graphql`)
        // })    
    })
}

initServer();