// Q 72
// Demonstrating block scope
{
    var blockLet = "visible inside the block";
    var blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}
