import './App.css';
import Post from '../components/Post';

function App() {
  return (
    <Route path="/post" exact component={Post}/> 
  );
}

export default App;
