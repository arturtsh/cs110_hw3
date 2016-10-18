    const reverse = function (arr) {
            let arr2 = [], counter = 0;
            for (let i = arr.length-1; i >= 0; i -= 1) {
                arr2[counter] = arr[i];
                counter += 1;
            }
            return arr2;
    };
        console.log(reverse([1,2,3,4,5,6,7,8,9,10]));
