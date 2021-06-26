import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};

  .question {
    background: ${(props) => props.theme.colors.input};
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;

    span {
      margin: auto auto;

      &.liked {
        color: #835afd;
      }

      &.disliked {
        color: #ff3333;
      }
    }

    & + .question {
      margin-top: 8px;
    }

    &.highlighted {
      background: ${(props) => props.theme.colors.highlighted};
      border: 1px solid #835afd;

      footer .user-info span {
        color: ${(props) => props.theme.colors.text};
      }
    }

    &.answered {
      background: ${(props) => props.theme.colors.answered};
    }

    p {
      color: ${(props) => props.theme.colors.text};
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        span {
          margin-left: 8px;
          color: ${(props) => props.theme.colors.text};
          font-size: 14px;
        }
      }

      > div {
        display: flex;
        gap: 16px;
      }

      button {
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2s;

        &.like-button {
          display: flex;
          align-items: flex-end;
          color: ${(props) => props.theme.colors.text};
          gap: 8px;

          &.liked {
            color: #835afd;

            svg path {
              stroke: #835afd;
            }
          }

          &.desliked {
            color: #ff0000;

            svg path {
              stroke: #ff0000;
            }
          }
        }

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }

  & + div {
    margin-top: 8px;
  }
`;
