//calculates the minimum travel cost

function findcost(cost){
    var total=0;

    if(cost.length>3){
        total=cost[0]+cost[cost.length-1]+(2*cost[1]<cost[0]+cost[cost.length-2]?2*cost[1]:cost[0]+cost[cost.length-2])

        return total+findcost(cost.splice(0,cost.length-2))
    }
    else{
        if(cost.length==2)
            return (cost[0]>cost[1]?cost[0]:cost[1])
        else if(cost.length==3)
            return (cost[0]+cost[1]+cost[2])
        else 
            return cost[0]
    }
}

//starting position of values from cmd line
let pos=2;

//no of tc
let n=Number(process.argv[pos]);
pos=pos+1;

while(n){
    //will store the cost of travelling for each person
    let cost=[];
    
    //no of person
    let person=Number(process.argv[pos]);
    pos=pos+1;

    //inserting into the array
    while(person){
        cost.push(Number(process.argv[pos]));
        pos=pos+1;
        person=person-1;
    }
    cost.sort((a,b)=>a>b?1:-1)

    console.log(findcost(cost))
    n=n-1
}
