<script lang="ts">
    let { value = 0 } = $props();
</script>
  
<div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div 
    class="h-full bg-yellow-300 transition-all duration-300 ease-in-out"
    style="width: {value}%"
></div>
</div>