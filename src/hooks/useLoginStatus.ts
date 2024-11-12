import { useAuth } from "@/contexts/authContext"

export const useLoginStatus =  () => {
    if(typeof window !== "undefined") {
        return localStorage.getItem('isLoggedIn') === 'true'
    }
}