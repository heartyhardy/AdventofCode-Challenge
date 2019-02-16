const fs= require('fs');

const floors_file = './input.txt';

fs.readFile(floors_file, (err, data)=>{
    console.time("Full Runtime");
    if(err)
        return console.log(err);
    return countAllOpt(data.toString());
    //return countAll(data.toString());
});

const countAll = (data) => {
    let upIndex=data.indexOf('(');
    let downIndex=data.indexOf(')');
    let floorCount =0;    

    upIndex!=-1 ? floorCount++: 0;
    downIndex!=-1 ? floorCount--: 0;

    do
    {
        upIndex = data.indexOf('(',upIndex+1);
        if(upIndex!=-1)
            floorCount++;
    }
    while(upIndex != -1);

    do
    {
        downIndex = data.indexOf(')',downIndex+1);
        if(downIndex!=-1)
            floorCount--;
    }
    while(downIndex != -1);

    console.timeEnd("Full Runtime");
    console.log("Floor", Math.abs(floorCount));
}

const countAllOpt = (data) => {
    const data_arr = data.split('');

    const floor = data_arr.reduce((acc, item)=>{
        return item === '(' ? ++acc : --acc;
    },0);

    console.timeEnd("Full Runtime");
    console.log(floor);
}