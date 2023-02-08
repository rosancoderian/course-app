<script lang="ts">
  import Field from '$lib/components/Field/Field.svelte'

  export let label: string
  export let name: string
  export let src: string = ''
  export let file: string = ''
  export let type: 'image' | 'file' = 'file'
  export let error = ''
  export let deleteAction = '?/deleteImage'
</script>

<Field {name} {label} {error}>
  {#if type === 'image' && file}
    <div class="bg-base-200 w-full h-36 border">
      <img class="object-cover w-full h-full" {src} alt={label} />
    </div>
  {/if}
  {#if file}
    <div class="my-2">
      <button class="btn btn-accent btn-xs" formaction={deleteAction} {name}>
        REMOVE
      </button>
      <a class="link" href={src} target="_blank" rel="noreferrer">
        {file}
      </a>
    </div>
  {/if}
  <input type="file" {name} class="file-input w-full max-w-xs" />
</Field>
