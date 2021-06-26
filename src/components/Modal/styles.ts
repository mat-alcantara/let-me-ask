import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.text};
`;

export const InteriorContainer = styled.div`
  background: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    color: ${(props) => props.theme.colors.text};
    margin-top: 16px;
    margin-bottom: 32px;
  }
`;

export const RemoveImg = styled.img`
  color: #e73f5d;
  width: 50px;
  height: auto;
  margin-bottom: 16px;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
