import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from "../components/Container"
import ServiceCard from "../templates/services/ServiceCard"
import { AppDispatch, RootState } from '../store/store';
import { fetchPricing } from '../store/serviceSlice';

const ServicePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pricing, loading } = useSelector((state: RootState) => state.service)

  useEffect(() => {
    dispatch(fetchPricing()); 
  }, [dispatch])

  if (loading) return <p>Loading</p>

  return (
    <>
      <Container class="mt-20 w-full mx-auto px-5 mb-10 md:p-20 md:inline-flex md:items-start md:f space-y-10 md:space-y-0 md:space-x-10 md:mb-0">
        {pricing.map((service, index) => (
          <ServiceCard key={index} pricing={service} />
        ))}
      </Container>
    </>
  )
}

export default ServicePage
