const fs= require('fs');
const floors_file = './input.txt';

fs.readFile(floors_file,(err, data)=>{
    console.time("Run Time:");
    if(err)
        return console.log(err);
    const data_arr = data.toString().split('');
    findBasement(data_arr);
});

const findBasement = (data) => {
    let acc=0;
    let floor = 0;

    data.some((item, i)=>{
        item==='(' ? acc++ : acc-- ;
        floor += 1;
        return(acc===-1);
    });
    
    console.timeEnd("Run Time:");
    console.log("Position: ",floor);
};