// Go ti serach menu -- write envrionemnt variable 
// -- Over two types of envrionment varaibles.
// What is the envrionment variable??
// it is key -value os string 
// Example
// Variable: PATH
// Value: C:\Program Files\nodejs\

// Internals

// Jab hum terminal me likhte hain kis file me:
// node index.js


// Internally conceptually kuch aisa hota hai:

// command = "node"
// to os dekhta hai command node kya hai?

// OS se PATH environment variable me check karta hai 
// path = getenv("PATH")

// par actually me PATH me :-/ "C:\Windows;C:\Windows\System32;C:\Program Files\nodejs;C:\Program Files\Git\cmd;C:\Users\AN\AppData\Roaming\npm"

// Semicolon (;) se split karo
// folders = split(path,';')

// // Result:
// folders[0] = "C:\Windows"
// folders[1] = "C:\Windows\System32"
// folders[2] = "C:\Program Files\nodejs"
// folders[3] = "C:\Program Files\Git\cmd"
// folders[4] = "C:\Users\AN\AppData\Roaming\npm"

// for(folder in folders){

//    // Check karo kya yaha npm executable hai
//    if(exists(folder + "\\npm.exe")){

//       // Mil gaya to execute kar do
//       run(folder + "\\npm.exe")

//       break;
//    }

// os ko node.exe mil jaati hai usko run kar deta hai
// to node.js now current folder index.js ko dhoodh kar uska code run kar deta hai


// main defination:- Environment Variable ek global/shared key-value storage hai jahan OS configuration rakhta hai aur yaha par har variable ka apna diff configuration mechanism hai. 