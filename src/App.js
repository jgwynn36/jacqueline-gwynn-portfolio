import React, { Component } from 'react'; 
import './App.css'; 
import Sidebar from './components/sidebar'; 
import Introduction from './components/introduction'; 
import About from './components/about'; 

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
                    <Sidebar></Sidebar>
                                  <div id="colorlib-main">
                                    <Introduction></Introduction>
                                    <About></About>
              </div>
        </div>
      </div>
    )
  }
}



//     <div className="App">
//       <header className="App-header">
//         <img src="../public/images/portfolioImg.jpeg" className="App-logo" alt="logo" />
//         <h1>Jacqueline Gwynn</h1>
//         <p>
//           Hello, I am a Full Stack Engineer with a background in finance
//           industry and a passion for providing the best user experience.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn More About Me
//         </a>
//       </header>
//     </div>
//   );
// }
// }

export default App;
