export default function islooged(){
    const token = localStorage.getItem('Authorization');

    if(token){
        return true;
    }
    else{   
        return false;
    }
}   