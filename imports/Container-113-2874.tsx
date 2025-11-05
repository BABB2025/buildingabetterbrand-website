import svgPaths from "./svg-lnp0444ftu";
import imgImage from "figma:asset/94f9d96dfba66f528eb30f312e8b8c4f28d91d2f.png";
import { motion } from "motion/react";

function Text() {
  return (
    <div className="absolute content-stretch flex h-[74.5px] items-start left-0 top-[64px] w-[252.664px]" data-name="Text">
      <p className="bg-clip-text font-['Inter:Bold',_sans-serif] font-bold leading-[63px] not-italic relative shrink-0 text-[63px] text-[rgba(0,0,0,0)] text-nowrap tracking-[0.2307px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgb(249, 107, 9) 0%, rgb(255, 189, 74) 50%, rgb(0, 168, 168) 100%)" }}>
        <span>{`in `}</span>
        <span className="bg-clip-text" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgb(249, 107, 9) 0%, rgb(255, 189, 74) 50%, rgb(0, 168, 168) 100%)" }}>
          Action
        </span>
      </p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[126px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[63px] left-0 not-italic text-[#2212ab] text-[63px] text-nowrap top-px tracking-[0.2307px] whitespace-pre">Your Brand Hub</p>
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[85.313px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28.438px] left-0 not-italic text-[#364153] text-[17.5px] top-[-0.5px] tracking-[-0.4358px] w-[496px]">Track your wins, plan your next move, and watch your brand thrive—all from your phone. Built for entrepreneurs who are always on the go</p>
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[225.312px] items-start left-0 top-[28px] w-[497.5px]" data-name="App">
      <Heading3 />
      <Paragraph />
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="absolute bg-[#f96b09] h-[42px] left-0 rounded-[1.67772e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[281.31px] w-[192.953px] cursor-pointer hover:bg-[#FFBD4A] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24.5px] left-[35px] not-italic text-[15.75px] text-nowrap text-white top-[8.75px] tracking-[-0.2922px] whitespace-pre">Get Early Access</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p8f1dd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#00a8a8] relative rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[24.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24.5px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[21px] left-0 not-italic text-[#2212ab] text-[14px] top-0 tracking-[-0.1504px]">Real-Time Brand Data:</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] top-[0.5px] tracking-[-0.0179px]">Track performance in real-time and get AI-backed takeaways on what's working—and what to fix fast.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[380.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-[380.547px]">
        <Heading4 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[38.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p8f1dd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f96b09] relative rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[24.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24.5px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[21px] left-0 not-italic text-[#2212ab] text-[14px] top-0 tracking-[-0.1504px]">Integrated Brand Planning:</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] top-[0.5px] tracking-[-0.0179px]">Plan launches, content, and collabs across every channel—all synced inside your Brand OS.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[280.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-[280.953px]">
        <Heading5 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[38.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p8f1dd80} id="Vector" stroke="var(--stroke-0, #2212AB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#ffbd4a] relative rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[24.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24.5px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[21px] left-0 not-italic text-[#2212ab] text-[14px] top-0 tracking-[-0.1504px]">Brand Management On-the-Go:</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] top-[0.5px] tracking-[-0.0179px]">Manage your empire from anywhere—your phone becomes your command center for growth.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[387.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-[387.625px]">
        <Heading6 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[38.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[28px] h-[157.5px] items-start left-0 pb-0 pt-[14px] px-0 top-[351.31px] w-auto" data-name="App">
      <Container2 />
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container9({ onButtonClick }: { onButtonClick?: () => void }) {
  return (
    <div className="[grid-area:1_/_1] h-[508.812px] relative shrink-0" data-name="Container">
      <App />
      <Button onClick={onButtonClick} />
      <App1 />
    </div>
  );
}

function App2() {
  return <div className="absolute bg-[#f96b09] blur-3xl filter left-[-1.25px] opacity-20 rounded-[1.67772e+07px] size-[500px] top-[177.15px]" data-name="App" />;
}

function Image() {
  return (
    <div className="absolute left-0 size-[52.8px] top-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute left-[8.8px] overflow-clip size-[52.8px] top-[62.7px]" data-name="Logo">
      <Image />
    </div>
  );
}

function NetworkReverse() {
  return (
    <div className="absolute contents inset-[5.21%_9.38%]" data-name="network-reverse">
      <div className="absolute inset-[67.71%_55.21%_5.21%_9.38%]" data-name="Rectangle (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
          <path clipRule="evenodd" d={svgPaths.p7ff3980} fill="var(--fill-0, #FDFDFD)" fillRule="evenodd" id="Rectangle (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[5.21%_32.29%_67.71%_32.29%]" data-name="Rectangle (Stroke)_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
          <path clipRule="evenodd" d={svgPaths.p3dc0a300} fill="var(--fill-0, #FDFDFD)" fillRule="evenodd" id="Rectangle (Stroke)_2" />
        </svg>
      </div>
      <div className="absolute inset-[67.71%_9.38%_5.21%_55.21%]" data-name="Rectangle (Stroke)_3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
          <path clipRule="evenodd" d={svgPaths.p6436500} fill="var(--fill-0, #FDFDFD)" fillRule="evenodd" id="Rectangle (Stroke)_3" />
        </svg>
      </div>
      <div className="absolute inset-[44.79%_23.96%_29.17%_23.96%]" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
          <path clipRule="evenodd" d={svgPaths.p300cc280} fill="var(--fill-0, #FDFDFD)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[29.17%_46.88%_52.08%_46.88%]" data-name="Vector (Stroke)_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <path clipRule="evenodd" d="M0 0V4.94999H1.65V0H0Z" fill="var(--fill-0, #FDFDFD)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <NetworkReverse />
    </div>
  );
}

function NetworkReverse1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[26.4px] top-0" data-name="NetworkReverse">
      <Icon3 />
    </div>
  );
}

function Sparks() {
  return (
    <div className="absolute contents inset-[5.21%]" data-name="sparks">
      <div className="absolute inset-[30.21%_5.21%_5.21%_30.21%]" data-name="Vector 47 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path clipRule="evenodd" d={svgPaths.p1a812980} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector 47 (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[5.21%_51.04%_51.04%_5.21%]" data-name="Vector 48 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path clipRule="evenodd" d={svgPaths.p5764400} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector 48 (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Sparks />
    </div>
  );
}

function Sparks1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[26.4px] top-[52.8px]" data-name="Sparks">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[19.455px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.5%] left-0 right-[2.27%] top-0" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
          <path clipRule="evenodd" d={svgPaths.p713e400} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[23.65px] items-start left-[2.48px] top-[1.38px] w-[21.45px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[6.05px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-0 right-[8.33%] top-0" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <path clipRule="evenodd" d={svgPaths.p3d240d00} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9.07px] size-[6.05px] top-[7.97px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[8.259px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[6.25%] left-0 right-[6.25%] top-0" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path clipRule="evenodd" d={svgPaths.p14edc400} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[7.97px] size-[8.259px] top-[6.87px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Learning() {
  return (
    <div className="absolute left-0 overflow-clip size-[26.4px] top-[105.6px]" data-name="Learning">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function BadgeCheck() {
  return (
    <div className="absolute contents inset-[5.085%]" data-name="badge-check">
      <div className="absolute inset-[5.085%]" data-name="Star 2 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p22f83280} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Star 2 (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[38.54%_34.38%]" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 7">
          <path clipRule="evenodd" d={svgPaths.p146c3280} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <BadgeCheck />
    </div>
  );
}

function BadgeCheck1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[26.4px] top-[158.4px]" data-name="BadgeCheck">
      <Icon8 />
    </div>
  );
}

function StatsReport() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="stats-report">
      <div className="absolute bottom-[62.5%] left-1/4 right-[58.33%] top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-0.82px_-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 2">
            <path d="M5.22499 0.824999H0.824999" id="Vector" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[54.17%] left-[54.17%] right-1/4 top-1/4" data-name="Vector_2">
        <div className="absolute inset-[-15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p6b1b900} id="Vector_2" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-1/4 right-[62.5%] top-1/4" data-name="Vector_3">
        <div className="absolute inset-[-0.82px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
            <path d="M0.824999 0.824999H4.12499" id="Vector_3" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 right-1/4 top-[54.17%]" data-name="Vector_4">
        <div className="absolute inset-[-15%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 8">
            <path d={svgPaths.pac37400} id="Vector_4" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%]" data-name="Vector_5">
        <div className="absolute inset-[-4.167%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p39159c80} id="Vector_5" stroke="var(--stroke-0, #A4A7AE)" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <StatsReport />
    </div>
  );
}

function StatsReport1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[26.4px] top-[211.2px]" data-name="StatsReport">
      <Icon9 />
    </div>
  );
}

function GraphUp() {
  return (
    <div className="absolute contents inset-[13.542%]" data-name="graph-up">
      <div className="absolute inset-[13.542%]" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path clipRule="evenodd" d={svgPaths.p180b0380} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[28.13%_15.63%_28.13%_13.54%]" data-name="Vector (Stroke)_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 12">
          <path clipRule="evenodd" d={svgPaths.p264d9880} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </svg>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <GraphUp />
    </div>
  );
}

function GraphUp1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[26.4px] top-[264px]" data-name="GraphUp">
      <Icon10 />
    </div>
  );
}

function GitFork() {
  return (
    <div className="absolute contents inset-[12.5%_20.83%]" data-name="git-fork">
      <div className="absolute inset-[12.5%_20.83%_70.83%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p29db9a00} id="Vector" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_62.5%_70.83%_20.83%]" data-name="Vector_2">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p30dd5180} id="Vector_2" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_62.5%_12.5%_20.83%]" data-name="Vector_3">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p129ba5c9} id="Vector_3" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_70.83%_29.17%_29.17%]" data-name="Vector_4">
        <div className="absolute inset-[-7.5%_-0.82px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 13">
            <path d="M0.824999 0.824999V11.825" id="Vector_4" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.167%]" data-name="Vector_5">
        <div className="absolute inset-[-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.pdbb6680} id="Vector_5" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <GitFork />
    </div>
  );
}

function GitFork1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[26.4px] top-[316.8px]" data-name="GitFork">
      <Icon11 />
    </div>
  );
}

function PlusCircle() {
  return (
    <div className="absolute contents inset-[8.333%]" data-name="plus-circle">
      <div className="absolute inset-[33.333%]" data-name="Vector">
        <div className="absolute inset-[-9.375%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2825f200} id="Vector" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.333%]" data-name="Vector_2">
        <div className="absolute inset-[-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p3936e000} id="Vector_2" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <PlusCircle />
    </div>
  );
}

function PlusCircle1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[26.4px] top-[369.6px]" data-name="PlusCircle">
      <Icon12 />
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="absolute contents inset-[5.208%]" data-name="help-circle">
      <div className="absolute inset-[5.208%]" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p37032700} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[23.44%_36.46%_38.54%_34.38%]" data-name="Vector 2 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
          <path clipRule="evenodd" d={svgPaths.p4b6f900} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector 2 (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[71.87%_46.83%_21.83%_46.88%]" data-name="Vector (Stroke)_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path clipRule="evenodd" d={svgPaths.p356fe400} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </svg>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <HelpCircle />
    </div>
  );
}

function HelpCircle1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[26.4px] top-[422.4px]" data-name="HelpCircle">
      <Icon13 />
    </div>
  );
}

function Settings() {
  return (
    <div className="absolute contents inset-[5.208%]" data-name="settings">
      <div className="absolute inset-[34.375%]" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <path clipRule="evenodd" d={svgPaths.p12efd200} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[5.208%]" data-name="Path (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p1335ec80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Path (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Settings />
    </div>
  );
}

function Settings1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[26.4px] top-[475.2px]" data-name="Settings">
      <Icon14 />
    </div>
  );
}

function Frame260() {
  return (
    <div className="absolute h-[501.6px] left-[22px] top-[133.1px] w-[26.4px]" data-name="Frame260">
      <NetworkReverse1 />
      <Sparks1 />
      <Learning />
      <BadgeCheck1 />
      <StatsReport1 />
      <GraphUp1 />
      <GitFork1 />
      <PlusCircle1 />
      <HelpCircle1 />
      <Settings1 />
    </div>
  );
}

function Frame251() {
  return (
    <div className="absolute bg-[#181d27] h-[1177px] left-0 overflow-clip shadow-[2px_0px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[70.4px]" data-name="Frame251">
      <Logo />
      <Frame260 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[22px] left-[8.8px] top-[4.4px] w-[110.576px]" data-name="Paragraph">
      <p className="absolute capitalize font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#f8ad23] text-[12px] text-nowrap top-[0.75px] tracking-[-0.132px] whitespace-pre">Add Collaborators</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[30.8px] left-0 overflow-clip rounded-[8px] top-0 w-[128.176px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[30.8px] left-0 rounded-[8px] top-0 w-[128.176px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f8ad23] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="absolute h-[30.8px] left-0 rounded-[8px] top-0 w-[128.176px]" data-name="ButtonBase">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[30.8px] left-0 rounded-[8px] top-0 w-[128.176px]" data-name="Button2">
      <ButtonBase />
    </div>
  );
}

function Bell() {
  return (
    <div className="absolute contents inset-[5.21%_9.38%_5.22%_9.38%]" data-name="bell">
      <div className="absolute inset-[5.21%_9.38%_21.88%_9.38%]" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
          <path clipRule="evenodd" d={svgPaths.p4a24fb0} fill="var(--fill-0, #FDFDFD)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[84.37%_39.67%_5.22%_39.67%]" data-name="Vector (Stroke)_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3">
          <path clipRule="evenodd" d={svgPaths.p3bdc0f40} fill="var(--fill-0, #FDFDFD)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </svg>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Bell />
    </div>
  );
}

function Bell1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[145.78px] size-[26.4px] top-[2.2px]" data-name="Bell">
      <Icon15 />
    </div>
  );
}

function ProfileCircle() {
  return (
    <div className="absolute contents inset-[8.333%]" data-name="profile-circle">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <div className="absolute inset-[-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p25f9e600} id="Vector" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[64.58%_17.79%_23.56%_17.8%]" data-name="Vector_2">
        <div className="absolute inset-[-26.36%_-4.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 5">
            <path d={svgPaths.p1073c600} id="Vector_2" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector_3">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p2b67bc80} id="Vector_3" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[26.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ProfileCircle />
    </div>
  );
}

function ProfileCircle1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[189.78px] size-[26.4px] top-[2.2px]" data-name="ProfileCircle">
      <Icon16 />
    </div>
  );
}

function Frame249() {
  return (
    <div className="absolute h-[30.8px] left-[120.42px] top-[70.4px] w-[216.176px]" data-name="Frame249">
      <Button2 />
      <Bell1 />
      <ProfileCircle1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[115.5px] left-0 overflow-clip top-0 w-[371.8px]" data-name="Container">
      <Frame249 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[117.7px] left-[-1.1px] top-[-1.1px] w-[374px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#181d27] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MenuBar() {
  return (
    <div className="absolute bg-[#181d27] h-[115.5px] left-0 top-0 w-[371.8px]" data-name="MenuBar">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Frame300() {
  return (
    <div className="absolute h-[22px] left-[17.6px] top-0 w-[336.6px]" data-name="Frame300">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[20px] left-0 not-italic text-[#181d27] text-[14px] text-nowrap top-[0.65px] whitespace-pre">Brand Hub</p>
    </div>
  );
}

function Frame301() {
  return (
    <div className="absolute h-[19.8px] left-[17.6px] top-[39.6px] w-[336.6px]" data-name="Frame301">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[18px] left-0 not-italic text-[#535862] text-[12px] text-nowrap top-[0.65px] whitespace-pre">Hi brandie!</p>
    </div>
  );
}

function Frame306() {
  return (
    <div className="absolute h-[59.4px] left-0 top-[133.1px] w-[371.8px]" data-name="Frame306">
      <Frame300 />
      <Frame301 />
    </div>
  );
}

function Frame335() {
  return (
    <div className="absolute h-[22px] left-0 top-[9.9px] w-[68.501px]" data-name="Frame335">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[20px] left-[34.5px] not-italic text-[#181d27] text-[14px] text-center text-nowrap top-[0.65px] translate-x-[-50%] whitespace-pre">Calendar</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[22px] left-0 top-0 w-[37.306px]" data-name="Paragraph">
      <p className="absolute capitalize font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#181d27] text-[12px] text-nowrap top-[0.75px] tracking-[-0.132px] whitespace-pre">Today</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[22px] left-[39.51px] top-0 w-[110.937px]" data-name="Paragraph">
      <p className="absolute capitalize font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#181d27] text-[12px] text-nowrap top-[0.75px] tracking-[-0.132px] whitespace-pre">Thursday, 24 April</p>
    </div>
  );
}

function Frame381() {
  return (
    <div className="absolute h-[22px] left-[150.96px] top-[9.9px] w-[150.442px]" data-name="Frame381">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Frame465() {
  return (
    <div className="absolute h-[41.8px] left-[17.6px] top-[17.6px] w-[301.4px]" data-name="Frame465">
      <Frame335 />
      <Frame381 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[rgba(83,175,170,0.28)] h-[41.8px] left-[717.8px] rounded-[4px] top-[276.55px] w-[301.4px]" data-name="Container" />;
}

function Container18() {
  return <div className="absolute bg-[#2a9d8f] h-[41.8px] left-[717.8px] rounded-bl-[4px] rounded-tl-[4px] top-[276.55px] w-[4.855px]" data-name="Container" />;
}

function Group1() {
  return (
    <div className="absolute left-[-717.8px] size-0 top-[-276.55px]" data-name="Group1">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[19.8px] left-[17.6px] top-[11px] w-[124.223px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#181d27] text-[12px] text-nowrap top-[0.65px] whitespace-pre">Brand Asset Review</p>
    </div>
  );
}

function Frame383() {
  return (
    <div className="absolute h-[41.8px] left-[17.6px] top-[68.2px] w-[301.4px]" data-name="Frame383">
      <Group1 />
      <Paragraph7 />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[#ffefe7] h-[41.8px] left-[717.8px] rounded-[4px] top-[327.15px] w-[301.4px]" data-name="Container" />;
}

function Container20() {
  return <div className="absolute bg-[#f6945d] h-[41.8px] left-[717.8px] rounded-bl-[4px] rounded-tl-[4px] top-[327.15px] w-[4.855px]" data-name="Container" />;
}

function Group2() {
  return (
    <div className="absolute left-[-717.8px] size-0 top-[-327.15px]" data-name="Group2">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[19.8px] left-[17.6px] top-[11px] w-[131.381px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#181d27] text-[12px] text-nowrap top-[0.65px] whitespace-pre">New Website Launch</p>
    </div>
  );
}

function Frame466() {
  return (
    <div className="absolute h-[41.8px] left-[17.6px] top-[118.8px] w-[301.4px]" data-name="Frame466">
      <Group2 />
      <Paragraph8 />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#f1c9c5] h-[41.8px] left-[717.8px] rounded-[4px] top-[377.75px] w-[301.4px]" data-name="Container" />;
}

function Container22() {
  return <div className="absolute bg-[#e23424] h-[41.8px] left-[717.8px] rounded-bl-[4px] rounded-tl-[4px] top-[377.75px] w-[4.855px]" data-name="Container" />;
}

function Group3() {
  return (
    <div className="absolute left-[-717.8px] size-0 top-[-377.75px]" data-name="Group3">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[19.8px] left-[17.6px] top-[11px] w-[89.349px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#181d27] text-[12px] text-nowrap top-[0.65px] whitespace-pre">BABB Webinar</p>
    </div>
  );
}

function Frame467() {
  return (
    <div className="absolute h-[41.8px] left-[17.6px] top-[169.4px] w-[301.4px]" data-name="Frame467">
      <Group3 />
      <Paragraph9 />
    </div>
  );
}

function Calander() {
  return (
    <div className="absolute bg-neutral-100 h-[228.8px] left-[17.6px] rounded-[25px] top-[210.1px] w-[336.6px]" data-name="Calander">
      <Frame465 />
      <Frame383 />
      <Frame466 />
      <Frame467 />
    </div>
  );
}

function Frame336() {
  return (
    <div className="absolute h-[22px] left-[17.6px] top-[27.5px] w-[301.4px]" data-name="Frame336">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[20px] left-0 not-italic text-[#181d27] text-[14px] text-nowrap top-[0.65px] whitespace-pre">Social Media Stats</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[19.8px] left-0 top-0 w-[17.059px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[18px] left-0 not-italic text-[#181d27] text-[12px] text-nowrap top-[0.65px] whitespace-pre">All</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[4.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2">
        <div className="absolute bottom-[-2.17px] left-0 right-0 top-[-2.17px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 5">
            <path d="M0 2.1659H17.0586" id="Line 2" stroke="var(--stroke-0, #06B8AE)" strokeWidth="4.3318" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.4px] items-start left-0 top-[24.2px] w-[17.059px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Frame311() {
  return (
    <div className="absolute h-[28.6px] left-0 top-0 w-[17.059px]" data-name="Frame311">
      <Paragraph10 />
      <Container23 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[19.8px] left-[52.26px] top-0 w-[62.236px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#717680] text-[12px] text-nowrap top-[0.65px] whitespace-pre">Instagram</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[19.8px] left-[149.69px] top-0 w-[38.569px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#717680] text-[12px] text-nowrap top-[0.65px] whitespace-pre">Tiktok</p>
    </div>
  );
}

function Frame313() {
  return (
    <div className="absolute h-[28.6px] left-[17.6px] overflow-clip top-[68.2px] w-[301.4px]" data-name="Frame313">
      <Frame311 />
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[8.8px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <path d={svgPaths.p124d6100} fill="var(--fill-0, #FF8A00)" id="Color" />
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[8.8px] top-[6.6px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[22px] left-[17.6px] top-0 w-[60.93px]" data-name="Paragraph">
      <p className="absolute capitalize font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#535862] text-[12px] text-nowrap top-[0.75px] tracking-[-0.132px] whitespace-pre">Instagram</p>
    </div>
  );
}

function LegendSeries() {
  return (
    <div className="absolute h-[22px] left-[106.61px] top-0 w-[78.53px]" data-name="LegendSeries">
      <Container24 />
      <Paragraph13 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[8.8px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <path d={svgPaths.p124d6100} fill="var(--fill-0, #FF8A00)" fillOpacity="0.5" id="Color" />
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[8.8px] top-[6.6px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[22px] left-[17.6px] top-0 w-[37.701px]" data-name="Paragraph">
      <p className="absolute capitalize font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#535862] text-[12px] text-nowrap top-[0.75px] tracking-[-0.132px] whitespace-pre">Tiktok</p>
    </div>
  );
}

function LegendSeries1() {
  return (
    <div className="absolute h-[22px] left-[199.44px] top-0 w-[55.301px]" data-name="LegendSeries1">
      <Container25 />
      <Paragraph14 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[8.8px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <path d={svgPaths.p124d6100} fill="var(--fill-0, #F8AD23)" fillOpacity="0.5" id="Color" />
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[8.8px] top-[6.6px]" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[22px] left-[17.6px] top-0 w-[14.755px]" data-name="Paragraph">
      <p className="absolute capitalize font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#535862] text-[12px] text-nowrap top-[0.75px] tracking-[-0.132px] whitespace-pre">All</p>
    </div>
  );
}

function LegendSeries2() {
  return (
    <div className="absolute h-[22px] left-[269.05px] top-0 w-[32.355px]" data-name="LegendSeries2">
      <Container26 />
      <Paragraph15 />
    </div>
  );
}

function Legend() {
  return (
    <div className="absolute h-[22px] left-[17.6px] top-[105.6px] w-[301.4px]" data-name="Legend">
      <LegendSeries />
      <LegendSeries1 />
      <LegendSeries2 />
    </div>
  );
}

function YAxisLabel() {
  return (
    <div className="absolute content-stretch flex h-[58.97px] items-start left-0 top-[51.55px] w-[19.8px]" data-name="YAxisLabel">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#717680] text-[12px] text-center text-nowrap whitespace-pre">Followers</p>
    </div>
  );
}

function XAxisLabel() {
  return (
    <div className="absolute h-[19.8px] left-[140.55px] top-[166.1px] w-[40.09px]" data-name="XAxisLabel">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[20.5px] not-italic text-[#717680] text-[12px] text-center text-nowrap top-[0.65px] translate-x-[-50%] whitespace-pre">Month</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[19.8px] left-0 top-[7.7px] w-[35.2px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[35.56px] not-italic text-[#535862] text-[12px] text-nowrap text-right top-[0.65px] translate-x-[-100%] whitespace-pre">800</p>
    </div>
  );
}

function Icon21() {
  return <div className="h-0 shrink-0 w-full" data-name="Icon" />;
}

function Divider1() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[52.8px] top-[18.15px] w-[1.1px]" data-name="Divider1">
      <Icon21 />
    </div>
  );
}

function YAxisLine1() {
  return (
    <div className="absolute h-[35.2px] left-0 top-[-8.25px] w-[47.3px]" data-name="YAxisLine1">
      <Paragraph16 />
      <Divider1 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[19.8px] left-0 top-[7.7px] w-[35.2px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[35.22px] not-italic text-[#535862] text-[12px] text-nowrap text-right top-[0.65px] translate-x-[-100%] whitespace-pre">400</p>
    </div>
  );
}

function Icon22() {
  return <div className="h-0 shrink-0 w-full" data-name="Icon" />;
}

function Divider2() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[52.8px] top-[18.15px] w-[1.1px]" data-name="Divider2">
      <Icon22 />
    </div>
  );
}

function YAxisLine2() {
  return (
    <div className="absolute h-[35.2px] left-0 top-[36.85px] w-[47.3px]" data-name="YAxisLine2">
      <Paragraph17 />
      <Divider2 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[19.8px] left-0 top-[7.7px] w-[35.2px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[35.95px] not-italic text-[#535862] text-[12px] text-nowrap text-right top-[0.65px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function Icon23() {
  return <div className="h-0 shrink-0 w-full" data-name="Icon" />;
}

function Divider3() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[52.8px] top-[18.15px] w-[1.1px]" data-name="Divider3">
      <Icon23 />
    </div>
  );
}

function YAxisLine3() {
  return (
    <div className="absolute h-[35.2px] left-0 top-[81.95px] w-[47.3px]" data-name="YAxisLine3">
      <Paragraph18 />
      <Divider3 />
    </div>
  );
}

function YAxis() {
  return (
    <div className="absolute h-[106.7px] left-0 top-[28.6px] w-[47.3px]" data-name="YAxis">
      <YAxisLine1 />
      <YAxisLine2 />
      <YAxisLine3 />
    </div>
  );
}

function ChartBar() {
  return (
    <div className="absolute contents inset-0" data-name="_Chart bar">
      <div className="absolute inset-0" data-name="Series 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 101">
          <path d={svgPaths.p10af2180} fill="var(--fill-0, #F8AD23)" fillOpacity="0.5" id="Series 1" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-[29.17%]" data-name="Series 2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 71">
          <path d={svgPaths.p3529900} fill="var(--fill-0, #FF8A00)" fillOpacity="0.5" id="Series 2" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-[62.5%]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 38">
          <path d={svgPaths.p2623b2f0} fill="var(--fill-0, #FF8A00)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[100.1px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ChartBar />
    </div>
  );
}

function ChartBar1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[100.1px] items-start left-[13.2px] top-[35.2px] w-[17.6px]" data-name="ChartBar1">
      <Icon24 />
    </div>
  );
}

function ChartBar4() {
  return (
    <div className="absolute contents inset-0" data-name="_Chart bar">
      <div className="absolute inset-0" data-name="Series 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 118">
          <path d={svgPaths.p345bbdf1} fill="var(--fill-0, #F8AD23)" fillOpacity="0.5" id="Series 1" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-[29.17%]" data-name="Series 2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 84">
          <path d={svgPaths.p1962a940} fill="var(--fill-0, #FF8A00)" fillOpacity="0.5" id="Series 2" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-[62.5%]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 45">
          <path d={svgPaths.p30072c00} fill="var(--fill-0, #FF8A00)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[117.7px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ChartBar4 />
    </div>
  );
}

function ChartBar2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[117.7px] items-start left-[96.8px] top-[17.6px] w-[17.6px]" data-name="ChartBar2">
      <Icon25 />
    </div>
  );
}

function ChartBar5() {
  return (
    <div className="absolute contents inset-0" data-name="_Chart bar">
      <div className="absolute inset-0" data-name="Series 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 74">
          <path d={svgPaths.p22133000} fill="var(--fill-0, #F8AD23)" fillOpacity="0.5" id="Series 1" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-[29.17%]" data-name="Series 2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 53">
          <path d={svgPaths.p33e3b300} fill="var(--fill-0, #FF8A00)" fillOpacity="0.5" id="Series 2" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-[62.5%]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 28">
          <path d={svgPaths.p386ac100} fill="var(--fill-0, #FF8A00)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[73.7px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ChartBar5 />
    </div>
  );
}

function ChartBar3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[73.7px] items-start left-[180.4px] top-[61.6px] w-[17.6px]" data-name="ChartBar3">
      <Icon26 />
    </div>
  );
}

function Chart() {
  return (
    <div className="h-[135.3px] overflow-clip relative shrink-0 w-full" data-name="Chart">
      <ChartBar1 />
      <ChartBar2 />
      <ChartBar3 />
    </div>
  );
}

function ChartData() {
  return (
    <div className="absolute content-stretch flex flex-col h-[135.3px] items-start left-[47.3px] overflow-clip top-0 w-[209px]" data-name="ChartData">
      <Chart />
    </div>
  );
}

function Frame470() {
  return (
    <div className="absolute h-[135.3px] left-0 top-0 w-[256.3px]" data-name="Frame470">
      <YAxis />
      <ChartData />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[19.8px] left-[8.8px] top-0 w-[23.1px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[24px] not-italic text-[#535862] text-[12px] text-nowrap text-right top-[0.65px] translate-x-[-100%] whitespace-pre">Feb</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[19.8px] left-[91.3px] top-0 w-[24.097px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[25px] not-italic text-[#535862] text-[12px] text-nowrap text-right top-[0.65px] translate-x-[-100%] whitespace-pre">Mar</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[19.8px] left-[174.8px] top-0 w-[21.888px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[22px] not-italic text-[#535862] text-[12px] text-nowrap text-right top-[0.65px] translate-x-[-100%] whitespace-pre">Apr</p>
    </div>
  );
}

function Frame471() {
  return (
    <div className="absolute h-[19.8px] left-[50.81px] top-[137.5px] w-[205.485px]" data-name="Frame471">
      <Paragraph19 />
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Frame472() {
  return (
    <div className="absolute h-[157.3px] left-[37.4px] top-0 w-[256.3px]" data-name="Frame472">
      <Frame470 />
      <Frame471 />
    </div>
  );
}

function Frame469() {
  return (
    <div className="absolute h-[288.2px] left-[17.6px] top-[136.4px] w-[301.4px]" data-name="Frame469">
      <YAxisLabel />
      <XAxisLabel />
      <Frame472 />
    </div>
  );
}

function Calander1() {
  return (
    <div className="absolute bg-neutral-100 h-[343.2px] left-[17.6px] rounded-[25px] top-[456.5px] w-[336.6px]" data-name="Calander1">
      <Frame336 />
      <Frame313 />
      <Legend />
      <Frame469 />
    </div>
  );
}

function Frame382() {
  return <div className="absolute h-[22px] left-[301.4px] top-[9.9px] w-0" data-name="Frame382" />;
}

function Frame337() {
  return (
    <div className="absolute h-[22px] left-0 top-[9.9px] w-[123.982px]" data-name="Frame337">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[20px] left-[62.5px] not-italic text-[#181d27] text-[14px] text-center text-nowrap top-[0.65px] translate-x-[-50%] whitespace-pre">Current Projects</p>
    </div>
  );
}

function Frame478() {
  return (
    <div className="absolute h-[41.8px] left-[17.6px] top-[17.6px] w-[301.4px]" data-name="Frame478">
      <Frame382 />
      <Frame337 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[19.8px] left-0 top-0 w-[73.511px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[18px] left-0 not-italic text-[#181d27] text-[12px] text-nowrap top-[0.65px] whitespace-pre">All Projects</p>
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[4.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2">
        <div className="absolute bottom-[-2.2px] left-0 right-0 top-[-2.2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 5">
            <path d="M0 2.19718H73.5109" id="Line 2" stroke="var(--stroke-0, #06B8AE)" strokeWidth="4.39435" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.4px] items-start left-0 top-[24.2px] w-[73.511px]" data-name="Container">
      <Icon27 />
    </div>
  );
}

function Frame312() {
  return (
    <div className="absolute h-[28.6px] left-0 top-0 w-[73.511px]" data-name="Frame312">
      <Paragraph22 />
      <Container27 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[19.8px] left-[108.71px] top-0 w-[69.807px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#717680] text-[12px] text-nowrap top-[0.65px] whitespace-pre">Campaigns</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[19.8px] left-[213.72px] top-0 w-[81.941px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#717680] text-[12px] text-nowrap top-[0.65px] whitespace-pre">Past Projects</p>
    </div>
  );
}

function Frame314() {
  return (
    <div className="absolute h-[28.6px] left-[17.6px] overflow-clip top-[68.2px] w-[301.4px]" data-name="Frame314">
      <Frame312 />
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[1.1px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2">
        <div className="absolute bottom-[-0.55px] left-0 right-0 top-[-0.55px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 2">
            <path d="M0 0.55H301.4" id="Line 4" stroke="var(--stroke-0, #535862)" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.1px] items-start left-[17.6px] top-[104.5px] w-[301.4px]" data-name="Container">
      <Icon28 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[19.8px] left-0 top-[25.3px] w-[204.6px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#181d27] text-[12px] text-nowrap top-[0.65px] whitespace-pre">Project 1</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[22px] relative shrink-0 w-[68.492px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] overflow-clip relative rounded-[inherit] w-[68.492px]">
        <p className="absolute capitalize font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[34.5px] not-italic text-[#fdfdfd] text-[12px] text-center text-nowrap top-[0.75px] tracking-[-0.132px] translate-x-[-50%] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22px] items-start justify-center left-[8.8px] overflow-clip top-0 w-[68.492px]" data-name="Container">
      <Paragraph26 />
    </div>
  );
}

function Pill() {
  return (
    <div className="absolute bg-[#06b8ae] h-[22px] left-0 overflow-clip rounded-[4.703px] top-0 w-[92.4px]" data-name="Pill">
      <Container29 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[19.8px] left-[0.93px] top-0 w-[72.772px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#717680] text-[12px] text-nowrap top-[0.65px] whitespace-pre">04/01/2025</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[19.8px] left-0 top-[24.2px] w-[74.628px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#717680] text-[12px] text-nowrap top-[0.65px] whitespace-pre">04/20/2025</p>
    </div>
  );
}

function Frame474() {
  return (
    <div className="absolute h-[44px] left-[8.89px] top-[26.4px] w-[74.628px]" data-name="Frame474">
      <Paragraph27 />
      <Paragraph28 />
    </div>
  );
}

function Frame476() {
  return (
    <div className="absolute h-[70.4px] left-[209px] top-0 w-[92.4px]" data-name="Frame476">
      <Pill />
      <Frame474 />
    </div>
  );
}

function Frame361() {
  return (
    <div className="absolute h-[70.4px] left-[17.6px] top-[114.4px] w-[301.4px]" data-name="Frame361">
      <Paragraph25 />
      <Frame476 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[1.1px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2">
        <div className="absolute bottom-[-0.55px] left-0 right-0 top-[-0.55px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 2">
            <path d="M0 0.55H301.4" id="Line 4" stroke="var(--stroke-0, #535862)" strokeWidth="1.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.1px] items-start left-[17.6px] top-[192.5px] w-[301.4px]" data-name="Container">
      <Icon29 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[19.8px] left-0 top-[25.3px] w-[204.6px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#181d27] text-[12px] text-nowrap top-[0.65px] whitespace-pre">Project 2</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[22px] relative shrink-0 w-[68.492px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] overflow-clip relative rounded-[inherit] w-[68.492px]">
        <p className="absolute capitalize font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[34.5px] not-italic text-[#fdfdfd] text-[12px] text-center text-nowrap top-[0.75px] tracking-[-0.132px] translate-x-[-50%] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22px] items-start justify-center left-[8.8px] overflow-clip top-0 w-[68.492px]" data-name="Container">
      <Paragraph30 />
    </div>
  );
}

function Pill1() {
  return (
    <div className="absolute bg-[#06b8ae] h-[22px] left-0 overflow-clip rounded-[4.703px] top-0 w-[92.4px]" data-name="Pill1">
      <Container31 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[19.8px] left-[0.93px] top-0 w-[72.772px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#717680] text-[12px] text-nowrap top-[0.65px] whitespace-pre">04/01/2025</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[19.8px] left-0 top-[24.2px] w-[74.628px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-0 not-italic text-[#717680] text-[12px] text-nowrap top-[0.65px] whitespace-pre">04/20/2025</p>
    </div>
  );
}

function Frame481() {
  return (
    <div className="absolute h-[44px] left-[8.89px] top-[26.4px] w-[74.628px]" data-name="Frame481">
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Frame482() {
  return (
    <div className="absolute h-[70.4px] left-[209px] top-0 w-[92.4px]" data-name="Frame482">
      <Pill1 />
      <Frame481 />
    </div>
  );
}

function Frame483() {
  return (
    <div className="absolute h-[70.4px] left-[17.6px] top-[202.4px] w-[301.4px]" data-name="Frame483">
      <Paragraph29 />
      <Frame482 />
    </div>
  );
}

function Calander2() {
  return (
    <div className="absolute bg-neutral-100 h-[290.4px] left-[17.6px] rounded-[25px] top-[817.3px] w-[336.6px]" data-name="Calander2">
      <Frame478 />
      <Frame314 />
      <Container28 />
      <Frame361 />
      <Container30 />
      <Frame483 />
    </div>
  );
}

function Frame299() {
  return (
    <div className="absolute h-[1104.4px] left-[70.4px] top-0 w-[371.8px]" data-name="Frame299">
      <MenuBar />
      <Frame306 />
      <Calander />
      <Calander1 />
      <Calander2 />
    </div>
  );
}

function Frame307() {
  return (
    <div className="h-[663.549px] relative shrink-0 w-full" data-name="Frame307">
      <Frame251 />
      <Frame299 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[603.227px] items-start left-0 overflow-clip top-0 w-[371px]" data-name="Container">
      <Frame307 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-black h-[37px] left-[122.5px] rounded-[1.67772e+07px] top-[18px] w-[126px]" data-name="Container">
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_8px_0px_inset_rgba(0,0,0,0.8)]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white h-[804.305px] left-[8px] overflow-clip rounded-[50px] top-[8px] w-[371px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-gradient-to-r from-[#364153] h-[80px] left-[387px] rounded-bl-[4.75px] rounded-tl-[4.75px] to-[#1e2939] top-[180px] w-[3px]" data-name="Container" />;
}

function Container36() {
  return <div className="absolute bg-gradient-to-l from-[#364153] h-[50px] left-[-3px] rounded-br-[4.75px] rounded-tr-[4.75px] to-[#1e2939] top-[140px] w-[3px]" data-name="Container" />;
}

function Container37() {
  return <div className="absolute bg-gradient-to-l from-[#364153] h-[50px] left-[-3px] rounded-br-[4.75px] rounded-tr-[4.75px] to-[#1e2939] top-[200px] w-[3px]" data-name="Container" />;
}

function Container38() {
  return <div className="absolute bg-gradient-to-l from-[#000000] h-[12px] left-[-3px] rounded-br-[4.75px] rounded-tr-[4.75px] to-[#000000] top-[120px] w-[3px] bg-[rgba(0,0,0,0)]" data-name="Container" />;
}

function Container39() {
  return (
    <div className="absolute bg-black h-[820.305px] left-[3px] rounded-[57px] top-[3px] w-[387px]" data-name="Container">
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[826.305px] left-0 top-0 w-[393px]" data-name="Container">
      <div className="absolute inset-0 rounded-[60px] shadow-[0px_20px_60px_-15px_rgba(0,0,0,0.5)] border-[3px] border-black" />
      <Container39 />
    </div>
  );
}

function App3() {
  return (
    <div className="absolute h-[826.305px] left-[52.25px] top-[28px] w-[393px]" data-name="App">
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="[grid-area:1_/_2] h-[854.305px] relative shrink-0" data-name="Container">
      <App2 />
      <App3 />
    </div>
  );
}

function Container44({ onButtonClick }: { onButtonClick?: () => void }) {
  return (
    <motion.div 
      className="gap-[42px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[642px] overflow-clip relative shrink-0 w-full" 
      data-name="Container"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container9 onButtonClick={onButtonClick} />
      <Container43 />
    </motion.div>
  );
}

export default function Container45({ onButtonClick }: { onButtonClick?: () => void }) {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-0 px-0 relative size-full">
          <Container44 onButtonClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
}