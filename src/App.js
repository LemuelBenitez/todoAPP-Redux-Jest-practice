import { Provider } from 'react-redux';
import store from './todoStore';
import Todo from './todo';

const App = () => {
  return (

      <Provider store= {store}>
        <Todo />
      </Provider>
  );
};

export default App;
