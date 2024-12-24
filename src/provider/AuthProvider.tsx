'use client'
import { createContext, ReactNode, useEffect, useState } from "react";
import auth from "@/firebase/firebase.config";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    User,
} from "firebase/auth";

// Define the type for AuthInfo
type AuthInfoType = {
    user: User | null; // Firebase User object or null
    loading: boolean;
    setLoading: (loading: boolean) => void;
    // googleLogin: () => Promise<any>; // Sign-in function returns a Promise
};

// Initial value for the context
// const initialAuthInfo: AuthInfoType = {
//     user: null,
//     loading: false,
//     setLoading: () => { },
//     googleLogin: async () => { },
// };

// Create context with the proper type
export const AuthContext = createContext<AuthInfoType>(null);

type PropsType = {
    children: ReactNode;
};

const AuthProvider = ({ children }: PropsType) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    // Google provider
    const googleProvider = new GoogleAuthProvider();



    // Google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result)
                setLoading(false);
                return result;
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };


    const logOut = () => {
        return signOut(auth)
    }

    // Handle user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // authInfo to pass through the context
    const authInfo: AuthInfoType = {
        user,
        loading,
        setLoading,
        googleLogin,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
