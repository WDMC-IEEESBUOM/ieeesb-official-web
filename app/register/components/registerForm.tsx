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
import { registration, successMessage, warningMessage } from "../helper";

import { Button } from "@mui/material";

import EmailVerification from "../EmailVerification";
import Modal from "./Modal";
import { useRegister } from "../RegisterContext";

const RegisterForm = () => {
  const {
    handleTelephone,
    handleGmail,
    handleUomMail,
    handleBatch,
    handleFaculty,
    handleDepartment,
    handleChange,
    handleName,
    handleIndex,
    name,
    index,
    mobileNumber,
    gmail,
    uomMail,
    batch,
    faculty,
    department,
    checked,
    showModal,
    setShowModal,
    clearForm,
    clearPIN,
    setRandomNumber,
    checkPIN,
    enterPinButton,
    setEnterPinButton,
  }: any = useRegister();

  async function submitForm(e: any) {
    e.preventDefault();
    // setShowModal((showModal: any) => !showModal);
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

    const result = registration.safeParse(data);
    if (!result.success) {
      const formatedError = result.error.format();
      const nameError = formatedError.name?._errors || "";
      const telephoneError = formatedError.telephone?._errors || "";
      const gmailError = formatedError.gmail?._errors || "";
      const indexError = formatedError.index?._errors || "";
      const uomMailError = formatedError.uomMail?._errors || "";
      if (nameError) {
        warningMessage(nameError[0]);
        return;
      } else if (telephoneError) {
        warningMessage(telephoneError[0]);
        return;
      } else if (gmailError) {
        warningMessage(gmailError[0]);
        return;
      } else if (indexError) {
        warningMessage(indexError[0]);
        return;
      } else if (uomMailError) {
        warningMessage(uomMailError[0]);
        return;
      }
    }
    try {
      let checkUser = false;

      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        const user = Object.values(doc.data()).includes(uomMail);
        if (user === true) {
          warningMessage("This email address already registered to the system");
          checkUser = true;
        }
      });
      if (checkUser) return;
      if (!checked) {
        warningMessage("Confirm your details");
        return;
      }
      const random = parseInt(Math.random() * 1000 + 1000);
      setRandomNumber(random);

      fetch("http://localhost:3000/api/email", {
        method: "POST",
        body: JSON.stringify({
          email: gmail,
          code: random,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      setShowModal(true);
      setEnterPinButton(true);
    } catch (e) {
      console.log(e);
    }
  }

  async function saveData() {
    const check = checkPIN();
    if (!check) {
      warningMessage("Your pin number is wrong");
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

    await setDoc(doc(db, "user", index), storeData);
    successMessage("Data send successfully");
    localStorage.clear();
    clearForm();
    setEnterPinButton(false);
    clearPIN();
    return true;
  }

  return (
    <div className="flex justify-left mt-10 ml-20">
      {showModal && <Modal fn={saveData} />}
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
                onChange={(e: any) => handleBatch(e)}
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
                  onChange={(e: any) => handleFaculty(e)}
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
                  onChange={(e: any) => handleDepartment(e)}
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

          <div className="  gap-4 flex flex-col ">
            <Button
              type="submit"
              sx={{ width: 200 }}
              size="small"
              variant="contained"
            >
              Save details
            </Button>
            {enterPinButton && (
              <Button
                onClick={() => setShowModal(true)}
                sx={{ width: 200 }}
                size="small"
                variant="contained"
              >
                Enter PIN
              </Button>
            )}
          </div>

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
