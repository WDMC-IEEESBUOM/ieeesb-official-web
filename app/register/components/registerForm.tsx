"use client";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ToastContainer } from "react-toastify";
import { setDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "./../../../services/firebase";
import "react-toastify/dist/ReactToastify.css";
import {
  clearForm,
  registration,
  successMessage,
  warningMessage,
} from "../helper";

import { Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [index, setIndex] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gmail, setGmail] = useState("");
  const [uomMail, setUomMail] = useState("");
  const [batch, setBatch] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [checked, setChecked] = useState(true);

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  }

  function handleIndex(e: React.ChangeEvent<HTMLInputElement>) {
    setIndex(e.target.value);
    localStorage.setItem("index", e.target.value);
  }

  function handleTelephone(e: React.ChangeEvent<HTMLInputElement>) {
    setMobileNumber(e.target.value);
    localStorage.setItem("contactNo", e.target.value);
  }
  function handleGmail(e: React.ChangeEvent<HTMLInputElement>) {
    setGmail(e.target.value);
    localStorage.setItem("gmail", e.target.value);
  }
  function handleUomMail(e: React.ChangeEvent<HTMLInputElement>) {
    setUomMail(e.target.value);
    localStorage.setItem("uomMail", e.target.value);
  }
  function handleBatch(e: React.ChangeEvent<HTMLInputElement>) {
    setBatch(e.target.value);
    localStorage.setItem("batch", e.target.value);
  }
  function handleFaculty(e: React.ChangeEvent<HTMLInputElement>) {
    setFaculty(e.target.value);
    localStorage.setItem("faculty", e.target.value);
  }
  function handleDepartment(e: React.ChangeEvent<HTMLInputElement>) {
    setDepartment(e.target.value);
    localStorage.setItem("department", e.target.value);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
    localStorage.setItem("checked", e.target.value);
  }
  useEffect(function () {
    const name = localStorage.getItem("name");
    const index = localStorage.getItem("index");
    const contactNo = localStorage.getItem("contactNo");
    const gmail = localStorage.getItem("gmail");
    const uomMail = localStorage.getItem("uomMail");
    const batch = localStorage.getItem("batch");
    const faculty = localStorage.getItem("faculty");
    const department = localStorage.getItem("department");
    const checked = localStorage.getItem("checked");

    setName(name);
    setIndex(index);
    setMobileNumber(contactNo);
    setGmail(gmail);
    setUomMail(uomMail);
    setBatch(batch);
    setFaculty(faculty);
    setDepartment(department);
    setChecked(checked);
  }, []);

  async function submitForm(e: any) {
    e.preventDefault();

    const data = {
      name,
      index,
      telephone: mobileNumber,
      gmail,
      uomMail,
    };
    if (!batch || !faculty || !department) {
      warningMessage("Fill the form");
      return;
    }

    const storeData = {
      name,
      index,
      telephone: mobileNumber,
      gmail,
      uomMail,
      batch,
      faculty,
      department,
    };

    const result = registration.safeParse(data);
    if (!result.success) {
      const formatedError = result.error.format();

      const nameError = formatedError.name?._errors || "";
      const telephoneError = formatedError.telephone?._errors || "";
      const gmailError = formatedError.gmail?._errors || "";
      const indexError = formatedError.index?._errors || "";
      const uomMailError = formatedError.uomMail?._errors || "";

      if (nameError) warningMessage(nameError[0]);
      else if (telephoneError) warningMessage(telephoneError[0]);
      else if (gmailError) warningMessage(gmailError[0]);
      else if (indexError) warningMessage(indexError[0]);
      else if (uomMailError) warningMessage(uomMailError[0]);
    }
    try {
      let checkUserExist = false;
      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        const user = Object.values(doc.data()).includes(uomMail);
        if (user === true) {
          warningMessage("This email address already registered to the system");
          checkUserExist = true;
        }
      });

      if (!checkUserExist) {
        if (checked) {
          await setDoc(doc(db, "user", index), storeData);
          successMessage("Data send successfully");
          localStorage.clear();
          clearForm(
            setName,
            setIndex,
            setMobileNumber,
            setGmail,
            setUomMail,
            setBatch,
            setFaculty,
            setDepartment,
            setChecked
          );
        } else {
          warningMessage("Confirm your details");
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex justify-left mt-10 ml-20">
      <form onSubmit={submitForm}>
        <div className="flex flex-col gap-5 ">
          <div>
            <TextField
              id="outlined-basic"
              size="small"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => handleName(e)}
              required
              InputProps={{ sx: { borderRadius: 10 } }}
            />
          </div>
          <div>
            <TextField
              InputProps={{ sx: { borderRadius: 10 } }}
              id="outlined-basic"
              size="small"
              label="Index"
              required
              variant="outlined"
              value={index}
              onChange={(e) => handleIndex(e)}
            />
          </div>
          <div>
            <TextField
              InputProps={{ sx: { borderRadius: 10 } }}
              id="outlined-basic"
              size="small"
              required
              label="Contact Number(Whatsapp)"
              variant="outlined"
              value={mobileNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleTelephone(e)
              }
            />
          </div>
          <div className="md:grid md:grid-cols-4 lg:gap-5   flex flex-col gap-4">
            <div>
              <TextField
                InputProps={{ sx: { borderRadius: 10 } }}
                id="outlined-basic"
                size="small"
                required
                label="University Email(sample@uom.lk)"
                variant="outlined"
                value={uomMail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleUomMail(e)
                }
              />
            </div>
            <div>
              <TextField
                InputProps={{ sx: { borderRadius: 10 } }}
                id="outlined-basic"
                size="small"
                label="Gmail"
                required
                variant="outlined"
                value={gmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleGmail(e)
                }
              />
            </div>
          </div>
          <div>
            <FormControl sx={{ width: 220 }} size="small">
              <InputLabel id="demo-simple-select-label">Batch</InputLabel>
              <Select
                inputProps={{ sx: { borderRadius: 10 } }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Batch"
                value={batch}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleBatch(e)
                }
              >
                <MenuItem value="Batch 19">Batch 19</MenuItem>
                <MenuItem value="Batch 20">Batch 20</MenuItem>
                <MenuItem value="Batch 21">Batch 21</MenuItem>
                <MenuItem value="Batch 22">Batch 22</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="md:grid md:grid-cols-4 lg:gap-5 md:gap-52 flex flex-col gap-4">
            <div>
              <FormControl sx={{ width: 220 }} size="small">
                <InputLabel id="demo-simple-select-label">Faculty</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Faculty"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleFaculty(e)
                  }
                  value={faculty}
                  inputProps={{ sx: { borderRadius: 10 } }}
                >
                  <MenuItem value="Faculty Of Architecture">
                    Faculty Of Architecture
                  </MenuItem>
                  <MenuItem value=" Faculty Of Engineering">
                    Faculty Of Engineering
                  </MenuItem>
                  <MenuItem value=" Faculty Of Business">
                    Faculty Of Business
                  </MenuItem>
                  <MenuItem value="Faculty Of Information technology">
                    Faculty Of Information technology
                  </MenuItem>
                  <MenuItem value="Faculty Of Medicine">
                    Faculty Of Medicine
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <FormControl sx={{ minWidth: 220 }} size="small">
                <InputLabel id="demo-simple-select-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Department"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleDepartment(e)
                  }
                  value={department}
                >
                  <MenuItem value="Bio Medical Engineering">
                    Bio Medical Engineering
                  </MenuItem>
                  <MenuItem value="Electronic and Telecommunication Engineering">
                    Electronic and Telecommunication Engineering
                  </MenuItem>
                  <MenuItem value="Electrical Engineering">
                    Electrical Engineering
                  </MenuItem>
                  <MenuItem value="Mechanical Engineering">
                    Mechanical Engineering
                  </MenuItem>
                  <MenuItem value="Civil Engineering">
                    Civil Engineering
                  </MenuItem>
                  <MenuItem value="Material Science Engineering">
                    Material Science Engineering
                  </MenuItem>
                  <MenuItem value="Chemical and Process Engineering">
                    Chemical and Process Engineering
                  </MenuItem>
                  <MenuItem value="Transport Management and Logistics Engineering">
                    Transport Management and Logistics Engineering
                  </MenuItem>
                  <MenuItem value="Textile and Apparel Engineering">
                    Textile and Apparel Engineering
                  </MenuItem>
                  <MenuItem value="Earth Resource Engineering">
                    Earth Resource Engineering
                  </MenuItem>
                  <MenuItem value="Computer Science & Engneering">
                    Computer Science & Engneering
                  </MenuItem>
                  <MenuItem value="Information Technology">
                    Information Technology
                  </MenuItem>
                  <MenuItem value="Interdisciplinary Study">
                    Interdisciplinary Study
                  </MenuItem>
                  <MenuItem value="Computational Mathematics">
                    Computational Mathematics
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <FormControlLabel
              control={<Checkbox />}
              label="I confirm that I have entered the details correctly"
              checked={checked}
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            sx={{ width: 200 }}
            size="small"
            variant="contained"
          >
            Save details
          </Button>
          <div className="mb-10"></div>
          {/* <button type="submit" className="bg-blue-600 w-40 rounded-lg mb-5">
            Save details
          </button> */}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
