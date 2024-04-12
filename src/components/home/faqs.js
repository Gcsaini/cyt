import FAQ from "./faq";
export default function Faqs() {
  return (
    <div
      className="rbt-accordion-area accordion-style-1 bg-color-white"
      style={{ paddingTop: 70, paddingBottom: 70 }}
    >
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-10 offset-lg-1">
            <div className="rbt-accordion-style accordion">
              <div className="section-title text-center mb--60">
                <span className="subtitle bg-pink-opacity">faq</span>
                <h2 className="title">Have a Question?</h2>
                <p className="description has-medium-font-size mt--20">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
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
                    q={"What services does a counseling psychologist offer?"}
                    a={
                      "A counseling psychologist offers a range of services including individual therapy, group therapy, couples counseling, and family therapy. They may also provide assessments, psychoeducation, and guidance on personal development."
                    }
                  />
                  <FAQ
                    q={"What is the role of a clinical psychologist?"}
                    a={
                      "Clinical psychologists specialize in assessing, diagnosing, and treating a wide range of mental health disorders. They often work with clients who have severe or complex psychological issues."
                    }
                  />
                  <FAQ
                    q={"What services does a clinical psychologist offer?"}
                    a={
                      "Clinical psychologists offer services such as diagnostic assessments, individual therapy, cognitive-behavioral therapy, and other evidence-based treatments for mental health disorders. They may also work in research, teaching, and consultation roles."
                    }
                  />
                  <FAQ
                    q={"When should I see a psychiatrist?"}
                    a={
                      "You may consider seeing a psychiatrist if you are experiencing severe mental health symptoms that may require medication, or if you have a complex mental health condition that requires a comprehensive evaluation and treatment plan."
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
