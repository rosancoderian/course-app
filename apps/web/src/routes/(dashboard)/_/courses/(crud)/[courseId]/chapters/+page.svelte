<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import Breadcrumbs from '$lib/components/Breadcrumbs/Breadcrumbs.svelte'
  import ChapterCard from '$lib/components/ChapterCard/ChapterCard.svelte'
  import CreateCard from '$lib/components/CreateCard/CreateCard.svelte'
  import CourseGridLayout from '$lib/layouts/CourseGridLayout/CourseGridLayout.svelte'

  export let data: { chapters: any[] }

  const courseId = $page.params.courseId

  $: chapters = data.chapters

  const onClickEdit = (id: string) => {
    goto(`/_/courses/${courseId}/chapters/${id}`)
  }
</script>

<Breadcrumbs
  items={[
    { label: 'Courses', href: '/_/courses' },
    { label: courseId, href: `/_/courses/${courseId}` },
    { label: 'Chapters', href: `/_/courses/${courseId}/chapters` },
  ]} />
<div class="tabs mx-auto">
  <a class="tab tab-bordered" href={`/_/courses/${courseId}`}> Info </a>
  <a class="tab tab-bordered tab-active" href={`/_/courses/${courseId}/chapters`}>
    Chapters
  </a>
</div>

<div class="pt-6">
  <CourseGridLayout maxCol={4}>
    <CreateCard href={`/_/courses/${courseId}/chapters/create`} />
    {#each chapters as chapter}
      <ChapterCard {courseId} mode="edit" {...chapter} {onClickEdit} />
    {/each}
  </CourseGridLayout>
</div>
