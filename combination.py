#def Combinations(number):
    #"""
    #"""
    #ct = 0
    #num = number

    # Remove code and use division and reminder code
    #for x in str(number):
    #    if(x == '0'):
    #        ct += 1
    
    #digits = len(str(number))
    #s = set(str(number))    
    #dif = (digits - len(s)) + 1 + ct
    #n1 = factorial(digits)    
    #n2 = factorial(dif)
    #return (n1/n2)



def Combinations(number):
    """
    formula used should be like this ((n - count of 0) * (n-1)!)/ multiplication of (repeated number count)!
    """
    _rtnVal = -1
    _nDigitCount = len(str(number))

    _dicNumber = {}

    _num = number

    while _num:
        _rem = _num % 10
        _num //= 10

        if(_rem in _dicNumber):
            _dicNumber[_rem] += 1
        else:
            _dicNumber[_rem] = 1

    _numerator = 1

    if 0 in _dicNumber:
        _numerator = ((_nDigitCount - _dicNumber[0]) * factorial(_nDigitCount - 1))
    else:
        _numerator = factorial(_nDigitCount)

    _denominator = 1

    for key, value in _dicNumber.items():
        if(value > 1):
            _denominator = _denominator * factorial(value)

    _rtnVal = _numerator / _denominator
    
    return _rtnVal


def factorial(number):
    """
    Function to calculate factorial of the number
    """
    if number == 0:
        return 1
    else:
        return number * factorial(number-1)


print(Combinations(100))
