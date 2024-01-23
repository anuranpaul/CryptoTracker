export const paginationSelect = (page,List)=>{
const PerPage = 10;
const totalitem = 100;
const initialIndex = (page-1)*PerPage;
const lastIndex = page*PerPage;
const itemList = List.slice(initialIndex,lastIndex);
return itemList;
}