// Define a React component renderer for our code blocks.
export default function BoldElement(props) {
  console.log(props);
  return <span className="font-bold">{props.children}</span>;
}
