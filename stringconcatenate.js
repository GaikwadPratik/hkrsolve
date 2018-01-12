function mergeStrings(a, b) {
    if (!a && !b)
        return null;

    if (!a)
        return b;
    else if (!b)
        return a;

    try {

        let lenA = a.length;
        let lenB = b.length;

        let longerLen = lenA > lenB ? lenA : lenB;

        let _rtnVal = '';
        let _secondIndex = 0;

        for (let _index = 0; _index < longerLen; _index++) {
            if (a[_index])
                _rtnVal += a[_index];
            if (b[_index])
                _rtnVal += b[_index];
        }
        return _rtnVal;
    }
    catch (exception) {
        console.err(exception);
        return null;
    }

}