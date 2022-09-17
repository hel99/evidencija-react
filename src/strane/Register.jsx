import { useState } from 'react'


const Register = () => {

    const [zaposleni, setZaposleni] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: ''
    })


    return (
        <div>
            <h1 id="it-space-dev">IT-SPACE-DEV</h1>

            <div className="dreg text-center">

                <div className="dloginfield">
                    <span>First name</span>
                    <input type='text' className="form-control mt-1" placeholder="Please enter your first name"
                        value={zaposleni.first_name}
                        onChange={e => setZaposleni({ ...zaposleni, first_name: e.target.value })} />
                </div>

                <div className="dloginfield">
                    <span>Last name</span>
                    <input type='text' className="form-control mt-1" placeholder="Please enter your last name"
                        value={zaposleni.last_name}
                        onChange={e => setZaposleni({ ...zaposleni, last_name: e.target.value })} />
                </div>

                <div className="dloginfield">
                    <span>Email</span>
                    <input type='email' className="form-control mt-1" placeholder="Please enter your email"
                        value={zaposleni.email}
                        onChange={e => setZaposleni({ ...zaposleni, email: e.target.value })} />
                </div>

                <div className="dloginfield">
                    <span>Password</span>
                    <input type='password' className="form-control mt-1" placeholder="Please enter your password"
                        value={zaposleni.password}
                        onChange={e => setZaposleni({ ...zaposleni, password: e.target.value })} />
                </div>

                <div className="dloginfield">
                    <span>Phone number</span>
                    <input type='text' className="form-control mt-1" placeholder="Please enter your phone number"
                        value={zaposleni.phone_number}
                        onChange={e => setZaposleni({ ...zaposleni, phone_number: e.target.value })} />
                </div>

                <button className="btn btn-dark">Register</button>

            </div>


        </div>
    )
}

export default Register;