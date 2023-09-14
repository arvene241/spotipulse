const GridBox = ({ header, content }: { header: any, content: string}) => {
  return (
    <div className="py-[15px] px-[10px] border-b border-r border-grey">
      <h2 className="text-xl md:text-3xl font-bold text-lightestGrey mb-1">{header}</h2>
      <p className="text-lightestGrey text-xs">{content}</p>
    </div>
  );
};

export default GridBox;
