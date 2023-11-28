export default function obtainToken(){
    if (typeof window !== "undefined") {
        const token = localStorage.getItem('Authorization');
        return token
    }
}   