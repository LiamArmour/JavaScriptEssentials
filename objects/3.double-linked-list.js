//Create an object constructor function for a doubly-linked list. This has all the functionality of a singly-linked
// list, but links to and manages the previous item also.

var firstNode = {
    data: 12,
    next: null,
    prev: null
};

var secondNode = {
    data: 99,
    prev: firstNode,    //set pointer #1
    next: null
};

firstNode.next = secondNode;    //set pointer #2

function DoublyLinkedList() {
    this._length = 0;
    this._head = null;
    this._tail = null;
}

DoublyLinkedList.prototype = {

    add: function (data){

        //create a new item object, place data in
        var node = {
            data: data,
            next: null,
            prev: null
        };

        //special case: no items in the list yet
        if (this._length == 0) {
            this._head = node;
            this._tail = node;
        } else {

            //attach to the tail node
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        //don't forget to update the count
        this._length++;

    },

    //more methods here
};

console.log(this._tail);
DoublyLinkedList();

