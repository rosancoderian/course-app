<script lang="ts">
  import Field from '$lib/components/Field/Field.svelte'

  export let label: string
  export let name: string
  export let type = 'text'
  export let error = ''
  export let disabled = false
  export let required = false
  export let value: string = ''
</script>

<Field {name} {label} {error}>
  <input {type} {name} {disabled} {required} {value} class="input input-bordered" />
</Field>
