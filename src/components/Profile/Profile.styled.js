import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 250px;
  margin: 80px auto;
  padding-top: 30px;
  border: 1px solid #8d9b9b;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 5px 17px -4px #000000;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  border: 1px solid #f1f1f1;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  width: 120px;
  height: 120px;
`;

export const Name = styled.p`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  color: grey;
  margin-bottom: 15px;
`;

export const Location = styled.p`
  color: grey;
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; 
  border-top: 1px solid #8d9b9b;
  background-color: #d5eeee; 
  padding: 10px; 
  border-radius: 4px; 
  box-shadow: 0px 5px 17px -4px #000000; 
`;


export const Item = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border: 1px solid #8d9b9b;
`;

export const Label = styled.span`
  font-size: 12px;
  color: grey;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
