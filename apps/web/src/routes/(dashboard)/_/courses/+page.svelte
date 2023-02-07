<script lang="ts">
  import { goto } from '$app/navigation'
  import Breadcrumbs from '$lib/components/Breadcrumbs/Breadcrumbs.svelte'
  import CourseCard from '$lib/components/CourseCard/CourseCard.svelte'
  import CourseCreateCard from '$lib/components/CourseCreateCard/CourseCreateCard.svelte'
  import CourseGridLayout from '$lib/layouts/CourseGridLayout/CourseGridLayout.svelte'

  export let data: { courses: any[] }

  $: courses = data.courses

  const onClickEdit = (id: string) => {
    goto(`/_/courses/${id}`)
  }
</script>

<Breadcrumbs items={[{ label: 'Courses' }]} />
<CourseGridLayout maxCol={4}>
  <CourseCreateCard />
  {#each courses as course}
    <CourseCard mode="edit" {...course} {onClickEdit} />
  {/each}
</CourseGridLayout>
