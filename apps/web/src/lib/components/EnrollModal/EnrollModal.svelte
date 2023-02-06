<script lang="ts">
  export let id: string
  export let title: string
</script>

<input {id} type="checkbox" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <label for={id} class="btn btn-sm btn-circle absolute right-2 top-2"
      >✕</label
    >
    <h1 class="py-4 font-bold">
      {title}
    </h1>
    Are you sure want to enroll to this course?
    <div class="modal-action">
      <label for={id} class="btn btn-primary">Yes</label>
    </div>
  </div>
</div>
