<script lang="ts">
  import CourseCard from '$lib/components/CourseCard/CourseCard.svelte'

  // TODO typing
  export let data: { courses: any[]; enrollments: any[] }

  $: courses = data.courses
</script>

<div class="flex flex-wrap justify-center gap-4">
  {#each courses as course}
    <CourseCard mode="view" {...course} />
  {/each}
</div>
