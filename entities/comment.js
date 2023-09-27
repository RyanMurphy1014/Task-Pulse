class comment {
  id;
  author;
  text;
  replyId;
  dateCreated;
  dateModified;

  constructor(id, author, text) {
    this.id = id;
    this.author = author;
    this.text = text;
  }
    setdateModified(dateModified){
        this.dateModified = dateModified
    }
    setdateCreated(dateCreated){
        this.dateCreated = dateCreated
    }
    setreplyId(replyId){
        this.replyId = replyId
    }
    settext(text){
        this.text = text
    }
    setAuthor(author){
        this.author = author;
    }
    getAuthor(){
        return author;
    }
    setId(id){
        this.id = id
    }
    getId(){
        return this.id;
    }
}
