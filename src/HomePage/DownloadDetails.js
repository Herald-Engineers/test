function createFileContent(){
    return(
        <div className='' id='bill-history-section'>
        <p>My Bill History</p>
        <div>
           <table>
                <tr>
                    <th>Date:</th>
                    <td>2023/03/23</td>
                </tr>
                <tr>
                    <th>Customer Id:</th>
                    <td>2023/03/23</td>
                </tr>
                <tr>
                    <th>Customer Name:</th>
                    <td>Name</td>
                </tr>
                <tr>
                    <th>Payment Mode:</th>
                    <td>Name</td>
                </tr>
                <tr>
                    <th>Water Charges:</th>
                    <td>Name</td>
                </tr>
                <tr>
                    <th>Sewage charges:</th>
                    <td>Name</td>
                </tr>
                <tr>
                    <th>Meter Reader Rent:</th>
                    <td>200</td>
                </tr>
                <tr>
                    <th>Miscellanous:</th>
                    <td>20</td>
                </tr>
                <tr>
                    <th>Penalty:</th>
                    <td>Name</td>
                </tr>
                <tr>
                    <th>Tax Amount:</th>
                    <td>Name</td>
                </tr>
                <tr>
                    <th>Bill Amount:</th>
                    <td>Name</td>
                </tr>
                <tr>
                    <th>Total To Be Paid:</th>
                    <td>Name</td>
                </tr>
           </table>
        </div>
        
    </div>
    );
}

export default createFileContent;

  
  // Create a blob object from the file content
  const fileContent = createFileContent();
  const blob = new Blob([fileContent], { type: 'text/plain' });
  
  const downloadFile = (blob, filename, type) => {
    const fileURL = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = fileURL;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(fileURL);
    }, 0);
  }
  
  // Example usage
  const filename = 'example.txt';
  const type = 'text/plain';
  downloadFile(blob, filename, type);