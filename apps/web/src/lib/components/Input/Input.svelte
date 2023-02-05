<script lang="ts">
  export let label: string
  export let name: string
  export let type: string
  export let error: string
</script>

<label for={name} class="label font-medium pb-1">
  <span class="label-text">{label}</span>
</label>
<input {type} {name} class="input input-bordered" />
<span class="text-error">{error ? error : ''}</span>
