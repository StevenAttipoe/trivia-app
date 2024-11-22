// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		interface Question {
            id: string;
            text: string;
            options: string[];
            correctAnswer: string;
            type: 'multiple-choice' | 'true-false';
        }

        interface Category {
            id: string;
            name: string;
            description: string;
        }

        interface QuizStore {
            currentQuestion: number;
            questions: Question[];
            userAnswers: string[];
            selectedCategory: string;
            quizStarted: boolean;
            score: number;
            progress: number;
        }

        // Add this type to handle the quiz data structure
        interface QuizData {
            [key: string]: Question[];
        }
	}

	//  interface Question {
	// 	id: string;
	// 	text: string;
	// 	options: string[];
	// 	correctAnswer: string;
	// 	type: 'multiple-choice' | 'true-false';
	//   }
	  
	//    interface Category {
	// 	id: string;
	// 	name: string;
	// 	description: string;
	//   }
}

export {};
