import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
    const category = url.searchParams.get('category');

    if (!category) {
        throw error(400, 'Category not selected');
    }

    let data;

    try {
        const res = await fetch(`https://opentdb.com/api.php?amount=2&category=${category}`);
        data = await res.json();

    } catch (e) {
        error(429, {
			message: "You're making too many requests. Please wait a moment and try again."
		});
    }

    const questions: App.Question[] = data?.results?.map((item: any, index: number) => ({
        id: `${category}-${index}`,
        text: item.question,
        options: item.type === 'multiple' 
            ? [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5)
            : ['True', 'False'],
        correctAnswer: item.correct_answer,
        type: item.type === 'multiple' ? 'multiple-choice' : 'true-false'
    }));

    return { questions };
};
