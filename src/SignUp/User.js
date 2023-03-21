function user() {
  return (
    <div className="text-center container">
      <h1>User account request</h1>
        <form action="#" method="post">
          <div className="">
            <label for="first-name">Name:</label><br/>
         
          <input type="text" id="first-name" name="first-name" placeholder="Firstname" required />{'\n'}
         
            
            <input type="text" id="last-name" name="last-name" placeholder="Lastname"  required/><br/>
        </div>  
     
    <label for="address">Address:</label><br/>
    
    <input type="text" id="houseNo" name="address" placeholder="House No" required/>{'\n'}
    <input type="number" id="tol" name="address" placeholder="Tol" required/><br/>{'\n'}
    <input type="number" id="ward" name="address" placeholder="Ward" required/>{'\n'}
    <input type="text" id="municipality" name="address" placeholder="Municipality" required/><br/>

    
    
    <label for="telephone">Telephone:</label><br/>
    <input type="tel" id="telephone" name="telephone" required/><br/>
    
    <label for="email">Email Address:</label><br/>
    <input type="email" id="email" name="email" required/><br/>
    
    <label for="nationality">Nationality:</label><br/>
    <input type="text" id="nationality" name="nationality" required/><br/>
    
    <label for="citizenship-number">Citizenship Number:</label><br/>
    <input type="text" id="citizenship-number" name="citizenship-number" required/><br/>
    
    <label for="passport-number">Passport Number:</label><br/>
    <input type="text" id="passport-number" name="passport-number"/><br/>
    
    <label for="supplementary-name">Supplementary Name:</label><br/>
    <input type="text" id="supplementary-name" name="supplementary-name"/><br/>
    
    <label for="supplementary-telephone">Supplementary Telephone:</label><br/>
    <input type="tel" id="supplementary-telephone" name="supplementary-telephone"/><br/>
    
    <label for="supplementary-email">Supplementary Email Address:</label><br/>
    <input type="email" id="supplementary-email" name="supplementary-email"/><br/>
    
    <label for="citizenship-doc">Citizenship Document:</label><br/>
    <input type="file" id="citizenship-doc" name="citizenship-doc" accept=".pdf,.doc,.docx" required/><br/>
    
    <label for="land-doc">Land Ownership Document:</label><br/>
    <input type="file" id="land-doc" name="land-doc" accept=".pdf,.doc,.docx" required/><br/>
    
    <input type="submit" value="Submit"/>
  </form>

  </div>
  );
}
export default user;