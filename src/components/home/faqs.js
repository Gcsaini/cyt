import FAQ from "./faq";
export default function Faqs() {
  return (
    <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-12">
            <div className="rbt-accordion-style accordion">
              <div className="section-title text-start mb--60">
                <h4 className="title">Help and Support for Clients</h4>
              </div>
              <div className="rbt-accordion-style rbt-accordion-04 accordion">
                <div className="accordion" id="accordionExamplec3">
                  <FAQ
                    q={"What services does Choose Your Therapist offer?"}
                    a={
                      "We offer a range of mental health services including online counseling, relaxation sessions, peer support groups, school-based programs, corporate programs, and assessment tools."
                    }
                  />
                  <FAQ
                    q={"What should I expect during my first therapy session?"}
                    a={
                      "During your first session, your therapist will get to know you, discuss your concerns, and develop a plan tailored to your needs. It’s a safe space to share whatever you’re comfortable with."
                    }
                  />
                  <FAQ
                    q={"Are the sessions confidential?"}
                    a={
                      "Yes, all sessions are confidential. Your privacy is of utmost importance to us, and we adhere to strict confidentiality and data protection policies."
                    }
                  />
                  <FAQ
                    q={"Can I change my therapist if I’m not comfortable?"}
                    a={
                      "Absolutely. If you feel that your therapist is not the right fit for you, you can request to change therapists at any time."
                    }
                  />
                  <FAQ
                    q={"Do you offer services for specific issues like anxiety or depression?"}
                    a={
                      "Yes, our therapists are trained to handle a wide range of issues including anxiety, depression, stress, relationship problems, trauma, and more."
                    }
                  />
                  <FAQ
                    q={"Are there any free resources available?"}
                    a={
                      "We offer various free resources such as articles, self-help tools, and webinars to support your mental health journey."
                    }
                  />
                  <FAQ
                    q={"Do you offer therapy sessions for children and adolescents?"}
                    a={
                      "Yes, we have specialized therapists who work with children and adolescents to address their unique mental health needs."
                    }
                  />
                  <FAQ
                    q={"How long are therapy sessions?"}
                    a={
                      "Therapy sessions typically last between 45 to 60 minutes, depending on the type of service and the therapist's schedule."
                    }
                  />
                  <FAQ
                    q={"Can I have therapy sessions with my partner or family members?"}
                    a={
                      "Yes, we offer couples and family therapy sessions to help address relationship issues and improve communication among family members."
                    }
                  />
                  <FAQ
                    q={"How do I prepare for my first therapy session?"}
                    a={
                      "There is no specific preparation required. Just be ready to talk about what’s been on your mind. It can be helpful to jot down any questions or concerns you want to discuss."
                    }
                  />
 <FAQ
                    q={"How often should I attend therapy sessions?"}
                    a={
                      "The frequency of therapy sessions depends on your individual needs and goals. Your therapist will work with you to determine the best schedule."
                    }
                  />
                  <FAQ
                    q={"How do I know if my therapist is a good fit for me?"}
                    a={
                      "Finding the right therapist is crucial. During your initial sessions, assess how comfortable you feel with your therapist. If you don’t feel it’s a good fit, don’t hesitate to request a change."
                    }
                  />

                  <FAQ
                    q={"How can I maximize the benefits of therapy?"}
                    a={
                      "Be open and honest with your therapist, actively participate in sessions, and apply the strategies and tools discussed during your sessions to your daily life."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
