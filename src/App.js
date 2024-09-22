import React from 'react';
import styled from 'styled-components';
import TaskCard from './components/TaskCard';
import Header from './components/header';
import Footer from './components/footer';

const AppWrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TaskList = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const tasks = [
  { id: 1, taskName: 'Monthly leaderboard winner!', points: 10 },
  { id: 2, taskName: 'Share with 5 friends!', points: 10 },
  { id: 3, taskName: 'Earn Daily Win Big Reward!', points: 10 },
  { id: 4, taskName: 'Claim 10 Points Every Hour', points: 10 },
  { id: 5, taskName: 'Weekly Leaderboard Prize', points: 10 },
  { id: 6, taskName: 'Like the Instagram Post', points: 10 },
];

function App() {
  return (
    <AppWrapper>
      <Header />
      <TaskList>
        {tasks.map((task) => (
          <TaskCard key={task.id} taskName={task.taskName} points={task.points} />
        ))}
      </TaskList>
      <Footer />
    </AppWrapper>
  );
}

export default App;
