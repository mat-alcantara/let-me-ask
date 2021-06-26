import styled from 'styled-components';

export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px auto 0px auto;
  width: 100%;

  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;

  @media (max-width: 480px) {
    height: 35px;
  }

  div {
    background: #835afd;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 250px;
    font-size: 18px;
    font-weight: 500;

    @media (max-width: 480px) {
      width: 100%;
      font-size: 12px;
    }
  }
`;
