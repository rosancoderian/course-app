<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import Input from '$lib/components/Input/Input.svelte'
  import AccountLayout from '$lib/layouts/AccountLayout/AccountLayout.svelte'
  import getFormError from '$lib/utils/getFormError'

  let errors: Record<string, any> = {}
  let isLoading = false
</script>

<AccountLayout>
  <span slot="title">Register</span>
  <span slot="subTitle">
    Or <a href="/login" class="link">Login </a> with existing account
  </span>

  <form
    use:enhance={({ form, data, action, cancel }) => {
      isLoading = true
      return async ({ result, update }) => {
        isLoading = false
        if (result.type === 'failure') {
          errors = result?.data?.errors
        } else {
          applyAction(result)
        }
      }
    }}
    action="?/register"
    method="POST"
    class="flex flex-col items-center space-y-2 w-full pt-4"
  >
    <div class="form-control w-full max-w-md">
      <Input
        type="text"
        label="Username"
        name="username"
        error={getFormError(errors, 'username')}
      />
      <Input
        type="text"
        label="Email"
        name="email"
        error={getFormError(errors, 'email')}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        error={getFormError(errors, 'password')}
      />
      <Input
        type="password"
        label="Password Confirm"
        name="passwordConfirm"
        error={getFormError(errors, 'passwordConfirm')}
      />
      <div class="pt-8">
        <button
          type="submit"
          class={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}>Register</button
        >
      </div>
    </div>
  </form>
</AccountLayout>
