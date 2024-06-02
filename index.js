function* fibonacci(start = 0, end = Infinity) {
    // Cache for previously calculated Fibonacci numbers
    const cache = {};
  
    // Function to calculate the nth Fibonacci number
    function fib(n) {
      if (n in cache) {
        return cache[n];
      } else if (n <= 1) {
        return n;
      } else {
        const result = fib(n - 1) + fib(n - 2);
        cache[n] = result;
        return result;
      }
    }
  
    // Generator loop
    let current = start;
    while (current < end) {
      yield fib(current);
      current++;
    }
  }
  
  // Example usage
  for (const num of fibonacci(5, 10)) {
    console.log(num); // Prints 5, 8, 13, 21
  }
  
  // Another example with custom start and end
  const customSequence = fibonacci(10, 15);
  console.log(customSequence.next().value); // Prints 34 (15th Fibonacci number)
  