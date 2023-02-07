<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import Alert from '$lib/components/Alert/Alert.svelte'
  import Field from '$lib/components/Field/Field.svelte'
  import Input from '$lib/components/Input/Input.svelte'
  import getError from '$lib/utils/getError'
  import getFileUrl from '$lib/utils/getFileUrl'

  export let data: { course: Record<string, any> }

  let errors: Record<string, any> = {}
  let isLoading = false

  $: course = data.course

  $: imageSrc = getFileUrl('courses', course.id, course.image)
</script>

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
      value={course.title}
      error={getError(errors, 'title')} />
    <Field name="desc" label="Desc" error={getError(errors, 'desc')}>
      <textarea name="desc" class="textarea textarea-bordered h-24 resize-none"
        >{course.desc}</textarea>
    </Field>

    <Field name="image" label="Image" error={getError(errors, 'image')}>
      {#if course.image}
        <div class="bg-base-200 w-full h-36 border">
          <img class="object-cover w-full h-full" src={imageSrc} alt={course.title} />
        </div>
        <div class="my-2">
          <button class="btn btn-accent btn-xs" formaction="?/deleteImage">
            REMOVE
          </button>
          <a class="link" href={imageSrc} target="_blank" rel="noreferrer">
            {course.image}
          </a>
        </div>
      {/if}
      <input type="file" name="image" class="file-input w-full max-w-xs" />
    </Field>
    <div class="pt-8">
      <button
        type="submit"
        class={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}>Save</button>
    </div>
  </div>
</form>
