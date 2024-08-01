


import Heading from "@/components/heading/Heading";
import ContactLeft from "@/components/contact/ContacLeft";
import ContactRight from "@/components/contact/ContactRight";

const Contact = () => {



  return (
    
    <main>
      <section className=" text-center pt-5 pb-5" id="Contact">
      <div className="container mx-auto">
        <Heading title="Contact Me" description="Get in touch" />

        <div id="flex" className="flex  justify-center  mx-auto flex-wrap">
          <div className="flex-auto	">
        <ContactLeft/>
            
          </div>
          <div className="flex-auto">
        <ContactRight/>

          </div>

    
        </div>
      </div>
    </section>
    </main>
    
  )
}

export default Contact