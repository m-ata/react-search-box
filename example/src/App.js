import React, { useState } from 'react'

import 'react-search-box/dist/index.css';
import SearchBox from './SearchBox';

const App = () => {

  const [text, setText] = useState('');

  return <div className={'container'}>
    <SearchBox text={text} handleTextChange={(e) => setText(e.target.value)} />
  </div>
}

export default App
