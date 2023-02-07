<script lang="ts">
  export let label: string
  export let name: string
  export let error = ''
</script>

<label for={name} class="label font-medium pb-1">
  <span class="label-text">{label}</span>
</label>
<slot />
<span class="text-error">{error ? error : ''}</span>
