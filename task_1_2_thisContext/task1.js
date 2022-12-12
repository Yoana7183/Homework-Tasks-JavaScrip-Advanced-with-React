// Fix the problem, so that we see in console numbers 1,2,3 instead of NaNs, on each click

// Do not change the object
const counter = {
        currentCount: 0,
        tick() {
            this.currentCount++;
            console.log(this.currentCount);
        }
    }

// fix the problem in countdown function
function countdown(times) {
delay = 10000;
setTimeout(() => {
    while(times){
		counter.tick(),
		times--;
	}
}, delay);

	
}

    countdown(3);

