import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  // justify-content: center;
  gap: 20px;
`;
export const ButtonFeedBack = styled.button`
  border-radius: 8px;
  padding: 5px 10px;
  background: lightgreen;
  color: black;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  font-size: 18px;
  text-transform: capitalize;

  :hover {
    cursor: pointer;
    background: yellow;
  }
`;
