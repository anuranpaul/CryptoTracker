export const convertNumber=(number)=>{
const num = number.toLocaleString();
const numArr = num.split(",");
const n = numArr.length;

if(n>4){
    return `${numArr[0]}.${numArr[1].slice(0,1)}T`;
}
else if(n>3){
    return `${numArr[0]}.${numArr[1].slice(0,1)}B`;
}
else if(n>2){
    return `${numArr[0]}.${numArr[1].slice(0,1)}M`;
}
else if(n>1){
    return `${numArr[0]}.${numArr[1].slice(0,1)}K`;
}
return num;

}