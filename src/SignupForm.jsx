import React from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
export default function SignupForm({setForm}) {
    
    let handleSignup = () => {
        axios.post()
    }


    return (
        <div>
            <div className="absolute w-[30vw] ml-[28vw] mt-[3vh]">
                <button className="cursor-pointer" onClick={() => {setForm("")}}>
                    <i className="fa-solid fa-arrow-left text-2xl"></i>
                </button>
            </div>
            <div
                className="flex flex-col w-[30vw] m-auto items-center justify-evenly h-[40vh]"
            >

                <TextField id="standard-basic" label="Username" variant="standard" />
                <TextField id="standard-basic" label="Password" type="password" variant="standard" />
                <Button
                    variant="contained"
                    className="w-[10vw]"
                    onClick={handleSignup}
                >
                    Signup
                </Button>
            </div>

        </div>
        
    )
}