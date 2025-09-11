import { useState } from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Banner from "../components/home/banner";
import State from "../components/home/state";
import Blogs from "../components/home/blogs";
import CallToAction from "../components/home/call-to-action";
import Counter from "../components/home/counter";
import Feedback from "../components/home/feedback";
import NewsLetter from "../components/home/newsletter";
import ProfileCard from "../components/home/profile-card";
import PromationalBanner from "../components/home/promational-banner";
import Services from "../components/home/services";
import HomeWorkshop from "../components/home/workshops";
import MyNavbar from "../components/navbar";
import PaymentSuccessModal from "../components/view_profile/payment-success-popup";

export default function HomePage() {
  return (
    <div id="__next">
      <Head>
        <title>Choose Your Therapist | Online & Offline Therapy</title>
        <meta
          name="description"
          content="Connect with verified psychologists and therapists for online & offline therapy. Book safe and confidential sessions easily with Choose Your Therapist platform."
        />
        <meta
          name="keywords"
          content="therapist, psychologist, online therapy, mental health, counselling, psychiatrist, wellness"
        />
        <meta property="og:title" content="Choose Your Therapist" />
        <meta
          property="og:description"
          content="Find and book therapy sessions online/offline with verified psychologists across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chooseyourtherapist.in" />
        <meta property="og:site_name" content="Choose Your Therapist" />
        <meta name="robots" content="index, follow" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Choose Your Therapist",
              "url": "https://chooseyourtherapist.in",
              "sameAs": [
                "https://www.facebook.com/chooseyourtherapist",
                "https://www.linkedin.com/company/chooseyourtherapist"
              ],
              "service": {
                "@type": "MedicalClinic",
                "medicalSpecialty": "MentalHealth",
              },
            }),
          }}
        />
      </Head>

      <main className="">
        <MyNavbar />
        <main className="rbt-main-wrapper">
          {/* Hero Banner */}
          <section>
            <h1 className="sr-only">Choose Your Therapist - Online & Offline Therapy Platform</h1>
            <Banner />
          </section>

          {/* Services Section */}
          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="sr-only">Our Services</h2>
            <Services />
          </section>

          {/* Therapy Availability by State */}
          <section aria-labelledby="state-heading">
            <h2 id="state-heading" className="sr-only">Therapists Across India</h2>
            <State />
          </section>

          {/* Featured Therapists */}
          <section aria-labelledby="therapists-heading">
            <h2 id="therapists-heading" className="sr-only">Meet Verified Therapists</h2>
            <ProfileCard />
          </section>

          {/* Statistics / Counter */}
          <section aria-labelledby="counter-heading">
            <h2 id="counter-heading" className="sr-only">Our Impact</h2>
            <Counter />
          </section>

          {/* Workshops */}
          <section aria-labelledby="workshops-heading">
            <h2 id="workshops-heading" className="sr-only">Workshops and Events</h2>
            <HomeWorkshop isWhite={false} />
          </section>

          {/* Blog Section */}
          <section aria-labelledby="blogs-heading">
            <h2 id="blogs-heading" className="sr-only">Mental Health Blogs</h2>
            <Blogs />
          </section>

          {/* Promotional Banner */}
          <section>
            <PromationalBanner />
          </section>

          {/* Feedback */}
          <section aria-labelledby="feedback-heading">
            <h2 id="feedback-heading" className="sr-only">Client Feedback</h2>
            <Feedback />
          </section>

          {/* Call to Action */}
          <section aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="sr-only">Take the First Step</h2>
            <CallToAction />
          </section>

          {/* Newsletter Signup */}
          <section aria-labelledby="newsletter-heading">
            <h2 id="newsletter-heading" className="sr-only">Subscribe to Our Newsletter</h2>
            <NewsLetter />
          </section>
        </main>
        <Footer />
      </main>
    </div>
  );
}
