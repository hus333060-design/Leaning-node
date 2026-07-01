// Process
// = running program
// has memory, resources, PID

// Thread
// = smallest execution unit inside process

// One process can have multiple threads
// A thread executes on one CPU core at a time.

// One process can contain multiple threads.
// Different threads may run on different cores.

// ex:- browser:- yt video + download file 
// we have a single core cpu how it will excute them??
// there it will be do context swiching such that for a while excute video and for a while download file.. that way it will be excute both program , if you have dual core no worry mtlb dono threaded ko separtly threded allocate kar dega.

// Now see in you pc threaded by Process hacker
// Go to process-- and it is properties it will be show all threaded realted info as in ppid,pid.

// Let's do one exercise :- make process's thread
// you have seen in our system node have 13 bydeaults threaded
// you will 0nly one theaded will be increase 13 --- 14
// it is taking so long , how about if we it own thread it will be work fast.


// for (let i = 1; i <=1000000000; i++) {

//     if(i %500000000 == 0){
//         console.log(i);
        
//     }
    
// }

// for (let i = 1; i <=1000000000; i++) {

//     if(i %500000000 == 0){
//         console.log(i);
        
//     }
    
// }
// for (let i = 1; i <=1000000000; i++) {

//     if(i %500000000 == 0){
//         console.log(i);
        
//     }
    
// }

/// making threades
// const { Worker } = require("worker_threads");

// new Worker("./a.js");
// new Worker("./ab.js");
// new Worker("./abc.js");
// threade 13 - 16  it is using parallelism :- mutiple tasks excute at a time

// main threaded is always attach to every process whenever process go to excute actually this main thread goes there. but you can see system level threads 