import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Header } from './components/Header';
import { Clients } from './components/Clients';

const client = new ApolloClient({
  uri: 'http://localhost:5050/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="app">
          <div className="container">
            <Header></Header>
            <Clients></Clients>
          </div>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
