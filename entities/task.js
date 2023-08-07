class task {
  id;
  title;
  description;
  status;
  deadline;
  commentThread;
  assignees;

  constructor(id, title, description, status, deadline, commentThread, assignees) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.deadline = deadline;
    this.commentThread = commentThread;
    this.assignees = assignees;
  }
}
