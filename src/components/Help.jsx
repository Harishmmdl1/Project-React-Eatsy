import React from "react";
import TopBar from "./TopBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Help = () => {
  return (
    <>
      <TopBar />
      <div className="helpComponent">
        <div className="container mt-5">
          <h1 className="text-center mb-4">Help & Support</h1>
          <p className="text-center mb-5">Let's take a step ahead and help you better.</p>
          <div className="row">
            <div className="col-md-3">
              <ul className="nav flex-column nav-pills" id="helpTabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="partnerOnboarding-tab" data-toggle="pill" href="#partnerOnboarding" role="tab" aria-controls="partnerOnboarding" aria-selected="true">Partner Onboarding</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="legal-tab" data-toggle="pill" href="#legal" role="tab" aria-controls="legal" aria-selected="false">Legal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="faqs-tab" data-toggle="pill" href="#faqs" role="tab" aria-controls="faqs" aria-selected="false">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <div className="tab-content" id="helpTabContent">
                <div className="tab-pane fade show active" id="partnerOnboarding" role="tabpanel" aria-labelledby="partnerOnboarding-tab">
                  <h2>Partner Onboarding</h2>
                  <p>I want to partner my restaurant with Eatsy</p>
                  <p>What are the mandatory documents needed to list my restaurant on Eatsy?</p>
                  <p>I want to opt-out from Google reserve</p>
                  <p>After I submit all documents, how long will it take for my restaurant to go live on Eatsy?</p>
                  <p>What is this one-time Onboarding fee? Do I have to pay for it while registering?</p>
                </div>
                <div className="tab-pane fade" id="legal" role="tabpanel" aria-labelledby="legal-tab">
                  <h2>Legal</h2>
                  <p>Legal details will be provided here.</p>
                </div>
                <div className="tab-pane fade" id="faqs" role="tabpanel" aria-labelledby="faqs-tab">
                  <h2>FAQs</h2>
                  <div className="accordion" id="faqAccordion">
                    <div className="card">
                      <div className="card-header" id="faq1">
                        <h5 className="mb-0">
                          <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            1. How can I place an order?
                          </button>
                        </h5>
                      </div>
                      <div id="collapse1" className="collapse show" aria-labelledby="faq1" data-parent="#faqAccordion">
                        <div className="card-body">
                          To place an order, browse through the categories, select your items, and add them to the cart. Then proceed to checkout, provide your delivery details, and make the payment.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="faq2">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            2. How do I track my order?
                          </button>
                        </h5>
                      </div>
                      <div id="collapse2" className="collapse" aria-labelledby="faq2" data-parent="#faqAccordion">
                        <div className="card-body">
                          After placing an order, you can track its status from the 'My Orders' section in your account.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="faq3">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            3. What is the refund policy?
                          </button>
                        </h5>
                      </div>
                      <div id="collapse3" className="collapse" aria-labelledby="faq3" data-parent="#faqAccordion">
                        <div className="card-body">
                          Our refund policy allows you to request a refund within 7 days of delivery if you are not satisfied with the product.
                        </div>
                      </div>
                    </div>
                    {/* Add more FAQs in similar fashion */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
