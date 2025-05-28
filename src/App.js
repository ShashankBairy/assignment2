import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Screen from "./components/Screen";
import "./App.css"
function App() {
  return (
    <>
     <header>
      <Header/>
    </header>
    <div className="body">
       <aside>
      <Sidebar/>
      </aside>
      <main>
       <Screen/>
      </main>
    </div>
   
    </>
  );
}

export default App;
