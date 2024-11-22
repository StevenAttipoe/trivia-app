<script lang="ts">
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import QuizResults from '$lib/components/QuizResult.svelte';
  import QuizQuestion from '$lib/components/QuizQuestion.svelte';
  import { currentQuestion, questions, score, progress, userAnswers } from '$stores/quiz-store';
  import { handleAnswer } from '$lib/logic/game';
  import { onMount } from 'svelte';
  
  let { data } = $props();
  questions.set(data.questions);

  onMount(() => {
    currentQuestion.set(0);
    userAnswers.set([]);
  })
</script>
  
  <div class="max-w-3xl mx-auto p-8 bg-white min-h-screen flex flex-col justify-center">
    {#if $currentQuestion < $questions.length}
      <ProgressBar value={$progress} />
      <QuizQuestion 
        question={$questions[$currentQuestion]}
        onAnswer={handleAnswer}
        currentQuestionNumber={$currentQuestion + 1}
        totalQuestions={$questions.length}
      />
    {:else}
      <QuizResults 
        score={$score}
        totalQuestions={$questions.length}
      />
    {/if}
  </div>