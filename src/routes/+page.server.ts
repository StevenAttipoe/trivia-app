import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    try {
        const res = await fetch('https://opentdb.com/api_category.php');
        const data = await res.json();
        const categories: {id: string, name: string}[] = data.trivia_categories.map((cat: any) => ({
            id: cat.id,
            name: cat.name
        }));
    
        return { categories };

    } catch(e) {
        console.error(e);
        return { error: 'Failed to fetch categories' };
    }


};