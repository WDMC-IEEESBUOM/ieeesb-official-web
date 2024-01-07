import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const RegisterForm = () => {
  return (
    <div className="flex justify-center mt-10 ">
      <div className="flex flex-col gap-5 ">
        <div className="grid grid-cols-4">
          <div className="text-lg">Name</div>
          <TextField id="outlined-basic" variant="outlined" size="small" />
        </div>

        <div className="grid grid-cols-4">
          <div className="text-lg">Email</div>
          <TextField id="outlined-basic" variant="outlined" size="small" />
        </div>

        <div className="grid grid-cols-4">
          <div className="text-lg">Mobile Number</div>
          <TextField id="outlined-basic" variant="outlined" size="small" />
        </div>

        <div className="grid grid-cols-4">
          <div className="text-lg">Batch</div>
          <FormControl sx={{ maxWidth: 100 }} size="small">
            <InputLabel id="demo-simple-select-label">Batch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Batch"
            >
              <MenuItem value={10}>Batch 19</MenuItem>
              <MenuItem value={10}>Batch 20</MenuItem>
              <MenuItem value={10}>Batch 21</MenuItem>
              <MenuItem value={10}>Batch 22</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="grid grid-cols-4">
          <div className="text-lg">Faculty</div>
          <FormControl sx={{ maxWidth: 150 }} size="small">
            <InputLabel id="demo-simple-select-label">Faculty</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Faculty"
            >
              <MenuItem value={10}>FACULTY OF ARCHITECTURE</MenuItem>
              <MenuItem value={10}>FACULTY OF ENGINEERING</MenuItem>
              <MenuItem value={10}>FACULTY OF BUSINESS</MenuItem>
              <MenuItem value={10}>FACULTY OF INFORMATION TECHNOLOGY</MenuItem>
              <MenuItem value={10}>FACULTY OF MEDICINE</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="grid grid-cols-4">
          <div className="text-lg">Department</div>
          <FormControl sx={{ maxWidth: 200 }} size="small">
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Department"
            >
              <MenuItem value={10}>Bio Medical Engineering</MenuItem>
              <MenuItem value={10}>
                Electronic and Telecommunication Engineering
              </MenuItem>
              <MenuItem value={10}> Electrical Engineering</MenuItem>
              <MenuItem value={10}> Mechanical Engineering</MenuItem>
              <MenuItem value={10}>Civil Engineering</MenuItem>
              <MenuItem value={10}> Material Science Engineering</MenuItem>
              <MenuItem value={10}> Chemical and Process Engineering</MenuItem>
              <MenuItem value={10}>
                Transport Management and Logistics Engineering
              </MenuItem>
              <MenuItem value={10}>Textile and Apparel Engineering</MenuItem>
              <MenuItem value={10}>Earth Resource Engineering</MenuItem>
              <MenuItem value={10}>Computer Science & Engneering</MenuItem>
              <MenuItem value={10}> Information Technology</MenuItem>
              <MenuItem value={10}> Interdisciplinary Study</MenuItem>
              <MenuItem value={10}> Computational Mathematics</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="grid grid-cols-4 mb-10">
          <div className="text-lg"></div>
          <button className="bg-blue-600 w-40 rounded-lg">Save details</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
