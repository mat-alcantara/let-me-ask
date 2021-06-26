import React from 'react';

import { useParams } from 'react-router-dom';

import deleteImg from '../../assets/delete.svg';
import checkImg from '../../assets/check.svg';
import answerImg from '../../assets/answer.svg';

import { Question } from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import { Container, RoomTitle, Separator } from './styles';

import Header from '../../components/Header';

type RoomParams = {
  id: string;
};

export const AdminRoom: React.FC = () => {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions, limitToCollapse } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <Container>
      <header>
        <Header isAdminPage roomId={roomId} />
      </header>

      <main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions && questions.length > 0 && (
            <span>{questions?.length} pergunta(s)</span>
          )}
        </RoomTitle>

        <div className="question-list">
          {questions
            ?.filter((question) => question.likeCount >= limitToCollapse)
            .sort((b, a) => a.likeCount - b.likeCount)
            .sort((b, a) => Number(b.isAnswered) - Number(a.isAnswered))
            .map((question) => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                    <>
                      <span
                        className={`${question.likeId ? 'liked' : ''} ${
                          question.deslikeId ? 'disliked' : ''
                        }`}
                      >
                        {question.likeCount}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCheckQuestionAsAnswered(question.id)
                        }
                      >
                        <img
                          src={checkImg}
                          alt="Marcar pergunta como respondida"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Dar destaque à pergunta" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </Question>
              );
            })}
        </div>
        <Separator>Respostas colapsadas</Separator>
        <div className="question-list">
          {questions
            ?.filter((question) => question.likeCount < limitToCollapse)
            .map((question) => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </Question>
              );
            })}
        </div>
      </main>
    </Container>
  );
};
