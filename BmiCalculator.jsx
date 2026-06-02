import React,{useState} from 'react'

function BmiCalculator() {
    const[form,setForm]=useState({
        height:'',weight:''
    })
    const[htype,setHtype]=useState(null);
    const [wtype,setWtype]=useState(null);
    const[submittedData,setSubmittedData]=useState(null);
    const[isSubmit,setSubmit]=useState(false);
    const[bmi,setBmi]=useState(null);
    const[image,setImage]=useState(null);
    const[bmicheck,SetBmiCheck]=useState(null);
    const handleSubmit =(e)=>{
        e.preventDefault();
        setSubmittedData(form);
        setSubmit(true);
          let h=parseFloat(form.height);
          let w=parseFloat(form.weight);
          let result=0;
          if(htype==='inches'&&wtype==='kg'){
            h = h *0.0254;
        result=w/(h*h);
          }
          else if(htype=='inches'&&wtype==='pound'){
            h = h * 0.0254;
        w = w * 0.453592;
        result = w / (h * h);
          }
          else if(htype==='cm'&&wtype==='kg'){
            h = h / 100;
        result = w / (h * h);
          }
          else if(htype==='cm'&&wtype==='pound'){
           h = h / 100;
        w = w * 0.453592;
        result = w / (h * h);
          }
          setBmi(result);
          if(result<18){
             SetBmiCheck('underweight');
             setImage('https://images.pexels.com/photos/7991914/pexels-photo-7991914.jpeg')
          }
          else if(result>=18&& result<=24){
            SetBmiCheck('Normal weight');
            setImage('https://media.istockphoto.com/id/453643009/photo/man-working-out.jpg?s=2048x2048&w=is&k=20&c=c9JzNfc3PcLNzskw859AZtabMDBxei_vIuhIkKsmQmE=')
          }
          else if(result>=25&&result<=29){
            SetBmiCheck('Overweight');
            setImage('https://images.pexels.com/photos/6670942/pexels-photo-6670942.jpeg');
          }
          else if(result<=30){
            SetBmiCheck('Obese');
            setImage('https://images.pexels.com/photos/6671495/pexels-photo-6671495.jpeg');
          }
    }
   
  return (
    <div style={{width:"400px",margin:"auto",marginTop:"50px"}}>
      <h2>BMI Calculator</h2>
      {!isSubmit&&(
        <form onSubmit={handleSubmit}>
        <label>Height</label>
        <input type="number" name="height" onChange={(e)=>setForm({...form,height:e.target.value})}/>
        <select value={htype} onChange={(e)=>setHtype(e.target.value)}>
            <option value=''>select</option>
            <option value='inches'>inches</option>
            <option value='cm'>cm</option></select><br></br>
        <label>Weight</label>
        <input type="number" name="weight" onChange={(e)=>setForm({...form,weight:e.target.value})}/>
        <select value={wtype} onChange={(e)=>setWtype(e.target.value)}>
            <option value=''>select</option>
            <option value='kg'>kg</option>
            <option value='pound'>pound</option></select><br></br>
        <input type='submit' value='Calculate'/>
        </form>
      )}
      {submittedData&& (
        <>
        <h2>BMI details </h2>
        <p><strong>Height:</strong>{submittedData.height}{htype}</p>
        <p><strong>Weight:</strong>{submittedData.weight}{wtype}</p>
        <p><strong>BMI:</strong>{bmi}</p>
        <p>{bmicheck}</p>
        <p><img src={image} height='100px' width='100px'/></p>

        </>
      )}
    </div>
  )
}

export default BmiCalculator
