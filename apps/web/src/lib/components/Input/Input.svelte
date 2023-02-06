<script lang="ts">
  export let label: string
  export let name: string
  export let type = 'text'
  export let error = ''
  export let disabled = false
  export let required = false
</script>

<label for={name} class="label font-medium pb-1">
  <span class="label-text">{label}</span>
</label>
<input {type} {name} {disabled} {required} class="input input-bordered" />
<span class="text-error">{error ? error : ''}</span>
