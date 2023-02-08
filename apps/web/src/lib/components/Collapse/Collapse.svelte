<script lang="ts">
  import classNames from 'classnames'

  export let tabindex: number = 0
  export let title: string = ''
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
  {tabindex}
  class={classNames([
    'collapse collapse-arrow border border-base-300 bg-base-100 rounded-box',
  ])}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="collapse-title text-md font-medium hover:cursor-pointer">
    {title}
  </div>
  <div class="collapse-content">
    <slot />
  </div>
</div>
