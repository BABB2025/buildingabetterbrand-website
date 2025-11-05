import svgPaths from "./svg-1jtbj4ifh4";

function Heading1() {
  return (
    <div className="absolute font-['Inter:Bold',_sans-serif] font-bold h-[315px] leading-[105px] left-0 not-italic text-[rgba(0,0,0,0)] top-0 w-[1008px]" data-name="Heading 1">
      <p className="absolute bg-clip-text left-[88.96px] text-[100px] top-[2px] w-[831px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(16, 24, 40) 0%, rgb(34, 18, 171) 50%, rgb(16, 24, 40) 100%)" }}>{`Grow Your `}</p>
      <p className="absolute bg-clip-text left-[401px] text-[0px] top-[130px] w-[537px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(16, 24, 40) 0%, rgb(34, 18, 171) 50%, rgb(16, 24, 40) 100%)" }}>
        <span className="bg-clip-text not-italic text-[84px] text-[rgba(0,0,0,0)]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgb(249, 107, 9) 0%, rgb(255, 189, 74) 50%, rgb(0, 168, 168) 100%)" }}>
          {" "}
        </span>
        <span className="bg-clip-text not-italic text-[100px] text-[rgba(0,0,0,0)]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgb(249, 107, 9) 0%, rgb(255, 189, 74) 50%, rgb(0, 168, 168) 100%)" }}>
          brand
        </span>
        <span className="text-[100px]">{` now`}</span>
      </p>
      <p className="absolute bg-clip-text left-[88.5px] text-[100px] top-[258px] w-[831px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(16, 24, 40) 0%, rgb(34, 18, 171) 50%, rgb(16, 24, 40) 100%)" }}>
        simplified
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[102px] left-[513.5px] top-[406px] w-[487px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[34.125px] left-[17px] not-italic text-[#4a5565] text-[21px] top-[-1px] tracking-[-0.3589px] w-[506px]">Building a Better Brand® unifies all your brand operations in one intelligent system.</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[44px] relative rounded-[6.75px] shrink-0 w-[204px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[44px] items-center overflow-clip px-[10.5px] py-[3.5px] relative rounded-[inherit] w-[204px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[12.25px] text-nowrap tracking-[-0.0179px] whitespace-pre">Email Address...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[6.75px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Arrow right">
          <path d={svgPaths.p1f54f900} id="Icon" stroke="var(--stroke-0, #F3F3F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-b from-[#2212ab] h-[44px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#00a8a8]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[44px] items-center justify-center px-[28px] py-[7px] relative">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.0179px] whitespace-pre">Join Waitlist</p>
        <ArrowRight />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex gap-[10.5px] h-[44px] items-start left-[88.5px] top-[425px] w-[400px]" data-name="Form">
      <Input />
      <Button />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Form />
    </div>
  );
}