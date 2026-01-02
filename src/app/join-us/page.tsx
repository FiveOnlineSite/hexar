import Banner from "@/src/components/Banner";
import OpenPosition from "@/src/components/JoinUs/OpenPositions";
import OurCulture from "@/src/components/JoinUs/OurCulture";
import Work from "@/src/components/JoinUs/Work";

export default function JoinUsPage(){
    return (
        <>
        <Banner title="Join The Journey"/>
        <OpenPosition/>
        <Work/>
        <OurCulture/>
        </>
    )
}