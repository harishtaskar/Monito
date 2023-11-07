"use client";
import React from "react";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";

const ContactButtons = () => {
  return (
    <div className="flex flex-row gap-2 items-center my-2">
      <button className="btn-filled">Contact us</button>
      <div className="flex flex-row gap-2">
        <button className="btn-outline">
          <TextsmsOutlinedIcon fontSize="small" /> Adopt the pet
        </button>
      </div>
    </div>
  );
};

export default ContactButtons;
