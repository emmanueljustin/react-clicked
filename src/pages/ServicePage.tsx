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
      <Container class="mt-32 w-full mx-auto px-10 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pricing.map((service, index) => (
          <ServiceCard key={index} pricing={service} />
        ))}
      </Container>
    </>
  )
}

export default ServicePage
