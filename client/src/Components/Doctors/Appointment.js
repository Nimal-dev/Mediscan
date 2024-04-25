import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Envurl from "../Scanner/Api";
import axios from "axios"; 

function Appointment() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [blood, setBlood] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [scan, setScan] = useState("");
  const [image, setImage] = useState("");
  const [tumorResult, setTumorResult] = useState("");  //Added tumour update

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      dob: dob,
    };
    fetch("http://127.0.0.1:8000/api/searchscan", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result && result.length > 0) {
          setName(result[0].name);
          setAge(result[0].age);
          setBlood(result[0].blood);
          setHeight(result[0].height);
          setWeight(result[0].weight);
          setScan(result[0].scan);
          setImage(result[0].image);
          // predictTumor(result[0].image);
          if (result[0].scan =="mri_scan") {
            predictTumor(result[0].image); // Run tumor detection code     //Need to check thsi area and update according to the project req.
          } else if (result[0].scan == "xray") {
            predict_pneumonia(result[0].image);
            // Run pneumonia detection code
            // Call function for pneumonia detection
          }
          document.getElementById("seediv").scrollIntoView({ behavior: "smooth" });
        } else {
          // Handle the case when no results are found
          console.log("No results found");
        }
      });
  };
  const predictTumor = (image) => {
    let imagename = Envurl+image
    axios.post("http://127.0.0.1:5000/api/predict_tumor", { image:imagename })
      .then((response) => {
        let  result = Math.round(response.data.result)

        if(result==0){
          setTumorResult('No Tumor Detected')
        }else{
          setTumorResult('Tumor Detected')

        } 
      })
      .catch((error) => {
        console.error("Error predicting tumor:", error);
      });
  };                                                              //finalize the tumour section to a single value
  const predict_pneumonia = (image) => {
    let imagename = Envurl+image
    axios.post("http://127.0.0.1:5000/api/predict_pneumonia", { image:imagename })
      .then((response) => {
        let  result = Math.round(response.data.result)

        console.log(result)
        console.log('RES')
        if(result==0){
          setTumorResult('No Pneumonia Detected')
        }else{
          setTumorResult('Pneumonia Detected')

        } 
      })
      .catch((error) => {
        console.error("Error predicting Pneumonia:", error);
      });
  };                                                              //finalize the tumour section to a single value
  return (
    <>
      <Header />
      <div className="container-fluid bg-primary overflow-hidden px-lg-0">
        <div className="row g-0 mx-lg-0 ">
          <div
            className="col-lg-6 feature-text py-5 wow fadeIn mt-5"
            data-wow-delay="0.1s"
          >
            <div className="wow fadeInDown mt-5">
              <h1 className="mb-5 text-white">Enter patient details</h1>
              <div className="form-outline mb-4 col-sm-5">
                <label
                  className="form-label text-white"
                  htmlFor="form3Example3"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter patient name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3 col-sm-5">
                <label
                  className="form-label text-white"
                  htmlFor="form3Example4"
                >
                  Date of Birth
                </label>
                <input
                  name="dob"
                  type="date"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter patient Date of birth"
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-success btn-lg"
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 pe-lg-0 wow fadeIn"
            data-wow-delay="0.5s"
            style={{ minHeight: "800px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="assets/img/carousel-3.jpg"
                style={{ objectFit: "cover"}}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div id="seediv"></div>

      {name && age ? (
        <div className="container-fluid bg-light overflow-hidden px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 position-relative">
              <img
                src={Envurl + image}
                className="position-absolute img-fluid w-100 h-100"
                style={{ objectFit: "fill" }}
                alt=""
              />
               {/* Display tumor prediction result below the image */}
               
                
             
            </div>
            
            <div
              className="col-lg-6 feature-text py-5 wow fadeIn mt-5"
              data-wow-delay="0.1s"
            >
              <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                <div className="row">
                  <div className="col-sm-12">
                    <p>
                      <strong>Name:</strong> {name}
                    </p>
                    <p>
                      <strong>Age:</strong> {age}
                    </p>
                    <p>
                      <strong>Blood Group:</strong> {blood}
                    </p>
                    <p>
                      <strong>Height:</strong> {height}
                    </p>
                    <p>
                      <strong>Weight:</strong> {weight}
                    </p>
                    <p>
                      <strong>Scan type:</strong> {scan}
                    </p>
                  </div>
                  <div className="tumor-result"><strong>Detected:</strong>{tumorResult}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <img src="assets/img/im.png" style={{ display: "block", margin: "auto"}} alt="" />
      )}

      <Footer />
    </>
  );
}

export default Appointment;
