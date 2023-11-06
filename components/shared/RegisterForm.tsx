import React from "react";

const RegisterForm = () => {
  return (
    <form
      action="submit"
      className="flex flex-col gap-4 p-4 rounded-xl w-fit bg-darkBlue mt-6"
    >
      <span className="text-white text-xl font-medium">
        Register now so you don't miss our programs
      </span>
      <div className="flex flex-col p-4 w-full bg-white rounded-lg">
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          className="px-4 py-2 border border-neutral-60 rounded-lg w-full"
        />
        <button className="px-[1.5rem] py-[0.6rem]  bg-darkBlue flex items-center gap-2 text-center text-sm text-white font-medium mt-3 cursor-pointer w-full rounded-lg">
          Subscribe Now
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
