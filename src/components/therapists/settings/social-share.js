// import React, { useState } from "react";

// export default function SocialShare() {
//   const [services, setServices] = useState({
//     individualCounselling: false,
//     relationshipCounselling: false,
//     teenCounselling: false,
//     diagnosis: false,
//     workshopsTraining: false
//   });

//   const [expertise, setExpertise] = useState({
//     stressManagement: false,
//     anxiety: false,
//     depression: false,
//     selfEsteem: false,
//     timeManagement: false,
//     careerCounselling: false,
//     workLifeBalance: false,
//     burnout: false,
//     lifeTransitions: false,
//     griefAndLoss: false,
//     angerManagement: false,
//     motivation: false,
//     cbt: false,
//     dbt: false,
//     psychodynamicTherapy: false,
//     humanisticTherapy: false,
//     mindfulnessBasedTherapy: false,
//     sfbt: false,
//     act: false,
//     emdr: false,
//     artTherapy: false,
//     playTherapy: false,
//     groupTherapy: false,
//     familyTherapy: false,
//     narrativeTherapy: false,
//     ipt: false,
//     gad: false,
//     mdd: false,
//     bipolarDisorder: false,
//     ocd: false,
//     ptsd: false,
//     adhd: false,
//     asd: false,
//     schizophrenia: false,
//     personalityDisorders: false,
//     eatingDisorders: false,
//     maritalCounselling: false,
//     familyTherapy: false,
//     parentChildRelationship: false,
//     couplesCounselling: false,
//     divorceSeparation: false,
//     conflictResolution: false,
//     communicationIssues: false,
//     trustIssues: false,
//     intimacyIssues: false,
//     preMaritalCounselling: false
//   });

//   const handleChange = (e, setState) => {
//     const { name, checked } = e.target;
//     setState((prev) => ({
//       ...prev,
//       [name]: checked
//     }));
//   };

//   return (
//     <div
//       className="tab-pane fade active show"
//       id="social"
//       role="tabpanel"
//       aria-labelledby="social-tab"
//     >
//       <form action="#" className="rbt-profile-row rbt-default-form row row--15">
//         <div className="col-12">
//           <div className="rbt-form-group">
//             <h4>Services</h4>
//             {Object.keys(services).map((service) => (
//               <div key={service}>
//                 <input
//                   type="checkbox"
//                   id={service}
//                   name={service}
//                   checked={services[service]}
//                   onChange={(e) => handleChange(e, setServices)}
//                 />
//                 <label htmlFor={service}>
//                   {service.split(/(?=[A-Z])/).join(" ")}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <hr style={{ borderTop: "1px solid #ccc", margin: "20px 0" }} />
//         <div className="col-12">
//           <div className="rbt-form-group">
//             <br />
//             <h4>Expertise</h4>
//             <h5>Daily Life Issues</h5>
//             {[
//               "stressManagement",
//               "anxiety",
//               "depression",
//               "selfEsteem",
//               "timeManagement",
//               "careerCounselling",
//               "workLifeBalance",
//               "burnout",
//               "lifeTransitions",
//               "griefAndLoss",
//               "angerManagement",
//               "motivation"
//             ].map((issue) => (
//               <div key={issue}>
//                 <input
//                   type="checkbox"
//                   id={issue}
//                   name={issue}
//                   checked={expertise[issue]}
//                   onChange={(e) => handleChange(e, setExpertise)}
//                 />
//                 <label htmlFor={issue}>
//                   {issue.split(/(?=[A-Z])/).join(" ")}
//                 </label>
//               </div>
//             ))}
//             <br />
//             <h5>Therapy Options</h5>
//             {[
//               "Cognitive Behavioural Therapy (CBT)",
//               "Dialectical Behavioural Therapy (DBT)",
//               "psychodynamicTherapy",
//               "humanisticTherapy",
//               "mindfulnessBasedTherapy",
//               "Solution-Focused Brief Therapy (SFBT)",
//               "Acceptance and Commitment Therapy (ACT)",
//               "Eye Movement Desensitization and Reprocessing (EMDR)",
//               "artTherapy",
//               "playTherapy",
//               "groupTherapy",
//               "familyTherapy",
//               "narrativeTherapy",
//               "Interpersonal Therapy (IPT)"
//             ].map((therapy) => (
//               <div key={therapy}>
//                 <input
//                   type="checkbox"
//                   id={therapy}
//                   name={therapy}
//                   checked={expertise[therapy]}
//                   onChange={(e) => handleChange(e, setExpertise)}
//                 />
//                 <label htmlFor={therapy}>
//                   {therapy.split(/(?=[A-Z])/).join(" ")}
//                 </label>
//               </div>
//             ))}
//             <br />
//             <h5>
//               Diagnoses (only for Psychiatrists and Clinical Psychologists)
//             </h5>
//             {[
//               "Generalized Anxiety Disorder (GAD)",
//               "Major Depressive Disorder (MDD)",
//               "bipolarDisorder",
//               "Obsessive-Compulsive Disorder (OCD)",
//               "Post-Traumatic Stress Disorder (PTSD)",
//               "Attention Deficit Hyperactivity Disorder (ADHD)",
//               "Autism Spectrum Disorder (ASD)",
//               "schizophrenia",
//               "personalityDisorders",
//               "eatingDisorders"
//             ].map((diagnosis) => (
//               <div key={diagnosis}>
//                 <input
//                   type="checkbox"
//                   id={diagnosis}
//                   name={diagnosis}
//                   checked={expertise[diagnosis]}
//                   onChange={(e) => handleChange(e, setExpertise)}
//                 />
//                 <label htmlFor={diagnosis}>
//                   {diagnosis.split(/(?=[A-Z])/).join(" ")}
//                 </label>
//               </div>
//             ))}

//             <br />
//             <h5>Relationship Issues</h5>
//             {[
//               "maritalCounselling",
//               "familyTherapy",
//               "parentChildRelationship",
//               "couplesCounselling",
//               "divorceSeparation",
//               "conflictResolution",
//               "communicationIssues",
//               "trustIssues",
//               "intimacyIssues",
//               "preMaritalCounselling"
//             ].map((relationship) => (
//               <div key={relationship}>
//                 <input
//                   type="checkbox"
//                   id={relationship}
//                   name={relationship}
//                   checked={expertise[relationship]}
//                   onChange={(e) => handleChange(e, setExpertise)}
//                 />
//                 <label htmlFor={relationship}>
//                   {relationship.split(/(?=[A-Z])/).join(" ")}
//                 </label>
//               </div>
//             ))}
//           </div>
//           <br />
//         </div>

//         <div className="col-12 mt--10">
//           <div className="rbt-form-group">
//             <a
//               className="rbt-btn btn-gradient"
//               href="/instructor/instructor-settings#"
//             >
//               Update Profile
//             </a>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function SocialShare() {
  const [services, setServices] = useState({
    individualCounselling: false,
    relationshipCounselling: false,
    teenCounselling: false,
    diagnosis: false,
    workshopsTraining: false
  });

  const [expertise, setExpertise] = useState({
    stressManagement: false,
    anxiety: false,
    depression: false,
    selfEsteem: false,
    timeManagement: false,
    careerCounselling: false,
    workLifeBalance: false,
    burnout: false,
    lifeTransitions: false,
    griefAndLoss: false,
    angerManagement: false,
    motivation: false,
    cbt: false,
    dbt: false,
    psychodynamicTherapy: false,
    humanisticTherapy: false,
    mindfulnessBasedTherapy: false,
    sfbt: false,
    act: false,
    emdr: false,
    artTherapy: false,
    playTherapy: false,
    groupTherapy: false,
    familyTherapy: false,
    narrativeTherapy: false,
    ipt: false,
    gad: false,
    mdd: false,
    bipolarDisorder: false,
    ocd: false,
    ptsd: false,
    adhd: false,
    asd: false,
    schizophrenia: false,
    personalityDisorders: false,
    eatingDisorders: false,
    maritalCounselling: false,
    familyTherapy: false,
    parentChildRelationship: false,
    couplesCounselling: false,
    divorceSeparation: false,
    conflictResolution: false,
    communicationIssues: false,
    trustIssues: false,
    intimacyIssues: false,
    preMaritalCounselling: false
  });

  const handleChange = (e, setState) => {
    const { name, checked } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <div
      className="tab-pane fade active show"
      id="social"
      role="tabpanel"
      aria-labelledby="social-tab"
    >
      <form action="#" className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-12">
          <div className="rbt-form-group">
            <h4>Services</h4>
            {Object.keys(services).map((service) => (
              <div key={service}>
                <input
                  type="checkbox"
                  id={service}
                  name={service}
                  checked={services[service]}
                  onChange={(e) => handleChange(e, setServices)}
                />
                <label htmlFor={service}>
                  {service.split(/(?=[A-Z])/).join(" ")}
                </label>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ borderTop: "1px solid #ccc", margin: "20px 0" }} />

        <div className="col-12">
          <div className="rbt-form-group">
            <br />
            <h4>Expertise</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ flex: 1, marginRight: "10px" }}>
                <h5>Daily Life Issues</h5>
                {[
                  "stressManagement",
                  "anxiety",
                  "depression",
                  "selfEsteem",
                  "timeManagement",
                  "careerCounselling",
                  "workLifeBalance",
                  "burnout",
                  "lifeTransitions",
                  "griefAndLoss",
                  "angerManagement",
                  "motivation"
                ].map((issue) => (
                  <div key={issue}>
                    <input
                      type="checkbox"
                      id={issue}
                      name={issue}
                      checked={expertise[issue]}
                      onChange={(e) => handleChange(e, setExpertise)}
                    />
                    <label htmlFor={issue}>
                      {issue.split(/(?=[A-Z])/).join(" ")}
                    </label>
                  </div>
                ))}
                <br />
                <h5>Therapy Options</h5>
                {[
                  "Cognitive Behavioural Therapy (CBT)",
                  "Dialectical Behavioural Therapy (DBT)",
                  "psychodynamicTherapy",
                  "humanisticTherapy",
                  "mindfulnessBasedTherapy",
                  "Solution-Focused Brief Therapy (SFBT)",
                  "Acceptance and Commitment Therapy (ACT)",
                  "Eye Movement Desensitization and Reprocessing (EMDR)",
                  "artTherapy",
                  "playTherapy",
                  "groupTherapy",
                  "familyTherapy",
                  "narrativeTherapy",
                  "Interpersonal Therapy (IPT)"
                ].map((therapy) => (
                  <div key={therapy}>
                    <input
                      type="checkbox"
                      id={therapy}
                      name={therapy}
                      checked={expertise[therapy]}
                      onChange={(e) => handleChange(e, setExpertise)}
                    />
                    <label htmlFor={therapy}>
                      {therapy.split(/(?=[A-Z])/).join(" ")}
                    </label>
                  </div>
                ))}
              </div>

              <div style={{ flex: 1, marginLeft: "10px" }}>
                <h5>
                  Diagnoses (only for Psychiatrists and Clinical Psychologists)
                </h5>
                {[
                  "Generalized Anxiety Disorder (GAD)",
                  "Major Depressive Disorder (MDD)",
                  "bipolarDisorder",
                  "Obsessive-Compulsive Disorder (OCD)",
                  "Post-Traumatic Stress Disorder (PTSD)",
                  "Attention Deficit Hyperactivity Disorder (ADHD)",
                  "Autism Spectrum Disorder (ASD)",
                  "schizophrenia",
                  "personalityDisorders",
                  "eatingDisorders"
                ].map((diagnosis) => (
                  <div key={diagnosis}>
                    <input
                      type="checkbox"
                      id={diagnosis}
                      name={diagnosis}
                      checked={expertise[diagnosis]}
                      onChange={(e) => handleChange(e, setExpertise)}
                    />
                    <label htmlFor={diagnosis}>
                      {diagnosis.split(/(?=[A-Z])/).join(" ")}
                    </label>
                  </div>
                ))}
                <br />
                <h5>Relationship Issues</h5>
                {[
                  "maritalCounselling",
                  "familyTherapy",
                  "parentChildRelationship",
                  "couplesCounselling",
                  "divorceSeparation",
                  "conflictResolution",
                  "communicationIssues",
                  "trustIssues",
                  "intimacyIssues",
                  "preMaritalCounselling"
                ].map((relationship) => (
                  <div key={relationship}>
                    <input
                      type="checkbox"
                      id={relationship}
                      name={relationship}
                      checked={expertise[relationship]}
                      onChange={(e) => handleChange(e, setExpertise)}
                    />
                    <label htmlFor={relationship}>
                      {relationship.split(/(?=[A-Z])/).join(" ")}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>

        <div className="col-12 mt--10">
          <div className="rbt-form-group">
            <a
              className="rbt-btn btn-gradient"
              href="/instructor/instructor-settings#"
            >
              Update Profile
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
