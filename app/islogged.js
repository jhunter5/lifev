export default function islooged(){
    if (typeof window !== "undefined") {
        const token = localStorage.getItem('Authorization');
        if(token){
            return true;
        }
        else{   
            return false;
        }
    }
}   