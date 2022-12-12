// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// The Subject (Publisher) "class", (the SELECT element in example)
var Subject = function () {
    this.observerList = [];
}
Subject.prototype.registerObserver = function(observer) {
    this.observerList.push(observer);
}
Subject.prototype.unregisterObserver = function(observer) {
    // First we find the Observer that wants to be removed
    var index = this.observerList.indexOf(observer);
    // Remove the item from the array
    this.observerList.splice(index, 1);
}
Subject.prototype.notifyObservers = function(params) {
    for (let i = 0, len = this.observerList.length; i < len; i += 1) {
        this.observerList[i].notify(params);
    }
}

// The Observer "class"
var Observer = function() {
    // Each observer must! implement their own version of notify:
    this.notify = function() {
            throw "Observer.notify() Not Implemented!";
    }
}

// helper function to extend an object
var augment = function(receiver, giver){
for( key in giver){
    receiver[key] = giver[key];
}
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// MAIN
var nodes = {
subject: document.querySelector('.subject'),
observers: document.querySelectorAll('.observers>li'),
}
// attach listeners:
document.addEventListener("DOMContentLoaded", function(event) {
nodes.subject.addEventListener('input', (e)=>{
    var letter = e.target.value;
    e.target.notifyObservers(letter);
})
});

// make nodes.subject a Subject
augment( nodes.subject, new Subject() );

// make each observer(LI element) an Observer
for( let observer of nodes.observers){
augment( observer, new Observer());

observer.notify = function(letter){
    var firstLetter = observer.innerHTML.charAt(0);

    if( firstLetter.toLowerCase() == letter.toLowerCase() ){
        observer.style.color = '#F00';
    }else{
        observer.style.color = '#999';
    }
};

// Register the observers to nodes.subject
nodes.subject.registerObserver(observer);
}