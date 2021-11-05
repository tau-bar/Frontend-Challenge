import './App.scss';
import MainPage from './pages/MainPage';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <MainPage/>
      </div>
    </DataProvider>
  );
}

export default App;
