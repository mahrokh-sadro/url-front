// import './App.css';
import  React from 'react'

function App() {

  const [formValue,setFormValue]=React.useState("");
  const [shortUrl, setShortUrl] = React.useState("");


  console.log("shortUrl");
  console.log(shortUrl)

  const onSubmit=(e)=>{

e.preventDefault();
  // console.log("destination");
  // console.log(destination)
fetch(`http://localhost:5000/shortUrls`,{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formValue),
})
.then(res=>res.json())
.then(json=>{
  setShortUrl(json.data.short)
  console.log(json)
})
.catch(err=>console.log(err))

  }


  return (
    <>
  <form onSubmit={onSubmit}>
  <div class="mb-3">
    <input type="text" className="form-control" id="url" aria-describedby="emailHelp"
    value={formValue}
    onChange={e=>setFormValue(e.target.value)}
    />
  </div>
 
  <button type="submit" className="btn btn-primary">shortener</button>
</form>
    </>
  );
}

export default App;
