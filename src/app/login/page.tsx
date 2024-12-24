import SocialLogin from "@/components/Shared/SocialLogin";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";


const Login = () => {
    return (
        <section>
            <title>Ema Enterprise | Login</title>
            <meta name="description" content="This is the test page description" />
            {/* Main page */}
            <section className="mt-10 border-2 border-primary md:max-w-[500px] mx-auto text-white bg-foreground rounded-md py-10">
                {/* Heading */}
                <div className=" text-center">
                    <h2 className="font-bold text-2xl">Login</h2>
                </div>

                <hr className="font-bold m-3 mx-5" />
                {/* social Login */}
                <SocialLogin />
            </section>
        </section>
    );
};

export default Login;