<script lang="ts">
  import getFileUrl from '$lib/utils/getFileUrl'
  import DeleteModal from '$lib/components/DeleteModal/DeleteModal.svelte'

  export let id = ''
  export let title = ''
  export let image = ''
  export let courseId: string
  export let onClickEdit: (id?: string) => void

  $: imageSrc = getFileUrl('chapters', id, image)
  $: courseHref = `/_/courses/${courseId}/chapters/${id}`
</script>

<div class="card min-w-64 h-72 bg-base-100 border border-base-300 shadow-xl">
  <figure class="bg-base-200 w-full h-36">
    {#if image}
      <img class="object-cover w-full h-full" src={imageSrc} alt={title} />
    {/if}
  </figure>
  <div class="card-body p-4">
    <h2 class="card-title link"><a href={courseHref}>{title}</a></h2>
    <p />
    <div class="card-actions">
      <div class="flex gap-2 w-full">
        <button
          class="btn btn-primary grow"
          on:click={() => onClickEdit && onClickEdit(id)}>
          EDIT
        </button>

        <DeleteModal
          {id}
          name="chapterId"
          title={`Delete ${title}!`}
          action="?/deleteChapter" />
      </div>
    </div>
  </div>
</div>
