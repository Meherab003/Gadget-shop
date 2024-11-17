import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Signin = () => {
  const {login} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password);
  };
  return (
    <div className="hero bg-base-200 min-h-outlet">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold my-3 lg:my-6">
            Sign in
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
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn border-black bg-black text-white hover:bg-slate-800"
              >
                Sign in
              </button>
              <p className="mt-2">
                {`Don't have an account?`}?{" "}
                <Link
                  to="/sign-in"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
