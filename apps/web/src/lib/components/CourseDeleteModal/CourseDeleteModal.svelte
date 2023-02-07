<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import classnames from 'classnames'

  export let courseId: string
  export let title: string
  export let action: string

  let isLoading = false
  let isModalOpen = false

  const toggleModal = () => {
    isModalOpen = !isModalOpen
  }
</script>

<button on:click={toggleModal} class={`btn btn-error ${isLoading ? `loading` : ''}`}>
  DELETE
</button>
<div class={classnames(['modal', { 'modal-open': isModalOpen }])}>
  <div class="modal-box">
    <h1 class="py-4 font-bold">
      {title}
    </h1>
    Are you sure want to delete this course?
    <div class="modal-action">
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
      <button on:click={toggleModal} class="btn">No</button>
    </div>
  </div>
</div>
