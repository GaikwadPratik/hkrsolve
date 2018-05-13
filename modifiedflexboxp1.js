function getWidthInformation(div) {
    if (div && div.width && div.children) {
        let rtnVal = '';
        let containerWidth = div.width;
        containerWidth = sizeToInt(containerWidth);
        let childWidth = [];
        let growthFactorMultiplier = 25;
        let shrinkFactorMultiplier = 40;

        for (let _child of div.children) {
            _child.width = sizeToInt(_child.width);
        }

        let totalChildWidth = calculateChildwidht(div);

        if (totalChildWidth === containerWidth) {
            _rtnVal = formOutput(div);
            return _rtnVal;
        }

        if (containerWidth > totalChildWidth) {
            // for (let _child of div.children) {
            //     _child.width = _child.width + (growthFactorMultiplier * parseInt(_child.growthFactor));
            //     let newWidth = calculateChildwidht(div);
            //     if (newWidth > containerWidth)
            //         break;
            // }
            let newgainFactor = 0;
            for(let _child of div.children){
                newgainFactor += div.growthFactor;
            }

            let muli = (containerWidth - totalChildWidth)/newgainFactor;

            for (let _child of div.children)
                _child.width = _child.width + (muli * parseInt(_child.growthFactor));

            _rtnVal = formOutput(div);
            return _rtnVal;
        }

        if (containerWidth < totalChildWidth) {
            // for (let _child of div.children) {
            //     _child.width = _child.width - (shrinkFactorMultiplier * parseInt(_child.shrinkFactor));
            //     let newWidth = calculateChildwidht(div);
            //     if (newWidth > containerWidth)
            //         break;
            // }
            let newShrinkFactor = 0;
            for(let _child of div.children){
                newShrinkFactor += div.growthFactor;
            }

            muli = (totalChildWidth - containerWidth)/newShrinkFactor;


            for (let _child of div.children)
                _child.width = _child.width - (muli * parseInt(_child.shrinkFactor));

            _rtnVal = formOutput(div);
            return _rtnVal;
        }

    }
    else
        return null;
}

function formOutput(div){
    let _rtnVal = '';
    for (let _child of div.children) {
        _rtnVal += _child.width + ' ';
    }
    _rtnVal = _rtnVal.trim();
    return _rtnVal;
}

function calculateChildwidht(div) {
    let totalChildWidth = 0;
    for (let _child of div.children) {
        totalChildWidth += _child.width;
    }
    return totalChildWidth;
}

function sizeToInt(strSize) {
    return parseInt(strSize.replace("px", ""));
}

let input = { "width": "500px", "children": [{ "width": "200px", "growthFactor": 1, "shrinkFactor": 3 }, { "width": "200px", "growthFactor": 3, "shrinkFactor": 2 }] };

console.log(getWidthInformation(input));