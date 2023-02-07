<script lang="ts">
  import getFileUrl from '$lib/utils/getFileUrl'
  import CourseDeleteModal from '../CourseDeleteModal/CourseDeleteModal.svelte'
  import CourseEnrollModal from '../CourseEnrollModal/CourseEnrollModal.svelte'

  export let id = ''
  export let title = ''
  export let image = ''
  export let desc = ''
  export let enrolled = false
  export let mode: 'enroll' | 'view' | 'edit' = 'enroll'
  export let onClickEdit: (id?: string) => void

  const imageSrc = getFileUrl('courses', id, image)
  const courseHref = `course/${id}`
</script>

<div class="card min-w-64 h-72 bg-base-100 border border-base-300 shadow-xl">
  <figure class="bg-base-200 w-full h-36">
    {#if image}
      <img class="object-cover w-full h-full" src={imageSrc} alt={title} />
    {/if}
  </figure>
  <div class="card-body p-4">
    <h2 class="card-title link"><a href={courseHref}>{title}</a></h2>
    <p class="truncate">{desc}</p>
    <div class="card-actions">
      {#if mode === 'enroll' && enrolled}
        <button class="btn btn-ghost hover:bg-white w-full font-bold">EROLLED</button>
      {:else if mode === 'enroll' && !enrolled}
        <CourseEnrollModal
          courseId={id}
          title={`Enroll to ${title}`}
          action={'?/enroll'} />
      {:else if mode === 'view'}
        <a href={`/course/${id}`} class="btn btn-primary w-full">VIEW</a>
      {:else if mode === 'edit'}
        <div class="flex gap-2 w-full">
          <button
            class="btn btn-primary grow"
            on:click={() => onClickEdit && onClickEdit(id)}>EDIT</button>
          <CourseDeleteModal
            courseId={id}
            title={`Delete ${title}!`}
            action="?/deleteCourse" />
        </div>
      {/if}
    </div>
  </div>
</div>
