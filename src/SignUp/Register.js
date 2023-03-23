import React, { useEffect } from 'react';
import {useState} from 'react';
import '../SignUp/Sign.css';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function Register(){
    const navigate = useNavigate();
    const color_style ={
            color: '#525252',
    };
    const [isChecked, setIsChecked] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isChecked) {
            setErrorMsg('Please agree to all terms and conditions');
        } else {
            // handle form submission
        }
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = {
    //         companyName: event.target.companyName.value,
    //       addressDistrict: event.target.addressDistrict.value,
    //       addressProvince: event.target.addressProvince.value,
    //       addressWardNum: event.target.addressWardNum.value,
    //       addressMunicipality: event.target.addressMunicipality.value,
    //       addressTole: event.target.addressMunicipality.value,
    //       contactNum: event.target.contactNum.value,

    //     };
    //     axios.post('https://wavebilling-backend-sabinlohani.onrender.com/register', data)
    //       .then(response => console.log(response))
    //       .catch(error => console.log(error));
    //   };
    return(
        <div>

      
        <div className='register_company '> 
            <h1 style={color_style}>Register Your Company</h1>
            <form action="/action_page.php" onSubmit={handleSubmit} className="myForms ">
                <input type="text" value=""id="inputField" placeholder='Company Name' className='login-field'/><br />
                <select id="district" name="district" className="select_option" >
                    <option value="" style={color_style} >Address(District)</option>
                    <option value={"Bhaktapur"}> Bhaktapur </option>
                    <option value={"Chitwan"}> Chitwan </option>
                    <option value={"Dhading"}> Dhading </option>
                    <option value={"Dolakha"}> Dolakha </option>
                    <option value={"Kathmandu"} >Kathmandu </option>
                    <option value={"Kavrepalanchok"}> Kavrepalanchok </option>
                    <option value={"Lalitpur"}> Lalitpur </option>
                    <option value={"Makwanpur"}> Makwanpur </option>

                    <option value={"Bhojpur"}>Bhojpur</option>
                    <option value={"Dhankuta"}>Dhankuta</option>
                    <option value={"Ilam"}>Ilam</option>
                    <option value={"Jhapa"}>Jhapa</option>
                    <option value={"Khotang"}>Khotang</option>
                    <option value={"Morang"}>Morang</option>
                    <option value={"Okhaldhunga"}>Okhaldhunga</option>
                    <option value={"Panchthar"}>Panchthar</option>
                    <option value={"Sankhuwasabha"}>Sankhuwasabha</option>
                    <option value={"Solukhumbu"}>Solukhumbu</option>
                    <option value={"Sunsari"}>Sunsari</option>
                    <option value={"Taplejung"}>Taplejung</option>
                    <option value={"Terhathum"}>Terhathum</option>
                    <option value={"Udayapur"}>Udayapur</option>
                    


                    <option value={"Bara"}>Bara</option>
                    <option value={"Dhanusa"}>Dhanusa</option>
                    <option value={"Mahottari"}>Mahottari</option>
                    <option value={"Parsa"}>Parsa</option>
                    <option value={"Rautahat"}>Rautahat</option>
                    <option value={"Saptari"}>Saptari</option>
                    <option value={"Sarlahi"}>Sarlahi</option>
                    <option value={"Siraha"}>Siraha</option>
                    <option value={"Bhaktapur"}>	Bhaktapur District</option> 
                    <option value={"Chitwan"}>	Chitwan</option>
                    <option value={"Dhading"}>Dhading</option>
                    <option value={"Dolakha"}>Dolakha</option>
                    <option value={"Kathmandu"}>Kathmandu</option>
                    <option value={"Kavrepalanchok"}>Kavrepalanchok</option>
                    <option value={"Lalitpur"}>Lalitpur</option>
                    <option value={"Makawanpur"}>Makawanpur</option>
                    <option value={"Nuwakot District"}>Nuwakot District</option>
                    <option value={"Ramechhap"}>	Ramechhap</option>
                    <option value={"Rasuwa"}>	Rasuwa</option>
                    <option value={"Sindhuli"}>	Sindhuli</option>
                    <option value={"Sindhupalchok"}>	Sindhupalchok</option>






                    <option value={""}>Bhaktapur</option>
                    <option value={""}>Chitwan</option>
                    <option value={""}>Dhading</option>
                    <option value={""}>Dolakha</option>
                    <option value={""}>Kathmandu</option>
                    <option value={""}>Kavrepalanchok</option>
                    <option value={""}>Lalitpur</option>
                    <option value={""}>Makwanpur</option>
                    <option value={""}>Nuwakot</option>
                    <option value={""}>Ramechhap</option>
                    <option value={""}>Rasuwa</option>
                    <option value={""}>Sindhuli</option>
                    <option value={""}>Sindhupalchok</option>
                
                    <option value={""}>Baglung</option>
                    <option value={""}>Gorkha</option>
                    <option value={""}>Kaski</option>
                    <option value={""}>Lamjung</option>
                    <option value={""}>Manang</option>
                    <option value={""}>Mustang</option>
                    <option value={""}>Myagdi</option>
                    <option value={""}>Nawalparasi</option>
                    <option value={""}>Parbat</option>
                    <option value={""}>Syangja</option>
                    <option value={""}>Tanahun</option>
                    
                    <option value={""}>Arghakhanchi</option>
                    <option value={""}>Banke</option>
                    <option value={""}>Bardiya</option>
                    <option value={""}>Dang</option>
                    <option value={""}>Eastern Rukum</option>
                    <option value={""}>Gulmi</option>
                    <option value={""}>Kapilvastu</option>
                    <option value={""}>Parasi</option>
                    <option value={""}>Palpa</option>
                    <option value={""}>Pyuthan</option>
                    <option value={""}>Rolpa</option>
                    <option value={""}>Rupandehi</option> 

                    <option value={""}>Dailekh</option>
                    <option value={""}>Dolpa</option>
                    <option value={""}>Humla</option>
                    <option value={""}>Jajarkot</option>
                    <option value={""}>Jumla</option>
                    <option value={""}>Kalikot</option>
                    <option value={""}>Mugu</option>
                    <option value={""}>Salyan</option>
                    <option value={""}>Surkhet</option>
                    <option value={""}>Western Rukum</option>

                    <option value={""}>Achham</option>
                    <option value={""}>Baitadi</option>
                    <option value={""}>Bajhang</option>
                    <option value={""}>Bajura</option>
                    <option value={""}>Dadeldhura</option>
                    <option value={""}>Darchula</option>
                    <option value={""}>Doti</option>
                    <option value={""}>Kailali</option>
                    <option value={""}>Kanchanpur</option>
                    <option value={""}>shreya</option>
                

                </select>{'\n'}

                <select id="province" name="province" className="select_option" >
                    <option value="" style={color_style} >Address(Province)</option>
                    <option value="Province 1">Koshi Province</option>
                    <option value="Province 2">Madhesh Province</option>
                    <option value="Bagmati Province">Bagmati Province</option>
                    <option value="Gandaki Province">Gandaki Province</option>
                    <option value="Province 5">Lumbini Province </option>
                    <option value="Karnali Province">Karnali Province</option>
                    <option value="Sudurpashchim Province">Sudurpashchim Province</option>
                    
                </select><br/>
                <select id="Municipalities" name="Municipalities" className="select_option" >
                    <option value="">    Address(Municiplaity)</option>
                    <option value="">    Kathmandu Metropolitan City  </option>
                    <option value="">    Lalitpur Metropolitan City </option>
                    <option value="">    Bhaktapur Municipality</option>
                    <option value="">    Pokhara Metropolitan City</option>
                    <option value="">    Biratnagar Metropolitan City</option>
                    <option value="">    Dharan Sub-metropolitan City</option>
                    <option value="">    Birgunj Metropolitan City</option>
                    <option value="">    Janakpur Sub-metropolitan City</option>
                    <option value="">    Hetauda Sub-metropolitan City</option>
                    <option value="">    Butwal Sub-metropolitan City</option>
                    <option value="">    Nepalgunj Sub-metropolitan City</option>
                    <option value="">    Tulsipur Sub-metropolitan City</option>
                    <option value="">    Siddharthanagar Municipality</option>
                    <option value="">    Dhangadhi Sub-metropolitan City</option>
                    <option value="">    Mahendranagar Municipality</option>
                    <option value="">    Birendranagar Municipality</option>
                    <option value="">    Surkhet Municipality</option>
                    <option value="">    Gulariya Municipality</option>
                    <option value="">   Rajbiraj Municipality</option>
                    <option value="">    Dhankuta Municipality</option>
                    
                </select><br/>
                    
                <input type="number" id="inputField" placeholder='Ward No.'   className='login-field'/><br/>
                <input type="text" id="inputField" placeholder='Tole'  className='login-field'/><br/>
                <input type="number" id="inputField" placeholder='Contact '  className='login-field'/><br/>
                <input type="text" id="inputField" placeholder='Username for admin '  className='login-field'/><br/>
                <input type="password" id="inputField" placeholder='Create Password '  className='login-field'/><br/>
                <input type="password" id="inputField" placeholder='Confirm Password '  className='login-field'/><br/>


                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                    <label class="form-check-label" for="flexCheckChecked">
                        Agreed to all terms and conditions.
                    </label>
                </div>
                {errorMsg && <p className="error">{errorMsg}</p>}
                <input type="submit" value="Submit" id="my-button" />
                
            </form>
        </div>
        </div>
    );
}
export default Register;