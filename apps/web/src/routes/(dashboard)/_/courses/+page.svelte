<script lang="ts">
  import CourseCard from '$lib/components/CourseCard/CourseCard.svelte'
  import CourseCreateCard from '$lib/components/CourseCreateCard/CourseCreateCard.svelte'
  import CourseGridLayout from '$lib/layouts/CourseGridLayout/CourseGridLayout.svelte'

  export let data: { courses: any[] }

  $: courses = data.courses

  const onClickEdit = (id: string) => {
    console.log(id)
  }
</script>

<CourseGridLayout maxCol={4}>
  <CourseCreateCard />
  {#each courses as course}
    <CourseCard mode="edit" {...course} {onClickEdit} />
  {/each}
</CourseGridLayout>
