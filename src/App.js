import logo from './logo.svg';
import './App.css';
function Home(){
  return()
 }
 function Weather(){
  return()
 }
 function Dashboard(){
  return()
 }
 function NotMatch(){
  return()
 }
 
function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
       <Route path="/" element={<Navigation />}>
         <Route index element={<Home />} />
         <Route path="weather" element={<Weather />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="*" element={<NoMatch />} />
       </Route>
     </Routes>
   </BrowserRouter>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Slider />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
