import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

import ApolloClient from 'apollo-client';

const httplink = createHttpLink({
    uri:'http://localhost:8000/graphql'
})
const client = new ApolloClient({
    link:httplink,
    cache:new InMemoryCache()
});

ReactDOM.render(
        <ApolloProvider client={client}>
            <Root />
        </ApolloProvider>
        , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
