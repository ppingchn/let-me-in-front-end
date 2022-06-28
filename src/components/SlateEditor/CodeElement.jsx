// Define a React component renderer for our code blocks.
export default function CodeElement(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}
