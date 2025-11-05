function Text() {
  return (
    <div className="absolute content-stretch flex h-[14.5px] items-start left-[15px] top-[11.5px] w-[104.766px]" data-name="Text">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#364153] text-[12.25px] text-center text-nowrap tracking-[-0.0179px] whitespace-pre">beta coming soon</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-gradient-to-r from-[rgba(34,18,171,0.1)] relative rounded-[1.67772e+07px] size-full to-[rgba(0,168,168,0.1)]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(34,18,171,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Text />
    </div>
  );
}