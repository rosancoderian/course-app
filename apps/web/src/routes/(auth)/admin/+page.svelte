<script lang="ts">
  import LoginForm from '$lib/components/LoginForm/LoginForm.svelte'
  import AuthLayout from '$lib/layouts/AuthLayout/AuthLayout.svelte'
</script>

<AuthLayout>
  <span slot="title">Admin Login</span>
  <LoginForm />
</AuthLayout>
