class commentThread {
  comments = [];
  //Must pass in array of comments
  constructor(comments) {
    this.comments = comments;
  }
    getComments(){
        return this.comments;
    }
    setComments(thread){
        this.comments = thread;
    }
}
