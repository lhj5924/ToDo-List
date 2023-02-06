import React from 'react';
import './App.css';
import TodayContainer from './components/today/TodayContainer';
import TodoContainer from './components/todo/TodoContainer';

function App() {
  const today = {
    date: new Date(), // new Date() 를 TodayContainer 에서 호출해서 Date 로 넘겨주면 작동이 안되고 App 에서 new Date() 를 호출하면 작동이 된다. 왜지???

}
  return (
    <div className="App--container">
      <header className="App--header">
        <h1 className='App--header__title'>To Do List</h1>
      </header>
      <hr />
      <main className='Main--container'>
        <section className='TodayContainer'>
          <TodayContainer
          date={today.date} />
        </section>
      <hr />
        <section className='TodoContainer'>
          <TodoContainer />
        </section>
      </main>
    </div>
  );
}

export default App;
