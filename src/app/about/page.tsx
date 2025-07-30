import React from "react";

const About = () => {
  return (
    <>
      <section className="about px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">About Standard School</h2>

        <p className="mb-4">
          Standard Nursery and Primary School was originally established in Oogi, Osun State, 
          before relocating to Moro. It was founded with the aim of providing qualitative 
          education grounded in moral values and the teachings of Jesus Christ.
        </p>

        <p className="mb-4">
          The name <strong>"Standard"</strong> was chosen to reflect the high expectations and 
          educational quality that the school strives for. Our vision extends to establishing 
          a secondary school — <strong>High Standard Model College</strong>, which will offer 
          both boarding and day options.
        </p>

        <p className="mb-4">
          The school's operations are supported by a committed board, teachers, and 
          administrative leaders, guided by a passion to raise disciplined, God-fearing, and 
          academically excellent students.
        </p>
      </section>

      <section className="vision-mission px-4 py-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Our Vision, Mission & Passion</h2>

          <div className="mb-4">
          <h3 className="font-semibold">Vision</h3>
          <p>
              To prepare candidates with quality education who will stand and defend their 
              certificates, and be ambassadors of the institution.
          </p>
          </div>

          <div className="mb-4">
          <h3 className="font-semibold">Mission</h3>
          <p>
              To catch them young and instill academic and moral values in them through 
              dedicated teachers.
          </p>
          </div>

          <div className="mb-4">
          <h3 className="font-semibold">Passion</h3>
          <p>
              Daily progress rooted in purpose, godliness, and student-centered development.
          </p>
          </div>
      </section>
    </>
  );
};

export default About;
