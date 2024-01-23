import { toast } from "react-toastify";

export async function addWishList(id,setIdArr){
    console.log(id)
    const temp =await JSON.parse(localStorage.getItem("arr")) || [];
    const index = temp.indexOf(id);
    console.log(temp, index)
    if (index > -1) {
        const ans = temp.filter((val)=>val!==id);
        localStorage.setItem('arr', JSON.stringify([...ans]));
       setIdArr([...ans])
       console.log(ans);
        toast.error("removed from wishlist!");
        return;
    }
    else {
        const ans =[...temp, id]
       setIdArr([...ans])
       console.log(ans);
        localStorage.setItem("arr", JSON.stringify(ans));
        toast.success("added to wishlist!");
    }
}