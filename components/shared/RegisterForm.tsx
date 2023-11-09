import React from "react";

const RegisterForm = () => {
  return (
    <form
      action="submit"
      className="flex sm:flex-row flex-col gap-4 sm:gap-8 p-4 rounded-3xl w-full bg-darkBlue mt-6 sm:p-8 sm:rounded-3xl"
    >
      <span className="text-white text-xl sm:text-2xl font-medium sm:font-medium ">
        Register now so you don&lsquo;t miss our programs
      </span>
      <div className="flex sm:flex-row sm:gap-4 flex-col p-4 w-full bg-white rounded-2xl ">
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          className="px-4 py-2 border border-neutral-60 rounded-lg w-full"
        />
        <button className="px-[1.5rem] py-[0.6rem] sm:px-[2.5rem]  bg-darkBlue gap-2 text-center text-sm text-white font-medium mt-3 sm:mt-0 cursor-pointer w-full sm:w-fit whitespace-nowrap sm:h-full rounded-lg">
          Subscribe Now
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
