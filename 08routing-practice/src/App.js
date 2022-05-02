import './App.css';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';

const Home = (props) => {
  return(
    <div>
      <h1 style={ { color: "red" } }>
        Welcome!
      </h1>
    </div>
  )
}

const Parrot = (props) => {
  const { path } = useParams();
  console.log(path);

  return(
    <div>
      <h1 style={ { color: "blue" } }>
        { path } Component
      </h1>
      { isNaN(path)
        ? <p>The word is: {path}</p>
        : <p>The number is : {path}</p>
      }
      <Link to={ "/home" }>Go Home</Link>
    </div>
  )
}

const ParrotColor = (props) => {
  const { path, textColor, backGroundColor } = useParams();
  console.log(path, textColor, backGroundColor);

  return(
    <div>
      <h1>
        { path } Component
      </h1>
      { isNaN(path)
        ? <p style={ { color: textColor , background: backGroundColor }}>The word is: {path}</p>
        : <p>The number is : {path}</p>
      }
      <Link to={ "/home" }>Go Home</Link>
    </div>
  )
}

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/:path" element={<Parrot />}/>
          <Route path="/:path/:textColor/:backGroundColor/" element={<ParrotColor />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
