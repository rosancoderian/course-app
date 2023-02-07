<script lang="ts">
  import LoginForm from '$lib/components/LoginForm/LoginForm.svelte'
  import AuthLayout from '$lib/layouts/AuthLayout/AuthLayout.svelte'
</script>

<AuthLayout>
  <span slot="title">Login</span>
  <span slot="subTitle">
    Or <a href="/register" class="link">Register </a> a new account
  </span>
  <LoginForm />
</AuthLayout>
