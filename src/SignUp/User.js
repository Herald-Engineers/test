function user() {
  return (
    <div className="container">
      <div className="contanier-box">
        <h1>User account request</h1>
        <h5>Please fill in this form to create an account.</h5>
        <br/>
        <h4>
          <b>Personal Information</b>
        </h4>
        <form action="#" method="post">
          <label for="first-name" className="align_items">Name:</label><br/>
          <div className="d-flex">
            <div>
              <input type="text" id="first-name" name="first-name" placeholder="Firstname" required /><br/>
            </div>
            <div>
              <input type="text" id="last-name" name="last-name" placeholder="Lastname"  required/><br/>
            </div>
          </div>  
      
      <label for="address">Address:</label><br/>
      
      <input type="text" id="houseNo" name="address" placeholder="House No" required/>{'\n'}
      <input type="number" id="tol" name="address" placeholder="Tol" required/><br/>{'\n'}
      <input type="number" id="ward" name="address" placeholder="Ward" required/>{'\n'}
      <input type="text" id="municipality" name="address" placeholder="Municipality" required/><br/>
      <div className="d-flex">
        <div>

            <label for="telephone">Telephone:</label><br/>
      <input type="tel" id="telephone" name="telephone" placeholder="Telephone No." required/><br/>
        </div>
        <div>
      <label for="email">Email Address:</label><br/>
      <input type="email" id="email" name="email" placeholder="Email Address" required/><br/>
      </div>
      </div>
      
      <div className="d-flex">
          <div>
            <label for="nationality">Nationality:</label><br/>
        <input type="text" id="nationality" name="nationality" placeholder="Nationality" required/><br/>
          </div>
        <div>
          <label for="citizenship-number">Citizenship Number:</label><br/>
          <input type="text" id="citizenship-number" name="citizenship-number" placeholder="Citizenship No." required/><br/>

        </div>
        <div>
          <label for="passport-number">Passport Number(Optional):</label><br/>
          <input type="text" id="passport-number" name="passport-number(Optional)" placeholder="Passport No."/><br/>

        </div>
        
      </div>
      
      <h4>
          <b>Add Supplementary Information(Optional)</b>
        </h4>
      <div className="d-flex ">
        <div>
          
      <input type="text" id="supplementary-name" name="supplementary-name" placeholder="Name" className="spacing"/><br/>
        </div>
        <div>
        
      <input type="tel" id="supplementary-telephone" name="supplementary-telephone" placeholder="Telephone" className="spacing"/><br/>
      
        </div>
        <div>
          
      <input type="email" id="supplementary-email" name="supplementary-email" placeholder="Email" className="spacing"/><br/>
        </div>
        
      </div>
    
      <h4>
          <b>Please submit the softcopy of the following documents:</b>
        </h4>
      <div className="d-flex">
        <div>
          <label for="citizenship-doc">- Citizenship Document:</label><br/>
      <input type="file" id="citizenship-doc" name="citizenship-doc" accept=".pdf,.doc,.docx" className="choosefile"required/><br/>
        </div>
        <div>
          <label for="land-doc">- Land Ownership Document:</label><br/>
      <input type="file" id="land-doc" name="land-doc" accept=".pdf,.doc,.docx" required/><br/>
        </div>
      
      
      </div>
      
      
      <input type="submit" value="Submit"/>
    </form>

    </div>
  </div>);
}
export default user;