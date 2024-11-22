<script lang="ts">
    import { goto } from '$app/navigation';

    let { data } = $props();
    let selectedCategory = $state(null);
</script>

<main class="p-4 w-svw h-svh flex items-center justify-center flex-col">
    <h1 class="mt-4 mb-1 self-center text-5xl">
        Trivia Guessing Game
    </h1>
    
    <h4 class="mb-8 self-center text-lg">
        (Duration: 1 min)
    </h4>

    <div class="w-full max-w-md">
        <label for="category" class="block text-gray-700 text-lg font-semibold mb-2">Select a Category:</label>
        <select
            id="category"
            onchange={(e: any) => selectedCategory = e.target?.value}
            class="w-full p-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 text-base"
        >
            <option selected disabled>Select a category</option>
            
            {#if data.categories}
            {#each data.categories as category}
                <option value={category.id}>{category.name}</option>
            {/each}
            {/if}
        </select>
    </div>
    
    <br>

    <button 
        class="bg-yellow-300 border-2 border-black rounded-lg text-xl h-16 w-40  reg my-4 self-center"
        disabled={!selectedCategory}
        class:animate-bounce={selectedCategory}
        onclick={() => goto(`/game?category=${selectedCategory}`)}
    >
        Start Game
    </button>
</main>
