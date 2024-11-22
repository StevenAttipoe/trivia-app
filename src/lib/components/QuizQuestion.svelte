<script lang="ts">

  let { question, onAnswer, currentQuestionNumber,totalQuestions } : {
      question: App.Question;
      onAnswer: (answer: string) => void;
      currentQuestionNumber: number;
      totalQuestions: number;
  } = $props();
  
  let selectedAnswer: string | null = $state(null);
  
  function handleSubmit(): void {
    if (selectedAnswer !== null) {
      onAnswer(selectedAnswer);
      selectedAnswer = null;
    }
  }
  </script>
  
  <div class="my-8">
    <div class="text-center text-gray-600 mb-4">
      Question {currentQuestionNumber} of {totalQuestions}
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-6">{question.text}</h3>
      
      <div class="space-y-4 mb-6">
        {#each question.options as option}
          <label class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer
                      hover:bg-yellow-50 transition-colors duration-200">
            <input
              type="radio"
              name="answer"
              value={option}
              bind:group={selectedAnswer}
              class="mr-3"
            >
            <span>{option}</span>
          </label>
        {/each}
      </div>
  
      <button 
        class="w-full py-3 px-4 bg-yellow-300 rounded-lg font-medium
               disabled:bg-gray-200 disabled:cursor-not-allowed
               hover:bg-yellow-400 transition-colors duration-200"
        disabled={selectedAnswer === null}
        onclick={handleSubmit}
      >
        Next Question
      </button>
    </div>
  </div>
  