class Node{
    constructor(value){
        this.first= value;
        this.next=null;
    }
}
class MainQueue {
    constructor(value){
        const newNode= new Node(value)
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value){
        let newNode= new Node(value)
        if(this.length===0){
            this.first=newNode;
            this.last=newNode;
        }
        this.last.next=newNode;
        this.last=newNode;
        this.length++
        return this
    }
}

let Queue =new MainQueue(0)
Queue.enqueue(1);
console.log(Queue)