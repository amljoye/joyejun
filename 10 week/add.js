let sum;
onmessage=function(e){
    sum=0;
    let from=parseInt(e.data.from);
    let to=parseInt(e.data.to);
    for(from;from<=to;from++){
        sum+=from;
    }
    this.postMessage(sum);
}