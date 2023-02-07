<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import Alert from '$lib/components/Alert/Alert.svelte'
  import Field from '$lib/components/Field/Field.svelte'
  import Input from '$lib/components/Input/Input.svelte'
  import getError from '$lib/utils/getError'

  let errors: Record<string, any> = {}
  let isLoading = false
</script>

<div class="flex flex-col item-center h-full w-full">
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
      <Field name="desc" label="Desc" error={getError(errors, 'desc')}>
        <textarea name="desc" class="textarea textarea-bordered h-24 resize-none" />
      </Field>
      <Field name="image" label="Image" error={getError(errors, 'image')}>
        <input type="file" name="image" class="file-input w-full max-w-xs" />
      </Field>
      <div class="pt-8">
        <button
          type="submit"
          class={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}>Create</button>
      </div>
    </div>
  </form>
</div>
