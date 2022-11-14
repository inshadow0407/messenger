function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    constructor(authorName, sendTime, text){
        this.authorName=authorName;
        this.sendTime=sendTime;
        this.text=text
    }
    toString(){
        return this.sendTime +" "+ this.authorName + ": " +  this.text
    }
}
class Messenger {
    messageHistory=[];
    send(author, text){
        this.messageHistory.push(new Message(author,gettime(),text));
    }
    show_history(){
        this.messageHistory.forEach((value)=>{
            console.log(value.toString());
        })
    }
}

let messenger = new Messenger()
messenger.send('Артем', 'Первое сообщение')
messenger.send('Мария', 'Второе сообщение')
messenger.show_history()