function consecutive(num) {
    let _sumOfIntegers = 3;
    let _count = 0;
    for (let _index = 2; _sumOfIntegers <= num; ++_index) {
        if (((_index % 2) === 0) ? ((num % _index) === (_index / 2)) : ((num % _index) === 0)) {
            ++_count;
        }
        _sumOfIntegers = _sumOfIntegers + _index + 1;
    }
    return _count;
}

console.log(consecutive(15));