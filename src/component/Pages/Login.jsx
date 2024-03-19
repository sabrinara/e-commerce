import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigation = useNavigate();
    navigation('/');
    return (
        <div>
          <h1 className="text-4xl text-center font-bold my-10 text-cyan-600 ">Login</h1>
            <form className="w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control my-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                
            </form>
        </div>
    );
};

export default Login;