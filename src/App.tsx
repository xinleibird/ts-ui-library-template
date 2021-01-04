import React from 'react';
import Button from './components/Button/Button';

import './styles/index.scss';

function App() {
  return (
    <>
      <Button size="small" block danger ghost htmlType="submit">
        Test Button
      </Button>
      <Button size="middle" disabled block danger ghost htmlType="submit">
        Test Button
      </Button>
      <Button size="large" block danger ghost htmlType="submit">
        Test Button
      </Button>
    </>
  );
}

export default App;
