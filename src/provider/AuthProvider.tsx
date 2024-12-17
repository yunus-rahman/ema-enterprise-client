'use client'
import { createContext, ReactNode, useEffect, useState } from "react";
import auth from "@/firebase/firebase.config";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    signInWithPopup,
    User,
} from "firebase/auth";

// Define the type for AuthInfo
type AuthInfoType = {
    user: User | null; // Firebase User object or null
    loading: boolean;
    setLoading: (loading: boolean) => void;
    googleLogin: () => Promise<any>; // Sign-in function returns a Promise
};

// Initial value for the context
const initialAuthInfo: AuthInfoType = {
    user: null,
    loading: false,
    setLoading: () => { },
    googleLogin: async () => { },
};

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
    // Phone number login
    const appVerifier = window.recaptchaVerifier;

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


    const phoneLogin = (phoneNumber: string) => {
        setLoading(true);

        return new Promise((resolve, reject) => {
            // Initialize reCAPTCHA
            if (!window.recaptchaVerifier) {
                window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
                    size: "invisible",
                    callback: () => {
                        console.log("reCAPTCHA verified.");
                    },
                    "expired-callback": () => {
                        console.warn("reCAPTCHA expired.");
                    },
                });
            }

            const appVerifier = window.recaptchaVerifier;

            // Sign in with phone number
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    console.log("OTP Sent!", confirmationResult);
                    window.confirmationResult = confirmationResult; // Store to verify later
                    resolve(confirmationResult);
                })
                .catch((error) => {
                    console.error("Phone authentication error:", error);
                    reject(error);
                })
                .finally(() => setLoading(false));
        });
    };

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
        phoneLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
