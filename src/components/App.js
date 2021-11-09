import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from './Greeting';
import Profile from './Profile';
import ToDoList from "./ToDoList";
import EmotionMeter from "./EmotionMeter";

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <Greeting />

      <Profile />

      <ToDoList />

      <EmotionMeter />
    </div>
  );
}

export default App;
