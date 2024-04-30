
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
// import { Helmet } from "react-helmet-async";





const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const accepted = e.target.terms.checked;


        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(name, photo, email, password);

        if ( password.length < 6 ){
          // alert('Password must be at least 6 characters.');
          Swal.fire("Password must be at least 6 characters!");
          return;
        }
        else if (!/[A-Z]/.test(password)){
          // alert('Password must have 1 uppercase character.')
          Swal.fire("Password must have 1 uppercase character!");
          return;
        }
        else if (!/[a-z]/.test(password)){
          // alert('Password must have 1 lower character.')
          Swal.fire("Password must have 1 lower character!");
          return;
        }
        else if (!accepted){
          // alert('Please accept our terms and conditions!')
          Swal.fire("Please accept our terms and conditions!");
          return;
        }

        createUser(email, password, name, photo)
        .then(result => {
          updateUserProfile(name, photo)
          .then(() =>{

            navigate( location?.state ? location.state : '/' );

          })
            console.log(result.user)
            // alert('User created successfully.')
            Swal.fire("User created successfully!");
            
            
        })
        .catch(error =>{
            console.error(error)
            // alert('Email already in use.')
            Swal.fire("Email already in use!");
        })

      }


  return (
    <div>
      {/* <Helmet>
         <title>Luxstay | Register</title>
      </Helmet> */}
      
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div>
            <h1 className="text-5xl font-bold py-2">Please register</h1>
          </div>
          {/* <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div> */}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8">
            <form onSubmit={handleRegister} className="card-body pb-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>

                    {
                      showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }

                  </span>

                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms"> Accept our <a href="" className="text-primary">Terms and Conditions</a>.</label>
              </div>
              <div className="form-control ">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center">
              Already have an account?
              <Link to="/signin" className="text-primary font-bold">
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

