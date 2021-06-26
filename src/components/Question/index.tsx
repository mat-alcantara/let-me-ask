import React, { ReactNode } from 'react';

import cx from 'classnames';

import { Container } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export const Question: React.FC<QuestionProps> = ({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}) => {
  return (
    <Container>
      <div
        className={cx(
          'question',
          { answered: isAnswered },
          { highlighted: isHighlighted && !isAnswered },
        )}
      >
        <p>{content}</p>
        <footer>
          <div className="user-info">
            <img src={author.avatar} alt={author.name} />
            <span>{author.name}</span>
          </div>
          <div>{children}</div>
        </footer>
      </div>
    </Container>
  );
};
