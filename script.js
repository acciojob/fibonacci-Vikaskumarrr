function fibonacci(num) {
	 if num <= 0:
        return "Input must be a positive integer"

    if num == 1:
        return 0
    elif num == 2:
        return 1
    else:
        a, b = 0, 1
        for _ in range(num - 2):
            a, b = b, a + b
        return a
}

module.exports = fibonacci;
