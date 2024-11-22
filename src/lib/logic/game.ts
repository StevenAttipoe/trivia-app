import { currentQuestion, questions, userAnswers } from '$stores/quiz-store';
import { get } from 'svelte/store';

export function handleAnswer(answer: string): void {
    const currentQuestionVal = get(currentQuestion);
    const questionLength = get(questions);

    userAnswers.update(answers => {
      answers[currentQuestionVal] = answer;
      return answers;
    });
    
    if (currentQuestionVal < questionLength.length) {
      currentQuestion.update(n => n + 1);
    }
  }