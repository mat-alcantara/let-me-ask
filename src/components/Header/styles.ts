import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 16px;
  }
`;

export const Logo = styled.div``;

export const Menus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
