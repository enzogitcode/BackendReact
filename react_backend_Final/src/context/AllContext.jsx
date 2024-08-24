import { createContext, useState } from "react";

export const authContext = createContext()
export const useAuth = () => {
    
}

export const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null)

    const signup = async(user)=> await registerRequest(values)
    console.log(res.data)
    SetUser(res.data)


    return (
        <AuthProvider.Provider value={{ signup, user }}>
            {children}
        </AuthProvider.Provider>
    )
}