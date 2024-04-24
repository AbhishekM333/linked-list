 class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value, this.head);

        } else {
            let current = this.head

            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = new Node(value);
        }
        this.size++;
    }

    get Size() {
        return this.size;
    }
    get Head(){
        return this.head.value;
    }
    
   get Tail(){
     let current=this.head;
     while(current.nextNode!==null){
        current=current.nextNode;
     }
     return current.value;

   }
   
   atIndex(value) {
    let current = this.head;

    for (let x = 0; x < value; x++) {
        current = current.nextNode;
    }

    return current.value;
  }

    pop() {
    let current = this.head
    while (current.nextNode!== null) {
        current = current.nextNode;
    }
    current.nextNode = null;
    this.size--;

  }

  contains(value){
   let current=this.head
    while(current!==null){
        if(current.value==value){
            return true;
        }
        else{
            current=current.nextNode
        }
    }
    return false;
  }
   
  find(value){

  let current=this.head
  let index=0

  while(current!==0){
    if(current.value===value){
        return index;
    }
    else{
        current=current.nextNode;
        index++
    }
  }
    return null;
  }

  toString() {
    let current = this.head
    let string = '';

    while (current !== null) {
        string += `( ${current.value} ) -> `;
        current = current.nextNode;
    }
    string += `null`;
    return string;
}

 insertAt(value, index) {
    let current = this.head;

    for (let x = 0; x < index - 1; x++) {
        current = current.nextNode;
    }
    current.nextNode = new Node(value, current.nextNode);
    this.size++;
}

removeAt(index) {
    let current = this.head;

    for (let x = 0; x < index - 1; x++) {
        current = current.nextNode;
    }
    current.nextNode = current.nextNode.nextNode;
}


}


const list = new LinkedList();


list.prepend('yes');
list.append('noooo');
list.append('heyyy');
list.append('helloo');

console.log(list.Size);
console.log(list.Head);
console.log(list.Tail);
console.log(list.atIndex(3));
console.log(list.contains('helloo'));
console.log(list.find('noooo'));
console.log(list.toString());

list.insertAt('oooooo',4)
console.log(list.atIndex(4));

list.removeAt(3)
console.log(list.toString());


