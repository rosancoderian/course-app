<script lang="ts">
  import classNames from 'classnames'

  export let maxCol: string | number = 5
</script>

<div
  class={classNames([
    'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    `2xl:grid-cols-${maxCol}`,
    'justify-items-stretch gap-4',
  ])}>
  <slot />
</div>
