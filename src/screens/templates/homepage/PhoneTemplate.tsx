import Container from "../../components/Container"
import Image from "../../components/Images"
import smartApp from "../../assets/smart-app.jpg"

const PhoneTemplate = () => {
  return (
    <>
      <Container class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <Container class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></Container>
        <Container class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></Container>
        <Container class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></Container>
        <Container class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></Container>
        <Container class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
          {/* <Container class="w-full h-full bg-white"></Container> */}
            {/* <Image imgSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
            <Image imgSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" /> */}
            <Image imgSrc={smartApp} class="w-[272px] h-[572px]" alt="" />
        </Container>
      </Container>
    </>
  )
}

export default PhoneTemplate
