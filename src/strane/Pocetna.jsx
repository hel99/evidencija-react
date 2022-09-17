

const Pocetna = () => {
    return (
        <div>


            <div className="dlogin text-center">
                <div className="dloginfield">
                    <span>Email</span>
                    <input type='email' className="form-control mt-2" placeholder="Please enter your email" />
                </div>

                <div className="dloginfield">
                    <span>Password</span>
                    <input type='email' className="form-control mt-1" placeholder="Please enter your password" />
                </div>

                <button className="btn btn-dark">Log in</button>

                <br />

                <p className="text-muted mt-2">If you don't have an account, please <b><i><u>register</u></i></b>.</p>

            </div>








        </div >
    )
}

export default Pocetna;