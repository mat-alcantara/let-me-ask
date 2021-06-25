/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';

import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
    deslikes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
  deslikeId: string | undefined;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useRoom = (roomId: string) => {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState('');

  const limitToCollapse = process.env.REACT_APP_LIMIT_TO_COLLAPSE || 0;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions =
        databaseRoom?.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
            likeCount:
              Object.values(value.likes ?? {}).length -
              Object.values(value.deslikes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              // eslint-disable-next-line no-shadow
              ([key, like]) => like.authorId === user?.id,
            )?.[0],
            deslikeId: Object.entries(value.deslikes ?? {}).find(
              // eslint-disable-next-line no-shadow
              ([key, deslike]) => deslike.authorId === user?.id,
            )?.[0],
          };
        },
      );

      setTitle(databaseRoom?.title);
      setQuestions(parsedQuestions);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id]);

  return { questions, title, limitToCollapse };
};
