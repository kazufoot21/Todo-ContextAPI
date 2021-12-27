import { DataProvider } from './components/DataProvider';
import { Footer } from './components/Footer';
import { FormInput } from './components/FormInput';
import { List } from './components/List';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>TO DO LIST</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
