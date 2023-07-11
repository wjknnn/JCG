import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './page/Main';
import Chapter from './page/Chapter';
import All from './page/All';
import Layout from './page/Layout';
import Result from './page/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/all' element={<All />} />
          <Route path='/firstChapter' element={<Chapter />} />
          <Route path='/secondChapter' element={<Chapter />} />
          <Route path='/thirdChapter' element={<Chapter />} />
          <Route path='/FourthChapter' element={<Chapter />} />
          <Route path='/result' element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
