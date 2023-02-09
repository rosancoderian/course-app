<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import classnames from 'classnames'

  export let courseId: string
  export let title: string
  export let action: string
  export let style: string = ''

  let isLoading = false
  let isModalOpen = false

  const toggleModal = () => {
    isModalOpen = !isModalOpen
  }
</script>

<button
  on:click={toggleModal}
  class={classnames([
    `btn btn-primary w-full`,
    { loading: isLoading },
    { [style]: !!style },
  ])}>
  ENROLL
</button>
<div class={classnames(['modal', { 'modal-open': isModalOpen }])}>
  <div class="modal-box">
    <h1 class="py-4 font-bold">
      {title}
    </h1>
    Are you sure want to enroll to this course?
    <div class="modal-action">
      <button on:click={toggleModal} class="btn btn-error">No</button>
      <form
        {action}
        method="POST"
        use:enhance={() => {
          isLoading = true
          isModalOpen = false
          return ({ result }) => {
            isLoading = false
            applyAction(result)
          }
        }}>
        <input type="hidden" name="courseId" value={courseId} />
        <button type="submit" class="btn btn-primary">Yes</button>
      </form>
    </div>
  </div>
</div>
