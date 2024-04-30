import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


// import { Helmet } from "react-helmet-async";


const SignIn = () => {

  const {signInUser} = useContext(AuthContext);

    const handleSignin = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        // const form = new FormData(e.currentTarget);
        // const email = form.get('email');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const email = form.email.value;

        // const password = form.get('password');
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
          console.log(result.user);
          const user ={
            email,
            lastLoggedAt: result.user?.metadata?.lastSignInTime
          }
          fetch('http://localhost:5000/user', {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(user) 
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
          })
        })
        .catch(error =>{
          console.error(error);
        })

        // signIn(email, password)
        // .then(result =>{
        //   console.log(result.user);
          // alert('User Logged in successfully')
          // toast("Login successful !");
        //   swal("Login successful!");
    
          // setTmeOut(()=> {
          //   displayCards(data)
          //   } , 2000) 
    
        //   navigate( location?.state ? location.state : '/' );
        // })
        // .catch(error =>{
        //   console.error(error);
          // alert('Wrong email or password')
          // toast("Wrong email or password !");
        //   swal("Wrong email or password!");
        // })
      }


  return (
    <div>
      {/* <Helmet>
        <title>Luxstay | Signin</title>
      </Helmet> */}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div>
            <h1 className="text-5xl font-bold py-2">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8">
            <form onSubmit={handleSignin} className="card-body pb-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                /> */}

                <div className="relative">
                  <input
                    // type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    className="absolute top-4 right-2"
                    // onClick={() => setShowPassword(!showPassword)}
                  >
                    {/* {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} */}
                  </span>
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center">
              Don't have an account?
              <Link to="/register" className="text-primary font-bold">
                {" "}
                Register
              </Link>
            </p>
            {/* socilal login */}
            <div className="text-center">
              <h3 className="font-bold mt-4">Sign in with</h3>
              <p className="text-center font-bold">
                {/* <button onClick={handleGoogleSignIn} className=" btn-link mx-2">
                  Google
                </button> */}
                {/* <button onClick={handleGithubSignIn} className=" btn-link mx-2">
                  Github
                </button> */}
              </p>
            </div>

            {/* socilal login */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
