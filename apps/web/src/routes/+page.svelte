<script lang="ts">
  import CourseCard from '$lib/components/CourseCard/CourseCard.svelte'

  // TODO: Typing
  export let data: { courses: any[] }

  $: courses = data.courses
</script>

<div>
  <div class="flex gap-4">
    {#each courses as course}
    <CourseCard {...course} />
  {/each}
  </div>
</div>