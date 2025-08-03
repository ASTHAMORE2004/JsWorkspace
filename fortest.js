console.log("This is a test file for logging purposes.");
for(let userscore=0;userscore<10;userscore++) {
    
    if (userscore ==5) {
        console.log("The score hites 5 Skipping score 5");
        continue; // Skip the iteration when userscore is 5
    }
    console.log("User score: " + userscore);
}
console.log("End of test file.");