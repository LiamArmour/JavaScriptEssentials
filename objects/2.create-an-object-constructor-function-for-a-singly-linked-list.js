'use strict';
var linkedList = function() {
    var instanceOfLinkedList = object.create(methodsOfLinkedList);
    instanceOfLinkedList.head = null;
    instanceOfLinkedList.tail = null;
    return instanceOfLinkedList;
};

var methodsOfLinkedList = {
    add: function(value) {
        var newNode = makeNode(value);

        if(!this.head) {
            this.head = newNode;
        }
        if(this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        },

    remove: function() {
        var currentNode = this.head;
        this.head = currentNode.next;
        currentNode = null;
    },

    contains: function(value) {
        var currentNode = this.head;
        while (currentNode) {
            if(currentNode.data === value) {
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }
};

var makeNode = function(value) {
    var instanceOfNode = {
        data: value,
        next: null
    };
    return instanceOfNode;
};