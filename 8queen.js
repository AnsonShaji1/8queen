var size=8;
var t=range(1,size+1);
function findSolution(){
	var a=[""];
	while(a){
		var b=a.shift();
		/*console.log('length of b '+b.length);*/
		if(b.length >= size){
			var solution=b;
			console.log(b);
			}
		else{
			for(var col in t){
				if(checkPlacement (b, t[col])){
					a.push(b + t[col]);
					}
				}
			}
		}
	}


function checkPlacement(b,col){
	/*console.log('b='+b+'and col='+col);*/
	var row=b.length;
	var y=range(row-1,-1,-1);
	if(b){
		var spread=1;
		for(var prow in y){
			if(parseInt(b[y[prow]]) == col || parseInt(b[y[prow]]) == col-spread || parseInt(b[y[prow]]) == col+spread){
				return false;
				}
			spread += 1;
			}
		}
	return true;
	}









function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};
findSolution();

