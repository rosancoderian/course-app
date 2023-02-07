<script lang="ts">
  import Field from '../Field/Field.svelte'

  export let label: string
  export let name: string
  export let type = 'text'
  export let error = ''
  export let disabled = false
  export let required = false
</script>

<Field {name} {label} {error}>
  <input {type} {name} {disabled} {required} class="input input-bordered" />
</Field>
