import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 64px;

  @media (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 400px;
    margin: 0 auto 32px auto;
  }

  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }
    }
  }
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px 0;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  span {
    text-align: center;
    margin-left: 16px;
    background: #e559f9;
    border-radius: 9999px;
    padding: 8px 16px;
    color: ${(props) => props.theme.colors.text};
    font-weight: 500;
    font-size: 14px;

    @media (max-width: 480px) {
      margin-left: 4px;
      font-size: 10px;
      text-align: center;
    }
  }
`;

export const Separator = styled.div`
  font-size: 14px;
  color: #a8a8b3;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }
`;
