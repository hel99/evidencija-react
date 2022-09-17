

const Register = () => {
    return (
        <div>
            <h1 id="it-space-dev">IT-SPACE-DEV</h1>

            <div className="dreg text-center">

                <div className="dloginfield">
                    <span>First name</span>
                    <input type='text' className="form-control mt-1" placeholder="Please enter your first name" />
                </div>

                <div className="dloginfield">
                    <span>Last name</span>
                    <input type='text' className="form-control mt-1" placeholder="Please enter your last name" />
                </div>

                <div className="dloginfield">
                    <span>Email</span>
                    <input type='email' className="form-control mt-1" placeholder="Please enter your email" />
                </div>

                <div className="dloginfield">
                    <span>Password</span>
                    <input type='password' className="form-control mt-1" placeholder="Please enter your password" />
                </div>

                <div className="dloginfield">
                    <span>Phone number</span>
                    <input type='text' className="form-control mt-1" placeholder="Please enter your phone number" />
                </div>

                <button className="btn btn-dark">Register</button>

            </div>


        </div>
    )
}

export default Register;