<script lang="ts">
  import CourseCard from '$lib/components/CourseCard/CourseCard.svelte'
  import CourseGridLayout from '$lib/layouts/CourseGridLayout/CourseGridLayout.svelte'

  // TODO typing
  export let data: { courses: any[]; enrollments: any[] }

  $: courses = data.courses
</script>

<CourseGridLayout>
  {#each courses as course}
    <CourseCard {...course} />
  {/each}
</CourseGridLayout>
