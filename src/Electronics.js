import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import  {useState,useEffect} from "react"
 
function Electronics()
{
    const [apidata,setApiData]=useState([])
    const [status,setStatus]=useState(true)
    const [pid,setId]=useState()
function hello(id)
{
  setStatus(false)
  setId(id)
}
   useEffect(()=>{
         fetch("https://amazon-baqw.onrender.com/search/electronics").then((result)=>{
             result.json().then((data)=>{
               setApiData(data)
             })
         })
   },[]) 
  
    return(
      <div>
         {

         
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          {
             apidata.map((item)=>
              
<MDBCol>
         <MDBCard>
           <center><MDBCardImage
             src={item.pimg}
             alt='...' 
             position='top' style={{width:"100px", height:"100px"}}
           /></center>
           <MDBCardBody>
          
             <MDBCardTitle>{item.pname}</MDBCardTitle>
             <MDBCardTitle>{item.pcat}</MDBCardTitle>
             <MDBCardText>{item.pdesc.slice(0,200)}</MDBCardText>
             <MDBCardText style={{color:"red"}}>Price : {item.pprice} RS</MDBCardText>
              <center>  <MDBBtn onClick={()=>hello(item.pid)}>View Detail {item.pid}</MDBBtn></center>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
             )
          }   
     </MDBRow>


         }
      </div>
    )
}
export default Electronics