<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { page } from '$app/stores'
  import Alert from '$lib/components/Alert/Alert.svelte'
  import Breadcrumbs from '$lib/components/Breadcrumbs/Breadcrumbs.svelte'
  import FileInput from '$lib/components/FileIInput/FileInput.svelte'
  import Input from '$lib/components/Input/Input.svelte'
  import TextArea from '$lib/components/TextArea/TextArea.svelte'
  import getError from '$lib/utils/getError'
  import getFileUrl from '$lib/utils/getFileUrl'

  export let data: { chapter: any }

  const courseId = $page.params.courseId
  const chapterId = $page.params.chapterId

  let errors: Record<string, any> = {}
  let isLoading = false

  $: chapter = data.chapter
  $: imageSrc = getFileUrl('chapters', chapterId, chapter.image)
  $: mediaSrc = getFileUrl('chapters', chapterId, chapter.media)
  $: AttachmentSrc = getFileUrl('chapters', chapterId, chapter.attachment)
</script>

<Breadcrumbs
  items={[
    { label: 'Courses', href: '/_/courses' },
    { label: courseId, href: `/_/courses/${courseId}` },
    { label: 'Chapters', href: `/_/courses/${courseId}/chapters` },
    { label: chapter.id, href: `/_/courses/${courseId}/chapters/${chapter.id}` },
  ]} />
<div class="tabs mx-auto">
  <a class="tab tab-bordered" href={`/_/courses/${courseId}`}> Info </a>
  <a class="tab tab-bordered tab-active" href={`/_/courses/${courseId}/chapters`}>
    Chapters
  </a>
</div>

<form
  action="?/update"
  method="POST"
  enctype="multipart/form-data"
  class="flex flex-col items-center gap-2 pt-4"
  use:enhance={() => {
    isLoading = true
    return async ({ result }) => {
      isLoading = false
      if (result.type === 'failure') {
        errors = result?.data?.errors
      } else {
        applyAction(result)
      }
    }
  }}>
  {#if errors?.default?.message}
    <Alert type="warning" style="max-w-xl">{errors?.default?.message}</Alert>
  {/if}

  <div class="form-control w-full max-w-xl">
    <Input
      type="text"
      label="Title"
      name="title"
      value={chapter.title}
      error={getError(errors, 'title')} />

    <TextArea
      name="article"
      label="Article"
      value={chapter.article}
      error={getError(errors, 'article')} />

    <FileInput
      name="image"
      label="Image"
      type="image"
      file={chapter.image}
      src={imageSrc}
      error={getError(errors, 'image')} />

    <FileInput
      name="media"
      label="Video"
      deleteAction={'?/deleteMedia'}
      file={chapter.media}
      src={mediaSrc}
      error={getError(errors, 'media')} />

    <FileInput
      name="attachment"
      label="Attachment"
      deleteAction={'?/deleteAttachment'}
      file={chapter.attachment}
      src={AttachmentSrc}
      error={getError(errors, 'attachment')} />

    <div class="pt-8">
      <button
        type="submit"
        class={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}>Save</button>
    </div>
  </div>
</form>
