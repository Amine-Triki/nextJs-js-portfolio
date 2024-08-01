import Image from "next/image";




const  Services = ({ title, description , src  }) => {
  return (
    <div className="bg-gray-300 w-80 shadow-xl p-5 my-5 text-center flex flex-wrap justify-center items-center flex-col rounded-lg h-80">
                    <Image
              className="image mt-5 mb-5 "
              src={src}
              alt={title}
              width="40"
              height="40"
              
            />
            
            <h3 className="capitalize font-medium	text-xl mb-2">{title}</h3>
            <p className="normal-case	">{description}</p>
    </div>
  )
}

export default Services