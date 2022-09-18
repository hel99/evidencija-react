import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../komponente/Nav';

const Zaposleni = () => {

    const [zaposleni, setZaposleni] = useState([])
    const [srcInput, setSrcInput] = useState('')

    useEffect(() => {

        axios.get("http://localhost:8000/api/zaposleni").then(res => {
            setZaposleni(res.data.zaposleni)
        });

    }, []);


    const handleSrcInput = (e) => {
        setSrcInput(e.target.value)
    }

    const search = () => {
        axios.get(`http://localhost:8000/api/zaposleni-search/${srcInput}`).then(res => {
            setZaposleni(res.data.zaposleni)
        });
    }



    console.log(srcInput)

    var body = '';
    body = zaposleni.map((z) => {
        return (
            <tr key={z.id}>
                <td>{z.first_name}</td>
                <td>{z.last_name}</td>
                <td>{z.email}</td>
                <td>{z.phone_number}</td>
                <td>{z.kasnjenja}</td>
            </tr>
        )
    })





    return (
        <div>
            <Nav />

            <div className='prisustva-t'>

                <h1 id='p-n'>Zaposleni</h1>

                <input type="text" onChange={e => { handleSrcInput(e); search() }} className='form-control' id='src' placeholder='Unesite ime | prezime | email | broj telefona' />

                <table className="table table-primary text-center">

                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Email</th>
                            <th>Broj telefona</th>
                            <th>Broj kašnjenja</th>
                        </tr>
                    </thead>

                    <tbody>
                        {body}
                    </tbody>

                </table>
            </div>



        </div >
    )
}

export default Zaposleni;