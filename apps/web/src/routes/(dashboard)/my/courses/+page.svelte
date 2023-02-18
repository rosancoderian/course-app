<script lang="ts">
  import Breadcrumbs from '$lib/components/Breadcrumbs/Breadcrumbs.svelte'
  import CourseCard from '$lib/components/CourseCard/CourseCard.svelte'
  import CourseGridLayout from '$lib/layouts/CourseGridLayout/CourseGridLayout.svelte'

  export let data: { courses: any[] }

  $: courses = data.courses
</script>

<Breadcrumbs items={[{ label: 'My Courses' }]} />
<CourseGridLayout maxCol="4">
  {#each courses as course}
    <CourseCard mode="view" {...course} />
  {/each}
</CourseGridLayout>
