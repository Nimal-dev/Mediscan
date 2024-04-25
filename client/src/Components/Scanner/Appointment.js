import React, { useState, useEffect } from "react";
import Scanheader from "./Header";
import Scanfooter from "./Footer";
import Envurl from "./Api";

function Sappointment() {
  //POST Method;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [blood, setBlood] = useState("");
  const [scan, setScan] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState("");
  const [auth, setAuth]= useState(JSON.parse(localStorage.getItem('userdata')));
  const [refresh, setRefresh] = useState(0)

  const scanSubmit = () => {
    // e.preventDefault()
    let params = {
      userid: auth.id,
      name: name,
      age: age,
      gender: gender,
      dob: dob,
      blood: blood,
      scan: scan,
      height: height,
      weight: weight,
      image: image
    };
    

    fetch("http://127.0.0.1:8000/api/scaninsert", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        window.location.reload();
      });
  };

  const handleFileUpload = (event) => {
    const formdata = new FormData();
    formdata.append("image", event.target.files[0]);
    fetch("http://127.0.0.1:8000/api/fileupload", {
      method: "POST",
      body: formdata,
    }).then((res) => {
      res.json().then((data) => {
        setImage(data);
      });
    });
  };

  //GET MEthod;
  const [scanview, setView] = useState([]);
  // const [refersh, setRefresh ] =useState(0);

  useEffect(() => {
    let param ={
      id:auth.id
    }
    fetch("http://127.0.0.1:8000/api/view", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify(param)
    }).then((res) => {
      res.json().then((data) => {
  
        setView(data)
      });
    });
  }, [refresh]);

  const deleteForm = (iD)=>{
    let params ={
      id:iD
    }
    fetch('http://127.0.0.1:8000/api/deletescan',{
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify(params)
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setRefresh(prev=>prev+1)
       
      });
    });
  }

  return (
    <>
      <Scanheader />
      <img
        src="assets/img/hero-bg.png"
        style={{ width: "100rem", position: "absolute", bottom: "5px" }}
      />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <h1 className="mb-4 col-sm-5" style={{ position: "relative" }}>
              Enter patient details
            </h1>

            <div
              className="col-12 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{ position: "relative", opacity: "0.9" }}
            >
              <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                {/* <form> */}
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6 ">
                    <input
                      name="age"
                      onChange={(e) => setAge(e.target.value)}
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Age"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select
                      name="gender"
                      onChange={(e) => setGender(e.target.value)}
                      className="form-select border-0"
                      style={{ height: "55px" }}
                    >
                      <option selected>Choose Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        name="dob"
                        type="date"
                        onChange={(e) => setDob(e.target.value)}
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Date of birth"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        style={{ height: "55px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      name="blood"
                      onChange={(e) => setBlood(e.target.value)}
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Blood group"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select
                      name="scan"
                      onChange={(e) => setScan(e.target.value)}
                      className="form-select border-0"
                      style={{ height: "55px" }}
                    >
                      <option selected>Choose Scan type</option>
                      <option value="xray">Xray</option>
                      <option value="ct_scan">CT scan</option>
                      <option value="mri_scan">MRI scan </option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        name="height"
                        onChange={(e) => setHeight(e.target.value)}
                        type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Height"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        style={{ height: "55px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        name="weight"
                        onChange={(e) => setWeight(e.target.value)}
                        type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Weight"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        style={{ height: "55px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => handleFileUpload(e)}
                      className="form-control border-0"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-success w-100 py-3"
                      type="submit"
                      onClick={() => scanSubmit()}

                    >
                      Add scan report
                    </button>
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
            {/* table */}

            <div className="bg-light rounded h-100 d-flex align-items-center p-5  wow fadeInUp">
              <table
                className="table table-stripped text-dark"
                style={{ textAlign: "center" }}
              >
                <tr>
                  <th>Sl.No</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Blood Group</th>
                  <th>Scan Type</th>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
                {scanview.map((value) => {
                  return (
                    <tr>
                      <td>1</td>
                      <td>{value.name}</td>
                      <td>{value.age}</td>
                      <td>{value.gender}</td>
                      <td>{value.dob}</td>
                      <td>{value.blood}</td>
                      <td>{value.scan}</td>
                      <td>{value.height}</td>
                      <td>{value.weight}</td>
                      <td>
                        <img src={Envurl + value.image} style={{borderRadius:'50px'}} width='100' height='100'/>
                      </td>
                      <td><button className="btn btn-danger" onClick={()=>deleteForm(value.id)}>Delete</button></td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Scanfooter />
    </>
  );
}

export default Sappointment;
