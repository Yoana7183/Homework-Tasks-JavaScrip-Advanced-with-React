
let curr = 1
let prev = 0
let res;
for (i = 0; i <= 10; i++) {
    res = prev + curr
    prev = curr
    curr = res
    console.log(res);

}

