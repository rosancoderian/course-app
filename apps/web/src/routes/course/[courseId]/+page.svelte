<script lang="ts">
  import { page } from '$app/stores'
  import CourseEnrollModal from '$lib/components/CourseEnrollModal/CourseEnrollModal.svelte'
  import Menu from '$lib/components/Menu/Menu.svelte'
  import DashboardLayout from '$lib/layouts/DashboardLayout/DashboardLayout.svelte'
  import getFileUrl from '$lib/utils/getFileUrl'

  export let data: { course: any; chapters: any[]; enrollment: any }

  let selectedChapterIndex: any = null

  $: course = data.course
  $: chapters = data.chapters
  $: enrollment = data.enrollment
  $: selectedChapter = chapters[selectedChapterIndex - 1] ?? null
  $: chapterMenus = chapters.map((ch, i) => ({
    label: `${i + 1}. ${ch.title}`,
    active: selectedChapterIndex === i + 1,
    onClick: () => (selectedChapterIndex = i + 1),
  }))
</script>

<DashboardLayout>
  <span slot="side">
    <p class="text-lg font-semibold pb-4">Chapters</p>
    <div class="font-semibold">
      <Menu
        style="xl:w-64"
        menus={[
          {
            label: 'Cover',
            active: !selectedChapterIndex,
            onClick: () => (selectedChapterIndex = null),
          },
          ...chapterMenus,
        ]} />
    </div>
  </span>
  {#if selectedChapter}
    <div class="flex flex-col justify-center justify-items-center">
      <div>
        <img
          class="w-full h-48 object-cover"
          src={getFileUrl('chapters', selectedChapter.id, selectedChapter.image)}
          alt={selectedChapter.title} />
      </div>
      <h1 class="text-center text-3xl font-bold py-6">{selectedChapter.title}</h1>
      <div class="w-full max-w-lg mx-auto my-6 bg-base-300">
        <video class="w-full">
          <track kind="captions" />
          <source
            src={getFileUrl('chapters', selectedChapter.id, selectedChapter.media)} />
          <img
            src={getFileUrl('chapters', selectedChapter.id, selectedChapter.media)}
            alt={selectedChapter.title} />
        </video>
      </div>
      {#if selectedChapter.attachment}
        <p class="xl:px-16 font-bold pb-6">
          Attachment: <a
            class="link font-normal"
            href={getFileUrl('chapters', selectedChapter.id, selectedChapter.attachment)}
            >{selectedChapter.attachment}</a>
        </p>
      {/if}
      <p class="xl:px-16">{@html selectedChapter.article}</p>
    </div>
  {:else}
    <div class="flex flex-col justify-center justify-items-center">
      <div>
        <img
          class="w-full h-48 object-cover"
          src={getFileUrl('courses', course.id, course.image)}
          alt={course.title} />
      </div>
      <h1 class="text-center text-3xl font-bold mb-6">{course.title}</h1>
      <p class="text-center">{course.desc}</p>
      {#if !enrollment}
        <div class="flex justify-center py-6">
          <CourseEnrollModal
            courseId={course.id}
            title={`Enroll to ${course.title}`}
            action={'/?/enroll'}
            style="w-[120px] mx-auto" />
        </div>
      {/if}
    </div>
  {/if}
</DashboardLayout>
