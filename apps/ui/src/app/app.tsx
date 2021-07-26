import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

import Layout from './core/Layout';
import UserPage from './user/UserPage';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Layout>
          <UserPage />
        </Layout>
      </MuiPickersUtilsProvider>
    </ApolloProvider>
  );
}

export default App;
