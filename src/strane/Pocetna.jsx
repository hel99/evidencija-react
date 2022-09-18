import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';


const Pocetna = () => {

    const [zaposleni, setZaposleni] = useState({
        email: '',
        password: ''
    });


    const login = () => {

        axios.post("http://localhost:8000/api/login", zaposleni).then(res => {

            if (res.data.status == 200) {
                Swal.fire({
                    icon: 'info',
                    title: 'Login message',
                    text: 'You have been successfully logged in!'
                })

                localStorage.setItem('email', zaposleni.email)
            }
            else
                Swal.fire({
                    icon: 'error',
                    title: 'Register message',
                    text: 'Error!'
                })
        });
    }



    return (
        <div>


            <div className="dlogin text-center">
                <div className="dloginfield">
                    <span>Email</span>
                    <input type='email' className="form-control mt-2" placeholder="Please enter your email"
                        value={zaposleni.email}
                        onChange={e => setZaposleni({ ...zaposleni, email: e.target.value })}
                    />
                </div>

                <div className="dloginfield">
                    <span>Password</span>
                    <input type='password' className="form-control mt-1" placeholder="Please enter your password"
                        value={zaposleni.password}
                        onChange={e => setZaposleni({ ...zaposleni, password: e.target.value })}
                    />
                </div>

                <button onClick={login} className="btn btn-dark">Log in</button>

                <br />

                <p className="text-muted mt-2">If you don't have an account, please <b><i><u>register</u></i></b>.</p>

            </div>








        </div >
    )
}

export default Pocetna;