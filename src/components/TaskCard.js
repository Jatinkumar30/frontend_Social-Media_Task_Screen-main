import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const TaskCardWrapper = styled.div`
  background-color: #e7828a;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: #cf5761;
  }
`;

const TaskText = styled.div`
  font-size: 17px;
  color: white;
  font-weight: 500;
`;

const PointsBadge = styled.div`
  background-color: white;
  color: red;
  font-size: 16px;
  padding: 10px;
  border-radius: 20px;
  font-weight: semibold;
  margin-left: 10px
`;

const IconWrapper = styled.div`
  background-color: rgb(255, 95, 122);
  color: white;
  padding: 10px;
  border-radius: 50%;
  font-size: 44px;
  margin-right: 10px
`;

const TaskCard = ({ taskName, points }) => {
  return (
    <>

    <TaskCardWrapper>
      <IconWrapper>
        <FaInstagram />
      </IconWrapper>
      <TaskText>{taskName}</TaskText>
      <PointsBadge>{points} Points</PointsBadge>
    </TaskCardWrapper>
    </>
  );
};

export default TaskCard;
