import React from 'react';
import UserList from './components/UserList';
import MovieList from './components/MovieList';
import SeatList from './components/SeatList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Movie Ticket Booking webpage</h1>
        <UserList/>
        <MovieList/>
        <SeatList/>
      </header>
    </div>
  );
}

export default App;
