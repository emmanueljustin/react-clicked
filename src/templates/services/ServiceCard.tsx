import Button from "../../components/Button";
import Container from "../../components/Container"
import Header from "../../components/Header"
import Text from "../../components/Text"
import IPricing from "../../interfaces/pricing";

interface Props {
  pricing: IPricing;
}

const ServiceCard: React.FC<Props> = (props: Props) => {
  return (
    <Container class="service-card">
      <Container class=" w-full h-2" style={{ backgroundColor: props.pricing.color }}></Container>
      <Container class="flex flex-col flex-grow p-5">
        <Header class="font-bold text-2xl">{props.pricing.title}</Header>
        <Text class="mt-10 text-left">
          {props.pricing.description}
        </Text>
        <ul className="mt-7">
          {props.pricing.services.map((items, index) => (
            <li key={index}>
              <span className="inline-block mr-1">
                {items.included ? '✅' : '❌'}
              </span>
              {items.serviceName}
            </li>
          ))}
        </ul>
        <Container class="mt-auto">
          <Container class="my-5 border-t border-gray-300"></Container>
          <Container class="inline-flex flex-shrink-0 items-end space-y-1">
            <Header class="font-bold text-2xl">$ {props.pricing.amount.toFixed(2)}</Header>
            <Text class="font-semibold text-base pb-[1.5px]">USD</Text>
          </Container>
          <Container class="my-5 border-t border-gray-300"></Container>
          <Button class="rounded-md w-full text-white p-2 active:opacity-65" style={{ backgroundColor: props.pricing.color }} onClick={() => console.log(props.pricing.color)}>
            {props.pricing.btnName}
          </Button>
        </Container>
      </Container>
    </Container>
  )
}

export default ServiceCard
