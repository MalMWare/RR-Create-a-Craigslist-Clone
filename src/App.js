// Import data
import { postings } from './postings';

// Import components
import './App.css';
import Directory from './Directory';
import Gallery from './Gallery';
import Searchbar from './Searchbar';
import Sidebar from './Sidebar';
import Posting from './Posting';
import Help from './Help';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Sidebar />
      <Searchbar />
      <Directory />
      <Gallery postings={postings}/>
      </div>
    </div>
  );
}

export default App;
