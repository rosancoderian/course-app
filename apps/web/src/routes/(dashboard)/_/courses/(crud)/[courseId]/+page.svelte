<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { page } from '$app/stores'
  import Alert from '$lib/components/Alert/Alert.svelte'
  import Breadcrumbs from '$lib/components/Breadcrumbs/Breadcrumbs.svelte'
  import Field from '$lib/components/Field/Field.svelte'
  import FileInput from '$lib/components/FileIInput/FileInput.svelte'
  import Input from '$lib/components/Input/Input.svelte'
  import TextArea from '$lib/components/TextArea/TextArea.svelte'
  import getError from '$lib/utils/getError'
  import getFileUrl from '$lib/utils/getFileUrl'

  export let data: { course: Record<string, any>; chapters: any[] }

  const courseId = $page.params.courseId

  let errors: Record<string, any> = {}
  let isLoading = false

  $: course = data.course
  $: imageSrc = getFileUrl('courses', courseId, course.image)
</script>

<Breadcrumbs items={[{ label: 'Courses', href: '/_/courses' }, { label: courseId }]} />
<div class="tabs mx-auto">
  <a class="tab tab-bordered tab-active" href={`/_/courses/${courseId}`}> Info </a>
  <a class="tab tab-bordered" href={`/_/courses/${courseId}/chapters`}> Chapters </a>
</div>

<form
  action="?/update"
  method="POST"
  enctype="multipart/form-data"
  class="flex flex-col items-center gap-2 pt-4"
  use:enhance={({ data }) => {
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
      value={course.title}
      error={getError(errors, 'title')} />

    <TextArea
      name="desc"
      label="Desc"
      value={course.desc}
      error={getError(errors, 'desc')} />

    <Field name="is_published" label="Publish" error={getError(errors, 'is_published')}>
      <input
        name="is_published"
        type="checkbox"
        class="toggle toggle-primary"
        value="1"
        checked={course.is_published} />
    </Field>

    <FileInput
      type="image"
      label="Image"
      name="image"
      file={course.image}
      src={imageSrc}
      error={getError(errors, 'image')} />

    <div class="pt-8">
      <button
        type="submit"
        class={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}>Save</button>
    </div>
  </div>
</form>
