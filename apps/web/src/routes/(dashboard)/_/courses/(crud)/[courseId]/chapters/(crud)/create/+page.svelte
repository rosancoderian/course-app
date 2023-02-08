<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { page } from '$app/stores'
  import Alert from '$lib/components/Alert/Alert.svelte'
  import Breadcrumbs from '$lib/components/Breadcrumbs/Breadcrumbs.svelte'
  import FileInput from '$lib/components/FileIInput/FileInput.svelte'
  import Input from '$lib/components/Input/Input.svelte'
  import TextArea from '$lib/components/TextArea/TextArea.svelte'
  import getError from '$lib/utils/getError'

  const courseId = $page.params.courseId

  let errors: Record<string, any> = {}
  let isLoading = false
</script>

<Breadcrumbs
  items={[
    { label: 'Courses', href: '/_/courses' },
    { label: courseId, href: `/_/courses/${courseId}` },
    { label: 'Chapters', href: `/_/courses/${courseId}/chapters` },
    { label: 'Create', href: `/_/courses/${courseId}/chapters/create` },
  ]} />
<div class="tabs mx-auto">
  <a class="tab tab-bordered" href={`/_/courses/${courseId}`}> Info </a>
  <a class="tab tab-bordered tab-active" href={`/_/courses/${courseId}/chapters`}>
    Chapters
  </a>
</div>

<form
  action="?/create"
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
    <Input type="text" label="Title" name="title" error={getError(errors, 'title')} />

    <TextArea name="article" label="Article" error={getError(errors, 'article')} />

    <FileInput
      type="image"
      name="image"
      label="Image"
      error={getError(errors, 'image')} />

    <FileInput
      type="image"
      name="media"
      label="Media"
      error={getError(errors, 'media')} />

    <FileInput
      name="attachment"
      label="Attachment"
      error={getError(errors, 'attachment')} />

    <div class="pt-8">
      <button
        type="submit"
        class={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}>Create</button>
    </div>
  </div>
</form>
