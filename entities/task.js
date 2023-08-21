class task {
  id;
  title;
  description;
  status;
  deadline;
  commentThread;

  constructor(id, title, description, status, deadline, commentThread) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.deadline = deadline;
    this.commentThread = commentThread;
  }
}
