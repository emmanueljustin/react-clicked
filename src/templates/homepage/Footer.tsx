import Container from "../../components/Container"
import Header from "../../components/Header"
// import Image from "../../components/Images"
// import logo from "../../assets/react.svg"
import Icon from "../../components/Icon"
import Link from "../../components/Link"

const Footer = () => {
  return (
    <>
      <Container class="w-full bg-blue-950 text-white px-20 pt-16 pb-5">
        <Container class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-start w-full gap-3.5 lg:gap-0">
          <Container class="flex flex-col">
          {/* <Image class="rotate" imgSrc={logo} alt="logo" /> */}
            <Container class="flex space-x-2">
              <Header class="font-bold text-[30px]">Contact Us</Header>
            </Container>
            <Container class="mt-5 flex space-x-5">
              <Link href="https://facebook.com/" target="_blank">
                <Icon class="fa-brands fa-facebook fa-xl cursor-pointer" />
              </Link>
              <Link href="https://x.com/" target="_blank">
                <Icon class="fa-brands fa-x-twitter fa-xl cursor-pointer" />
              </Link>
              <Link href="https://instagram.com/" target="_blank">
                <Icon class="fa-brands fa-instagram fa-xl cursor-pointer " />
              </Link>
              <Link href="https://linkedin.com/" target="_blank">
                <Icon class="fa-brands fa-linkedin fa-xl cursor-pointer " />
              </Link>
              <Link href="https://tiktok.com/" target="_blank">
                <Icon class="fa-brands fa-tiktok fa-xl cursor-pointer " />
              </Link>
            </Container>
          </Container>
 
          <Container class="flex flex-col space-y-4">
            <Header class="footer-items">Blogs</Header>
            <Header class="footer-items">News</Header>
            <Header class="footer-items">Help center</Header>
          </Container>

          <Container class="flex flex-col space-y-4">
            <Header class="footer-items">Travel agents</Header>
            <Header class="footer-items">Careers</Header>
            <Header class="footer-items">About us</Header>
          </Container>

          <Container class="flex flex-col space-y-4">
            <Header class="footer-items">Bookings</Header>
            <Header class="footer-items">Cancellation policy</Header>
            {/* <Header class="footer-items"></Header> */}
          </Container>
        </Container>

        <Container class="flex justify-center mt-10 w-full">
          <Header>Copyright © 2024 Clicked</Header>
        </Container>
      </Container>
    </>
  )
}

export default Footer
