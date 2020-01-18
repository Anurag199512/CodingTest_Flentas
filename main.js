
//starting position of values from cmd line
let pos=2;

//no of tc
let n=Number(process.argv[pos]);
pos=pos+1;

while(n){
    //will store the cost of travelling for each person
    let cost=[];
    let total=0;

    //no of person
    let person=Number(process.argv[pos]);
    pos=pos+1;

    //inserting into the array
    while(person){
        cost.push(Number(process.argv[pos]));
        pos=pos+1;
        person=person-1;
    }
 
    //ordered in ascending order for cost
    cost.sort((a,b)=>a>b?1:-1)

    if(cost.length==0)
        total=0;
    else if(cost.length==1)
        total=total+cost[0];
    else if(cost.length==2)
        total=total+(cost[0]>cost[1]?cost[0]:cost[1])
    else if(cost.length==3)
        total=total+(cost[0]+cost[1]+cost[2])

    else{   
        let onleft=new Array(cost.length).fill(0)
        console.log(onleft)
        for(let i =0;i<cost.length;++i){

            total=total+cost[i];

            if(cost.length%2==0){

            }
            else{
                    
            }
        }
    }
    
    console.log(total);
    n=n-1;
}



