import logo from './logo.svg';
import Header from './components/Header';
import Joke from './components/Joke';
import Footer from './components/Footer';
import tryImage from './images/joker101.jpg';
import jokesData from './jokesData';
import './App.css';

function App() {

  const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

    const elements = pokemon.map(mon => `<p>${mon}</p>`);
    // console.log(jokesData);

    const jokeElements = jokesData.map(jokes=> {
      return <Joke  img={tryImage} setup= {jokes.setup} punchline = {jokes.punchline}/>
    }
    );

  return (
    <div className="main">
            <Header />
            <div className="container">
              <div className="row">
                 {jokeElements}
              </div>
            </div>

            {/* <Content /> */}
                
            <Footer />
        </div>

  );
}

{/* <Joke
                img={tryImage}
                
                punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
                />

                <Joke
                img={tryImage}
                setup="I bought my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
                isPun={true}
                                />
                <Joke 
                img={tryImage}
                setup="How did the hacker escape the police?"
                punchline="He just ransomeware!"
                isPun={true}
                
                />
                <Joke 
                img={tryImage}
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy"
                isPun={false}
                /> */}

export default App;
