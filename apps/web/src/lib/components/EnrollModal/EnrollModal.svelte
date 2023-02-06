<script lang="ts">
  export let id: string
  export let title: string
  export let action: string
</script>

<input {id} type="checkbox" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h1 class="py-4 font-bold">
      {title}
    </h1>
    Are you sure want to enroll to this course?
    <div class="modal-action">
      <label for={id} class="btn btn-error">No</label>
      <form {action} method="POST">
        <button type="submit" class="btn btn-primary">Yes</button>
      </form>
    </div>
  </div>
</div>
