function Description() {
  return (
    <div className="flex flex-auto mt-10">
      <div className="flex flex-col text-left space-y-5 mt-4 m-3 ">
        <h1 className="font-bold "> Air Conditioning Repair</h1>
        <p className=" max-w-6xl">
          if you have been suffering from issues like water leakage, no cooling,
          strange noise etc. from your AC, then chances are that your air
          conditioning unit is in need of repairs. At DhetarwalAir Conditioning
          we are all aware of the need for timely assistance and prompt
          addressing of issues, hence we are the best AC repair company in
          Barmer. Whether it is an AC we installed or not , if you need air
          conditioning repair, you just need to reach out to us and we will send
          our team to address the problem and get your unit fixed in no time.
        </p>
      </div>
      <div className=" flex flex-grow flex-col space-y-5 mt-10 ml-4">
        <h4>Contact Us</h4>
        <form className="bg-white shadow-md rounded px-2 pt-6  pb-8 mb-4">
          <input
            className="shadow mb-4  border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder=" First Name "
            type="text"
          />

          <input
            className="shadow mb-4  border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder=" Last Name "
            type="text"
          />
          <input
            className="shadow mb-4  border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder=" Email Address "
            type="email"
          />
          <input
            className="shadow mb-4  border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder=" Phone Number "
            type="tel"
          />
        </form>
        <button className="bg-blue-700 text-white rounded-md p-1" type="submit">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Description;
