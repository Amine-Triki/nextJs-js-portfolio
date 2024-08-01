
  const Heading = ({ title, description }) => {
    return (
      <div className="flex flex-col	 gap-5 	flex-wrap text-center py-5 my-5	">
        <h2 className="text-4xl uppercase">{title}</h2>
        <hr className="animate-ping	 mx-auto bg-blue-500 w-32 p-1" /> 
        <h3 className="text-lg capitalize">{description}</h3>
      </div>
    );
  };
  
  export default Heading;



