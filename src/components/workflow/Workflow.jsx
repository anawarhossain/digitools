import React from "react";

const Workflow = () => {
  return (
    <div className="bg-linear-to-r from-[#5039F7] to-[#9416FB]">
      <div className="container mx-auto text-center p-16 text-white space-y-4">
        <h1 className="text-4xl">Ready to Transform Your Workflow?</h1>
        <p className="text-sm text-gray-200">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white rounded-full overflow-hidden">
            <button className="btn btn-block  bg-linear-to-r from-[#5039F7] to-[#9416FB] bg-clip-text text-transparent">
              Start Pro Trial
            </button>
          </div>
          <div>
            <button className=" btn btn-outline rounded-full">
              Watch Demo
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-100">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Workflow;
