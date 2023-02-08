<script lang="ts">
  import Field from '$lib/components/Field/Field.svelte'

  export let label: string
  export let name: string
  export let error: string = ''
  export let value: string = ''
</script>

<Field {name} {label} {error}>
  <textarea name="desc" class="textarea textarea-bordered h-24 resize-none"
    >{value}</textarea>
</Field>
