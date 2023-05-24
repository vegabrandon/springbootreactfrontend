import React from "react";
import { Button, TextField } from "@mui/material";
export default function Form() {
    
    return (
        <div
            className="flex flex-col w-[30vw] m-auto items-center justify-evenly h-[40vh]"
        >

            <TextField id="standard-basic" label="Username" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" />
            <Button
                variant="contained"
                className="w-[20vw]"
            >
                Test
            </Button>
        </div>
    )
}