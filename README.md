# Lazy-Fibonnaci-Sequence-Generator #
Lazy Fibonacci Sequence Generator with Caching and User-Defined Range (Node.js)
This project provides a JavaScript generator function for calculating the Fibonacci sequence on demand, utilizing caching and allowing for user-defined ranges.

Features
Lazy Calculation: The generator yields Fibonacci numbers one by one, avoiding upfront calculation of the entire sequence and improving memory efficiency.
Caching Mechanism: A closure stores previously calculated Fibonacci numbers, enhancing performance for repeated requests.
User-Defined Range: The generator accepts a starting and ending index as arguments, enabling retrieval of a specific portion of the sequence.