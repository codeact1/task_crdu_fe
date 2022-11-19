function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        window.location.href = "/delete/" + id;
    }