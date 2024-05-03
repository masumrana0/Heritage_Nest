import Propertycard from "@/components/ui/Propertycard";
import TestimonialsSection from "@/components/ui/TestmunialSwiper";

const PropertyPage = () => {
  const components = [1, 2, 3, 4];

  return (
    <div className="container mx-auto">
      {/* buttons */}
      <div className="flex  gap-2   pb-3 ">
        <button className="border px-3 py-1 bg-blue-800 text-white ">
          properties(400)
        </button>
        <button className="order px-3 py-1 bg-blue-100 text-gray-600 ">
          New Projects(400)
        </button>
        <button className="border px-3 py-1 bg-blue-100 text-gray-600 ">
          pre-launch offer
        </button>
      </div>

      <div className="w-[45rem] border-b-2 my-2"></div>
      <h3 className="font-bold text-xl py-2">
        400 results for rental property
      </h3>
      {/* projects */}

      <div className="flex flex-col gap-10">
        {components.map((_, index) => (
          <Propertycard key={index} />
        ))}
      </div>

      {/* under line */}
      <div className="w-[45rem] border-b-2 my-7"></div>
      {/* pagination */}
      <div className="flex items-center gap-3">
        <button className=" px-2 p-1 bg-blue-700 text-white   text-md">
          01
        </button>
        <button className=" px-2 p-1 bg-blue-100 text-gray-600   text-md">
          02
        </button>
        <button className=" px-2 p-1 bg-blue-100 text-gray-600   text-md">
          Next
        </button>
      </div>

      {/* need home loan section */}

      <div className="my-20  bg-blue-50 flex  items-center gap-5 w-[81%] p-20 mx-auto ">
        <div className="w-[40%]">
          <h2 className="font-bold text-2xl ">Need a Home Loan?</h2>
          <h2 className="text-lg font-semibold text-gray-600">
            Select How much Home loan you can take
          </h2>
        </div>
 
        <div className="h-2 w-full flex bg-blue-300 rounded-full">
          <span className="h-3 w-3 bg-slate-500 rounded-full p-2 "></span>
          <div className="flex justify-evenly gap-4 items-center w-full px-1 first-child:bg-blue-500 ">
            {["20", "30", "40", "50", "60"].map((number, index) => (
              <span key={index} className="child bg-white w-1 h-full relative ">
                <span className="text-gray-600 absolute top-5">${number}K</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* TestMonial */}
      <div className="w-[80rem]   mx-auto my-20">
        <h3 className="font-bold text-5xl text-center my-16 ">Testimonials</h3>
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default PropertyPage;
