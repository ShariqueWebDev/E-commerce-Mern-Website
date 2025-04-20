import Banner from "@/components/Banner/Banner";
import LastestProductSection from "@/components/LatestProductSection/LastestProductSection";
import Wrapper from "@/components/Others/Wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[3000px]">
      <Banner />
      <Wrapper>
        <LastestProductSection />
      </Wrapper>
    </div>
  );
}
