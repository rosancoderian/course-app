<script lang="ts">
  import { applyAction, enhance } from '$app/forms'

  let errors: Record<string, any> = {}
  let isLoading = false
</script>

<div class="flex flex-col item-center h-full w-full">
  <h2 class="mt-2 text-center text-3x font-bold">Register Account</h2>
  <p class="text-center mt-1">
    Or <a
      href="/login"
      class="text-primary font-medium hover:cursor-pointer hover:underline"
      >Login
    </a> with existing account
  </p>
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
      <label for="name" class="label font-medium pb-1">
        <span class="label-text">Username</span>
      </label>
      <input type="text" name="username" class="input input-bordered" />
      <span class="text-error"
        >{errors?.username ? errors?.username?.message : ''}</span
      >

      <label for="name" class="label font-medium pb-1">
        <span class="label-text">Email</span>
      </label>
      <input type="email" name="email" class="input input-bordered" />
      <span class="text-error"
        >{errors?.email ? errors?.email?.message : ''}</span
      >

      <label for="name" class="label font-medium pb-1">
        <span class="label-text">Password</span>
      </label>
      <input type="password" name="password" class="input input-bordered" />
      <span class="text-error"
        >{errors?.password ? errors?.password?.message : ''}</span
      >

      <label for="name" class="label font-medium pb-1">
        <span class="label-text">Password Confirm</span>
      </label>
      <input
        type="password"
        name="passwordConfirm"
        class="input input-bordered"
      />
      <span class="text-error"
        >{errors?.passwordConfirm ? errors?.passwordConfirm?.message : ''}</span
      >

      <div class="pt-8">
        <button
          type="submit"
          class={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}>Register</button
        >
      </div>
    </div>
  </form>
</div>
