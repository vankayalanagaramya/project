
function removeDuplicates(arr, len)
{
	// Return, if array is empty or contains a single element
	if (len==0 || len==1)
		return n;

	let temp = new Array(len);
	let j = 0;
	for (let i=0; i<len-1; i++)
		if (arr[i] != arr[i+1])
			temp[j++] = arr[i];
	temp[j++] = arr[len-1];
	for (var i=0; i<j; i++)
		arr[i] = temp[i];
	return j;
}

var arr = [1, 2, 2, 3, 4, 7, 5, 5];
	var len = arr.length;
    len = removeDuplicates(arr, len);
	for (var i=0; i<len; i++){
	console.log( arr[i]);
    }