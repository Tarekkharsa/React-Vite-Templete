import Test from '@/components/test';

const App = () => {
  return (
    <div className="App">
      <Test />
      {import.meta.env.VITE_MESSAGE}
    </div>
  );
};

export default App;
