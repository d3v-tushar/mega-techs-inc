import CourseSection from "@/components/course/course-section";
import Banner from "@/components/shared/banner";
import ContactUs from "@/components/shared/contact-us";
import LogoCloud from "@/components/shared/logo-cloud";
import WhyUs from "@/components/shared/why-us";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-[1440px] mx-auto">
      <Banner />
      <LogoCloud />
      <CourseSection />
      <WhyUs />
      <ContactUs />
    </main>
  );
}
