<script>
  import { page } from '$app/stores'
</script>

<p class="text-center text-lg font-bold">{$page.status}: {$page?.error?.message}</p>
<p class="text-center text-lg">
  <a class="link" on:click={() => history.back()}>Go Back</a>
</p>
