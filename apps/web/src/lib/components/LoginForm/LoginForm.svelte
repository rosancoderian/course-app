<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import Alert from '$lib/components/Alert/Alert.svelte'
  import Input from '$lib/components/Input/Input.svelte'
  import getError from '$lib/utils/getError'

  let errors: Record<string, any> = {}
  let isLoading = false
</script>

<form
  action="?/login"
  method="POST"
  class="flex flex-col items-center space-y-2 w-full pt-4"
  use:enhance={() => {
    isLoading = true
    return async ({ result, update }) => {
      isLoading = false
      if (result.type === 'failure') {
        errors = result?.data?.errors
      } else {
        applyAction(result)
      }
    }
  }}>
  {#if errors?.auth?.message}
    <Alert type="warning">{errors?.auth?.message}</Alert>
  {/if}
  <div class="form-control w-full max-w-md">
    <Input type="text" label="Email" name="email" error={getError(errors, 'email')} />
    <Input
      type="password"
      label="Password"
      name="password"
      error={getError(errors, 'password')} />
    <div class="pt-8">
      <button
        type="submit"
        class={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}>Login</button>
    </div>
  </div>
</form>
