function Register(){
    const color_style ={
            color: 'gray',
        };
        return(
        
       
        <div>
            <h1>Register Your Company</h1>
            <form action="/action_page.php">
            <input type="text" id="inputField" placeholder='Company Name' className='login-field'/><br />
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
                <option value={""}>Panchthar</option>
                <option value={""}>Sankhuwasabha</option>
                <option value={""}>Solukhumbu</option>
                <option value={""}>Sunsari</option>
                <option value={""}>Taplejung</option>
                <option value={""}>Terhathum</option>
                <option value={""}>Udayapur</option>

                <option value={""}>Bara</option>
                <option value={""}>Dhanusa</option>
                <option value={""}>Mahottari</option>
                <option value={""}>Parsa</option>
                <option value={""}>Rautahat</option>
                <option value={""}>Saptari</option>
                <option value={""}>Sarlahi</option>
                <option value={""}>Siraha</option>

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
                <option value="" style={color_style} >Address(Municipality)</option>
                <option value="Province 1">Koshi Province</option>
                <option value="Province 2">Madhesh Province</option>
                <option value="Bagmati Province">Bagmati Province</option>
                <option value="Gandaki Province">Gandaki Province</option>
                <option value="Province 5">Lumbini Province </option>
                <option value="Karnali Province">Karnali Province</option>
                <option value="Sudurpashchim Province">Sudurpashchim Province</option>
                
            </select><br/>
                
            <input type="number" id="inputField" placeholder='Ward No.'   className='login-field'/><br/>
            <input type="number" id="inputField" placeholder='Tole'  className='login-field'/><br/>
            <input type="number" id="inputField" placeholder='Contact '  className='login-field'/><br/>
            <input type="text" id="inputField" placeholder='Username for admin '  className='login-field'/><br/>
            <input type="password" id="inputField" placeholder='Create Password '  className='login-field'/><br/>
            <input type="password" id="inputField" placeholder='Confirm Password '  className='login-field'/><br/>

            </form>
        </div>
    );
}
export default Register;