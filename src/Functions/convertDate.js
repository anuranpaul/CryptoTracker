export const convertDate =(date)=>{
const myDate = new Date(date);
let day =myDate.getDay();
let month = myDate.getMonth()+1;
let year = myDate.getFullYear()%2000;
return `${day}/${month}/${year}`;
}