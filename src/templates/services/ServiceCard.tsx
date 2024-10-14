import Button from "../../components/Button";
import Container from "../../components/Container"
import Header from "../../components/Header"
import Text from "../../components/Text"
import IService from "../../interfaces/Service";

interface Props {
  service: IService;
}

function ServiceCard(props: Props) {
  return (
    <Container class="service-card">
      <Container class={`${props.service.color} w-full h-2`}></Container>
      <Container class="p-5">
        <Header class="font-bold text-2xl">{props.service.title}</Header>
        <Text class="mt-10 text-left">
          {props.service.description}
        </Text>
        <ul className="mt-7">
          {props.service.serviceItems.map((items, index) => (
            <li key={index}>
              <span className="inline-block mr-1">
                {items.included ? '✅' : '❌'}
              </span>
              {items.name}
            </li>
          ))}
        </ul>
        <Container class="my-5 border-t border-gray-300"></Container>
        <Container class="inline-flex flex-shrink-0 items-end space-y-1">
          <Header class="font-bold text-2xl">$ {props.service.amount.toFixed(2)}</Header>
          <Text class="font-semibold text-base pb-[1.5px]">USD</Text>
        </Container>
        <Container class="my-5 border-t border-gray-300"></Container>
        <Button class={`${props.service.color} rounded-md w-full text-white p-2 active:bg-opacity-65`} onClick={() => console.log('clicked')}>
          {props.service.btnName}
        </Button>
      </Container>
    </Container>
  )
}

export default ServiceCard
