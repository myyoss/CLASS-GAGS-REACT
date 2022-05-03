interface BoxProps {
  id:any
  question: string;
  answer:string
  img:any
}
const Box = (props: BoxProps) => {
  const { id, question, answer, img } = props;
 
  return (
    <div className="box">
      <h1>{id}</h1>
      <h1>{question}</h1>
      <h1>{answer}</h1>
      <p>{img}</p>
    </div>
    
  );
  
};

export default Box;
