import "./quote.css"
const Quote = ({title , subtitle})=>{
  return(
   <div className="quote">
    <div className="quoteTitle">
    <button className="quoteCopyInfo">Click to copy</button>
      {title}
    </div>
    <div className="quoteSubtitle">{subtitle}</div>
   </div>   
  );
};
export default Quote;