import React from 'react';
import PolicySection from './Policy';
import './Policy.css'; 
import Container from '../../../common/Container/Container';


  const returnPolicyDetails = [
    {
      title: 'Eligibility',
      description: 'Items must be unused, with tags attached, and returned within 30 days of delivery.',
    },
    {
      title: 'Process',
      description: 'Initiate returns through our Return Center for a smooth and efficient process.',
    },
    {
      title: 'Refund',
      description: 'Expect a refund to your original payment method within 7-10 business days.',
    },
  ];

  const cancellationPolicyDetails = [
    {
      title: 'Cancellation Window',
      description: 'Orders can be canceled within 24 hours of placement for a full refund.',
    },
    {
      title: 'Cancellation Process',
      description: 'Visit our Order Management section to cancel your order effortlessly.',
    },
    {
      title: 'Refund Timeline',
      description: 'Refunds for canceled orders are processed within 5-7 business days.',
    },
  ];
  export const Policys = () =>{ 
    return (
      <Container>
        <div className="App">
      <PolicySection
        mainTitle="RETURN POLICY"
        subTitle="EASY RETURNS AT KLOTHINK"
        description="Explore our hassle-free return policy designed to ensure your satisfaction with every purchase."
        buttonText="Read Return Policy"
        buttonLink="/return-policy"
        policyDetails={returnPolicyDetails}
      />

      <PolicySection
        mainTitle="CANCELLATION POLICY"
        subTitle="FLEXIBLE ORDERING EXPERIENCE"
        description="Familiarize yourself with our cancellation policy to make changes to your order with ease."
        buttonText="Read Cancellation Policy"
        buttonLink="/cancellation-policy"
        policyDetails={cancellationPolicyDetails}
      />
    </div>
      </Container>
    
  );}





