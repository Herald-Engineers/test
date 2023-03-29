import '../Css/Guide.css';
function Guide(){
    return(
        <div className="guide">
            <div className="guide-content">
                <div className="myReactangle"></div>
                <div className='bills-container'> 
                    <p className='guide-para valign-text-middle montserrat-bold-pickled-bluewood-15px'>
                        When will i receive my bills?
                    </p>
                    <p className='water-para valign-text-middle montserrat-bold-gray-10px'>Water bills are generated and mailed out on a monthly basis. If you have not received your bill within 10 days of the billing date, please contact our customer service team.</p>
                </div>
                
            </div>
            <div className="guide-content">
                <div className="myReactangle"></div>
                <div className='bills-container'> 
                    <p className='guide-para valign-text-middle montserrat-bold-pickled-bluewood-15px'>
                     How is my water bill calculated?
                    </p>
                    <p className='water-para valign-text-middle montserrat-bold-gray-10px'>Your water bill is calculated based on the amount of water you have used during the billing period. The rate for water usage is currently 100 per 10 CuM.</p>
                </div>
                
            </div>
            <div className="guide-content">
                <div className="myReactangle"></div>
                <div className='bills-container'> 
                    <p className='guide-para valign-text-middle montserrat-bold-pickled-bluewood-15px'>
                        What happens if I don't pay my water bill on time?
                    </p>
                    <p className='water-para valign-text-middle montserrat-bold-gray-10px'>If you don't pay your water bill on time, you may be charged a late fee or have your water service suspended. If you are having difficulty paying your bill, please contact our customer service team to discuss payment options.</p>
                </div>
                
            </div>
            <div className="guide-content">
                <div className="myReactangle"></div>
                <div className='bills-container'> 
                    <p className='guide-para valign-text-middle montserrat-bold-pickled-bluewood-10px'>
                    What to do if I have a billing question?
                    </p>
                    <p className='water-para valign-text-middle montserrat-bold-gray-10px'>If you have a question about your water bill, please contact our customer service team. They will be happy to assist you with any questions or concerns you may have.</p>
                </div>
                
            </div>
        </div>
    );
}
export default Guide;