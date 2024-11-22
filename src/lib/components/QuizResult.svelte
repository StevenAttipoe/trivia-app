<script lang="ts">
    import { goto } from "$app/navigation";
  import { currentQuestion, userAnswers } from "$stores/quiz-store";

    let { score, totalQuestions } : {
        score: number;
        totalQuestions: number;
    } = $props();

    let percentage = $state(0);
    $effect(() => {
        percentage = Math.round((score / totalQuestions) * 100);
    })
  
</script>
  
<div class="text-center py-8">
<h2 class="text-2xl font-bold mb-8">Quiz Complete!</h2>

<div class="mb-8">
    <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-yellow-300 flex items-center justify-center text-2xl font-bold">
        {percentage}%
    </div>

    <p class="text-lg">
        You got {score} out of {totalQuestions} questions correct
    </p>
</div>

<button 
    class="px-6 py-3 bg-yellow-300 rounded-lg font-medium
            hover:bg-yellow-400 transition-colors duration-200"
    onclick={() => {
        goto("/");
    }}
>
    Try Another Quiz
</button>
</div>