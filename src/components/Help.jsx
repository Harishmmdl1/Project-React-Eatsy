  import React, { useState } from "react";
  import TopBar from "./TopBar";
  import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

  const Help = () => {
    const [hide, setHide] = useState({
      showPartner: true,
      showLegal: false,
      showFAQS: false,
    });
    return (
      <>
        <TopBar />
        <div className="helpComponent">
          <div className="container mt-5">
            <h1 className="text-center mb-4">Help & Support</h1>
            <p className="text-center mb-5">
              Let's take a step ahead and help you better.
            </p>
            <div className="row">
              <div className="col-md-3">
                <ul
                  className="nav flex-column nav-pills"
                  id="helpTabs"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className={`nav-link ${hide.showPartner ? "active" : ""} `}
                      id="partnerOnboarding-tab"
                      data-toggle="pill"
                      href="#partnerOnboarding"
                      role="tab"
                      aria-controls="partnerOnboarding"
                      aria-selected="true"
                      onClick={() => {
                        setHide({
                          showPartner: true,
                          showLegal: false,
                          showFAQS: false,
                        });
                      }}
                    >
                      Partner Onboarding
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={() => {
                        setHide({
                          showPartner: false,
                          showLegal: true,
                          showFAQS: false,
                        });
                      }}
                      className={`nav-link ${hide.showLegal ? "active" : ""} `}
                      id="legal-tab"
                      data-toggle="pill"
                      href="#legal"
                      role="tab"
                      aria-controls="legal"
                      aria-selected="false"
                    >
                      Legal
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={() => {
                        setHide({
                          showPartner: false,
                          showLegal: false,
                          showFAQS: true,
                        });
                      }}
                      className={`nav-link ${hide.showFAQS ? "active" : ""} `}
                      id="faqs-tab"
                      data-toggle="pill"
                      href="#faqs"
                      role="tab"
                      aria-controls="faqs"
                      aria-selected="false"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-9">
                <div className="tab-content" id="helpTabContent">
                  {hide.showPartner && (
                    <div
                      className="tab-pane fade show active"
                      id="partnerOnboarding"
                      role="tabpanel"
                      aria-labelledby="partnerOnboarding-tab"
                    >
                      <h2>Partner Onboarding</h2>
                      <div
                        class="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              I want to partner my restaurant with Eatsy
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              <h5>Partner with us</h5>
                              <a href="mailto:eatsy@example.com?subject=Partnership%20Inquiry&body=Hello%20Eatsy%20Team,">
                                Send us an email
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              What are the mandatory documents needed to list my
                              restaurant on Eatsy?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              <ul>
                                <li>
                                  Copies of the below documents are mandatory
                                </li>
                                <li>FSSAI Licence OR FSSAI Acknowledgement</li>
                                <li>Pan Card</li>
                                <li>GSTIN Certificate</li>
                                <li>Cancelled Cheque OR bank Passbook</li>
                                <li>Menu</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              I want to opt-out from Google reserve
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              <a href="mailto:eatsy@example.com?subject=Partnership%20Inquiry&body=Hello%20Eatsy%20Team,">
                                Send us an email
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                            >
                              After I submit all documents, how long will it take
                              for my restaurant to go live on Eatsy?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFour"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              After all mandatory documents have been received and
                              verified it takes upto 7-10 working days for the
                              onboarding to be completed and make your restaurant
                              live on the platform.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFive"
                              aria-expanded="false"
                              aria-controls="flush-collapseFive"
                            >
                              What is this one time Onboarding fees? Do I have to
                              pay for it while registering?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFive"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              This is a one-time fee charged towards the system &
                              admin costs incurred during the onboarding process.
                              It is deducted from the weekly payouts after you
                              start receiving orders from Eatsy.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSix"
                              aria-expanded="false"
                              aria-controls="flush-collapseSix"
                            >
                              Who should I contact if I need help & support in
                              getting onboarded?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseSix"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              You can connect with Partner Support on
                              080-67466777/68179777 or write to
                              partnersuport@eatsy.in
                              <br />
                              <a href="mailto:someone@example.com?subject=Partnership%20Inquiry&body=Hello%20Eatsy%20Team,">
                                Send us an email
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSeven"
                              aria-expanded="false"
                              aria-controls="flush-collapseSeven"
                            >
                              How much commission will I be charged by Easty?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseSeven"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              The commission charges vary for different cities.
                              You will be able to see the commission applicable
                              for you once the preliminary onboarding details have
                              been filled
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {hide.showLegal && (
                    <div
                      className="tab-pane fade show active"
                      id="legal"
                      role="tabpanel"
                      aria-labelledby="legal-tab"
                    >
                      <h2>Legal</h2>
                      <div
                        class="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              Terms of Use
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              These terms of use (the "Terms of Use") govern your
                              use of our website www.Eatsy.in (the "Website") and
                              our "Eatsy" application for mobile and handheld
                              devices (the "App"). The Website and the App are
                              jointly referred to as the "Services"). Please read
                              these Terms of Use carefully before you download,
                              install or use the Services. If you do not agree to
                              these Terms of Use, you may not instali, download or
                              use the Services. By installing, downloading or
                              using the Services, you signify your acceptance to
                              the Terms of Use and Privacy Policy (being hereby
                              incorporated by reference herein) which takes effect
                              on the date on which you download, install or use
                              the Services, and create a legally binding
                              arrangement to abide by the same.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              Privacy Policy
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              We (Bundi Technologies Private Limited, alias
                              "Eatsy") are fully committed to respecting your
                              privacy and shall ensure that your personal
                              information is safe with us. This privacy policy
                              sets out the information practices of www.Eatsy.com
                              ("Website") including the type of information is
                              collected, how the information is collected, how the
                              information is used and with whom it is shared.
                              Reference to "you" in this Privacy Policy refers to
                              the users of this Website whether or not you access
                              the services available on the Website or consummate
                              a transaction on the Website. By using or accessing
                              this Website, you agree to the terms and conditions
                              of this Privacy Policy. You also expressly consent
                              to our use and disclosure of your Personal
                              Information (as defined below) in any manner as
                              described in this Privacy Policy and further signify
                              your agreement to this Privacy Policy and the Terms
                              of Use (being incorporated by reference herein). If
                              you do not agree with the terms and conditions of
                              this Privacy Policy, please do not proceed further
                              or use or access this Website
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              Cancellations and Refunds
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              a) As a general rule you shall not be entitled to
                              cancel your order once placed. You may choose to
                              cancel your order only within one-minute of the
                              order being placed by you. However, subject to your
                              previous cancellation history, Eatsy reserves the
                              right to deny any refund to you pursuant to a
                              cancellation initiated by you even if the same is
                              within one- minute. b)If you cancel your order after
                              one minute of placing it, Eatsy shall have a right
                              to charge you 100% of the order amount as the
                              cancellation fee, with a right to either not to
                              refund the order value in case your order is prepaid
                              or recover from your subsequent order in case your
                              order is postpaid, to compensate our
                              restaurant/merchants and delivery partners. c)Eatsy
                              reserves the right to charge you cancellation fee
                              for the orders constrained to be cancelled by Eatsy
                              for reasons not attributable to Eatsy, including but
                              not limited to: i)in the event if the address
                              provided by you is either wrong or falls outside the
                              delivery zone; ii) failure to contact you by phone
                              or email at the time of delivering the order
                              booking, iii) failure to deliver your order due to
                              lack of information, direction or authorization from
                              you at the time of delivery, or iv) unavailability
                              of all the items ordered by you at the time of
                              booking the order. However, in the unlikely event of
                              an item on your order being unavailable, Eatsy will
                              contact you on the phone number provided to us at
                              the time of placing the order and inform you of such
                              unavailability. In such an event you will be
                              entitled to cancel the entire order and shall be
                              entitled to a refund to an amount upto 100% of the
                              order value. d)in case of cancellations for the
                              reasons attributable to Eatsy or the restaurant
                              partner or delivery partners, Eatsy shall not charge
                              you any cancellation fee.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {hide.showFAQS && (
                    <div
                      className="tab-pane fade show active"
                      id="faqs"
                      role="tabpanel"
                      aria-labelledby="faqs-tab"
                    >
                      <h2>FAQs</h2>
                      <div
                        class="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              What is Eatsy Customer Care Number?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              We value our customer's time and herice moved away
                              from a single customer care number to a
                              comprehensive chat- based support system for quick
                              and easy resolution. You no longer have to go
                              through the maze of an IVRS call support. Just
                              search for your issue in the help section on this
                              page and initiate a chat with us. A customer care
                              executive will be assigned to you shortly. You can
                              also email us your issue on support@Eatsy.in
                              <br />
                              <br />
                              Note: We value your privacy and your information is
                              safe with us. Please do not reveal any personal
                              information, bank account number, OTP etc. to
                              another person. A Eatsy representative will never
                              ask you for these details. Please do not reveal
                              these details to fraudsters and imposters claiming
                              to be calling on our behalf. Be vigilant and do not
                              entertain phishing calls or emails.
                              <br />
                              <a href="mailto:someone@example.com?subject=Partnership%20Inquiry&body=Hello%20Eatsy%20Team,">
                                Send us an email
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              I want to explore career opportunities with Eatsy
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              <h4>Join our team</h4>
                              <a href="mailto:someone@example.com?subject=Partnership%20Inquiry&body=Hello%20Eatsy%20Team,">
                                Send us an email
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              I want to provide feedback
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              <a href="mailto:someone@example.com?subject=Partnership%20Inquiry&body=Hello%20Eatsy%20Team,">
                                Send us an email
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                            >
                              Can I edit my order
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFour"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              Your order can be edited before it reaches the
                              restaurant. You could contact customer support team
                              via chat or call to do so. Once order is placed and
                              restaurant starts preparing your food, you may not
                              edit its contents
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFive"
                              aria-expanded="false"
                              aria-controls="flush-collapseFive"
                            >
                              I want to cancel my order
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFive"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              We will do our best to accommodate your request if
                              the order is not placed to the restaurant (Customer
                              service number 080-67466729). Please note that we
                              will have a right to charge a cancellation fee up to
                              full order value to compensate our restaurant and
                              delivery partners if your order has been confirmed
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSix"
                              aria-expanded="false"
                              aria-controls="flush-collapseSix"
                            >
                              Will Eatsy be accountable for quality/quantity?
                            </button>
                          </h2>
                          <div
                            id="flush-collapseSix"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              Quantity and quality of the food is the restaurants'
                              responsibility. However in case of issues with the
                              quality or quantity. kindly submit your feedback and
                              we will pass it on to the restaurant
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

  export default Help;
