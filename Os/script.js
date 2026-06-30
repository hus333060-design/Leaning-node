// Process = program ka running instance
// OS process ko CPU time, memory, resources deta hai.

// Example:
// Chrome open → ek ya multiple processes
// node app run → ek process

// Task Manager / Process Explorer / Process Hacker
// → running processes dekh sakte ho

// Har process ka:
// PID  = Process ID
// PPID = Parent Process ID (kis process ne launch kiya)

// Example:
// VS Code terminal se node app run ki
// terminal → parent
// node → child process

// System Idle Process (Windows)
// → kitna CPU unused hai
// Example:
// Idle = 92%
// matlab approx 8% CPU use ho raha

// Context Switching
// CPU ek process se dusre process par switch karta hai
// taaki multiple programs parallel jaise lage

// Node.js bhi ek process hota hai

// console.log(process);

// // process object useful fields:
// console.log(process.pid);    // current node process id
// console.log(process.ppid);   // parent process id

// Infinite loop:
// while(true){}

// isse ek CPU core heavily busy ho sakta hai