<script lang="ts">
  import CourseCard from '$lib/components/CourseCard/CourseCard.svelte'
  import CourseGridLayout from '$lib/layouts/CourseGridLayout/CourseGridLayout.svelte'

  // TODO typing
  export let data: { courses: any[]; enrollments: any[] }

  $: courses = data.courses
</script>

<CourseGridLayout maxCol="4">
  {#each courses as course}
    <CourseCard mode="view" {...course} />
  {/each}
</CourseGridLayout>
