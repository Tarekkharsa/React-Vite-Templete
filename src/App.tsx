import BaseTemplate from '@/components/templates/base/BaseTemplate';

const App = () => {
  return (
    <div className="App">
      <BaseTemplate sampleTextProp="testddd" />
      {import.meta.env.VITE_MESSAGE}
    </div>
  );
};

export default App;
