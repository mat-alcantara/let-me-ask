import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 64px;

  @media (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 480px;
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
        background: ${(props) => props.theme.colors.input};
        color: ${(props) => props.theme.colors.text};
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }
    }
  }
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
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

  @media (max-width: 480px) {
    width: 100%;
    max-width: 350px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 32px;
  width: 100%;

  .user-info {
    display: flex;
    align-items: center;
    height: 100%;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    span {
      margin-left: 8px;
      color: ${(props) => props.theme.colors.text};
      font-weight: 500;
      font-size: 14px;
    }
  }

  > span {
    font-size: 14px;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const LiveContainer = styled.div`
  margin: 0 auto 16px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    width: 100%;

    @media (max-width: 480px) {
      width: 100%;
      max-width: 350px;
      height: auto;
    }
  }
`;
