import Container from "../components/Container"
import IService from "../interfaces/Service"
import ServiceCard from "../templates/services/ServiceCard"

function ServicePage () {

  type IServices = IService[];

  const services: IServices = [
    {
      title: "Basic Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      serviceItems: [
        { name: "Standard DSLR Camera", included: true },
        { name: "Photographer", included: true },
        { name: "Pucture Frame", included: true },
        { name: "Family Pucture", included: true },
        { name: "Solo Shots", included: false },
        { name: "Couple Shots", included: false },
        { name: "Creative Shots", included: false },
        { name: "Drone", included: false },
        { name: "Lighting", included: false },
        { name: "Photobooth", included: false },
      ],
      amount: 299.99,
      btnName: "Avail Basic Services",
      color: "bg-black"
    },
    {
      title: "Standard Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      serviceItems: [
        { name: "Standard DSLR Camera", included: true },
        { name: "Photographer", included: true },
        { name: "Pucture Frame", included: true },
        { name: "Family Pucture", included: true },
        { name: "Solo Shots", included: true },
        { name: "Couple Shots", included: true },
        { name: "Creative Shots", included: true },
        { name: "Drone", included: false },
        { name: "Lighting", included: false },
        { name: "Photobooth", included: false },
      ],
      amount: 599.99,
      btnName: "Avail Standard Services",
      color: "bg-blue-700"
    },
    {
      title: "Premium Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      serviceItems: [
        { name: "Standard DSLR Camera", included: true },
        { name: "Photographer", included: true },
        { name: "Pucture Frame", included: true },
        { name: "Family Pucture", included: true },
        { name: "Solo Shots", included: true },
        { name: "Couple Shots", included: true },
        { name: "Creative Shots", included: true },
        { name: "Drone", included: true },
        { name: "Lighting", included: true },
        { name: "Photobooth", included: true },
      ],
      amount: 799.99,
      btnName: "Avail Premium Services",
      color: "bg-purple-700"
    },
  ];

  return (
    <>
      <Container class="mt-20 w-full mx-auto px-5 mb-10 md:p-20 md:inline-flex space-y-10 md:space-y-0 md:space-x-10 md:mb-0">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </Container>
    </>
  )
}

export default ServicePage