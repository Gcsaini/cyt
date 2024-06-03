import FAQ from "./faq";
export default function Faqs() {
  return (
    <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="rbt-accordion-style accordion">
              <div className="section-title text-start mb--60">
                <h4 className="title">Purchases &amp; Refunds</h4>
              </div>
              <div className="rbt-accordion-style rbt-accordion-04 accordion">
                <div className="accordion" id="accordionExamplec3">
                  <FAQ
                    q={"What is the role of a counseling psychologist?"}
                    a={
                      "Counseling psychologists focus on helping individuals improve their overall well-being, resolve personal issues, and develop coping skills. They often work with clients facing life transitions, relationship problems, stress, and other common challenges."
                    }
                  />
                  <FAQ
                    q={"What is the role of a counseling psychologist?"}
                    a={
                      "Counseling psychologists focus on helping individuals improve their overall well-being, resolve personal issues, and develop coping skills. They often work with clients facing life transitions, relationship problems, stress, and other common challenges."
                    }
                  />
                  <FAQ
                    q={"What is the role of a counseling psychologist?"}
                    a={
                      "Counseling psychologists focus on helping individuals improve their overall well-being, resolve personal issues, and develop coping skills. They often work with clients facing life transitions, relationship problems, stress, and other common challenges."
                    }
                  />
                  <FAQ
                    q={"What is the role of a counseling psychologist?"}
                    a={
                      "Counseling psychologists focus on helping individuals improve their overall well-being, resolve personal issues, and develop coping skills. They often work with clients facing life transitions, relationship problems, stress, and other common challenges."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-accordion-style accordion">
              <div className="section-title text-start mb--60">
                <h4 className="title">Making Courses</h4>
              </div>
              <div className="rbt-accordion-style rbt-accordion-04 accordion">
                <div className="accordion" id="faqs-accordionExamplec3">
                  <FAQ
                    q={"What is the role of a counseling psychologist?"}
                    a={
                      "Counseling psychologists focus on helping individuals improve their overall well-being, resolve personal issues, and develop coping skills. They often work with clients facing life transitions, relationship problems, stress, and other common challenges."
                    }
                  />
                  <FAQ
                    q={"What is the role of a counseling psychologist?"}
                    a={
                      "Counseling psychologists focus on helping individuals improve their overall well-being, resolve personal issues, and develop coping skills. They often work with clients facing life transitions, relationship problems, stress, and other common challenges."
                    }
                  />

                  <FAQ
                    q={"What is the role of a counseling psychologist?"}
                    a={
                      "Counseling psychologists focus on helping individuals improve their overall well-being, resolve personal issues, and develop coping skills. They often work with clients facing life transitions, relationship problems, stress, and other common challenges."
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
