import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleSignin from "../components/authentication/GoogleSignin";

const Signup = () => {
  const { createUser, logOut } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password);
    logOut();
    navigate("/sign-in");
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold my-3 lg:my-6">
            Create Account
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 font-light text-sm">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm font-light">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minlength" && (
                <p className="text-red-500 text-sm font-light">
                  Password must have at least 6 characters
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Passwords do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm font-light">
                  Password Do not match
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn border-black bg-black text-white hover:bg-slate-800"
              >
                Sign up
              </button>
              <p className="mt-2">
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
          <GoogleSignin />
        </div>
      </div>
    </div>
  );
};

export default Signup;
