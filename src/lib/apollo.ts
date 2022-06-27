//Arquivo de Configuração do Apollo
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pklka427ia01w741z8a9gp/master',
    cache: new InMemoryCache()
});