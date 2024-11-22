import { writable, derived } from 'svelte/store';

export const currentQuestion = writable<number>(0);
export const questions = writable<App.Question[]>([]);
export const userAnswers = writable<string[]>([]);
export const selectedCategory = writable<string>('');
export const quizStarted = writable<boolean>(false);

export const score = derived(
  [questions, userAnswers],
  ([$questions, $userAnswers]): number => {
    return $questions.reduce((total, question, index) => {
      return total + ($userAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
  }
);

export const progress = derived(
  [currentQuestion, questions],
  ([$currentQuestion, $questions]): number => {
    return ($questions.length > 0) 
      ? (($currentQuestion + 1) / $questions.length) * 100 
      : 0;
  }
);