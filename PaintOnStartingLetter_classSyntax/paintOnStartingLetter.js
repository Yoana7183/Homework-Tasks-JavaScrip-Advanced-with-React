// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// The Subject (Publisher) "class", (the SELECT element in example)
class Subject {
	constructor(observerList) {
		observerList = [];
	}
	registerObserver(observer) {
		this.observerList.push(observer);
	}
	unregisterObserver(observer) {
		// First we find the Observer that wants to be removed
		var index = this.observerList.indexOf(observer);
		// Remove the item from the array
		this.observerList.splice(index, 1);
	}
	notifyObservers() {
		observerList.forEach(el =>
			el.notify()
		)
	};

}
	




class Observer {

	notify() {
		throw "Observer.notify() Not Implemented!";
	}
}

// helper function to extend an object
// var augment = function(receiver, giver){
// for( key in giver){
// 	receiver[key] = giver[key];
// }
// }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// MAIN
var nodes = {
	subject: document.querySelector('.subject'),
	observers: document.querySelectorAll('.observers>li'),
}
// attach listeners:
document.addEventListener("DOMContentLoaded", function (event) {
	nodes.subject.addEventListener('input', (e) => {
		var letter = e.target.value;
		e.target.notifyObservers(letter);
	})
});

// make nodes.subject a Subject
var subject = new Subject();

// create Observers - each implements its own notify() method
var a = new Observer();
a.notif = () => {
	console.log(`I'm drinking coffie`);
}

var b = new Observer();
b.notif = () => {
	console.log(`I'm sitting down`);
}

// Register the observers
subject.registerObserver(a);
subject.registerObserver(b);
for (let observer of nodes.observers) {
		augment(observer, new Observer());
	
		observer.notify = function (letter) {
			var firstLetter = observer.innerHTML.charAt(0);
	
			if (firstLetter.toLowerCase() == letter.toLowerCase()) {
				observer.style.color = '#F00';
			} else {
				observer.style.color = '#999';
			}
		};
	
		// Register the observers to nodes.subject
		nodes.subject.registerObserver(observer);
	}


// // Unregister observer a
// subject.unregisterObserver(a);

// // change data and notify again
// data += 1;
// subject.notifyObservers(); 



// make each observer(LI element) an Observer
// for (let observer of nodes.observers) {
// 	augment(observer, new Observer());

// 	observer.notify = function (letter) {
// 		var firstLetter = observer.innerHTML.charAt(0);

// 		if (firstLetter.toLowerCase() == letter.toLowerCase()) {
// 			observer.style.color = '#F00';
// 		} else {
// 			observer.style.color = '#999';
// 		}
// 	};

// 	// Register the observers to nodes.subject
// 	nodes.subject.registerObserver(observer);
// }