import LandingPageLayout from '@/components/Layout/LandingPageLayout';
import Link from 'next/link';
import React from 'react';

function TermsOfService() {
  return (
    <LandingPageLayout>
      <div className='max-w-5xl mx-auto flex flex-col-reverse justify-between lg:flex-row items-center py-10 lg:py-14'>
        <section className='    lg:flex   lg:flex-row lg:items-center'>
          <div className='flex-1 '>
            <h1 className='py-4 text-center text-4xl font-bold'>
              Refunds & Cancellation.
            </h1>
            <p> Last Updated: 20th Dec 2023</p>
            <div>
              {` 
              Thank you for choosing Zigment.ai, a subsidiary of Zinomy Partners, for your software and solution needs. We are committed to providing you with top-notch services that meet or exceed your expectations. We understand, however, that there may be circumstances where you may need to request a refund.
              Refund Eligibility
              Refunds will be considered under the following conditions:
              Non-Performance: If there is sufficient evidence that the provided software/solution did not perform its advertised function or failed to deliver the promised results.
              Refund Process
              Request Submission: To request a refund, please contact our customer support team at [support email] and provide detailed information regarding the issue you encountered.
              Resolution Period: After receiving your refund request, Zigment will take up to two weeks to thoroughly investigate and analyze the issue, including a review of relevant data.
              Refund Determination: If it is determined that the software/solution did not meet the advertised function or failed to deliver promised results, a refund will be processed.
              Refund Timeline: Refunds will be issued within 15 working days from the date of resolution confirmation. The refund will be returned to the original source of funds used for the purchase.
              Contact Us
              If you have any questions or concerns regarding our refund policy, please contact us at [contact@zigment.ai] for assistance.
              At Zigment.ai, we value your satisfaction and are dedicated to providing you with reliable and effective solutions. We appreciate your trust in our services.
              Note: This refund policy is subject to change, and any modifications will be posted on our website and will take effect immediately upon posting.
`}
            </div>
          </div>
        </section>
      </div>
    </LandingPageLayout>
  );
}

export default TermsOfService;
