import Form from "react-bootstrap/Form"
function ListItem(props) {
  const value = props.value;
  const index = props.index
  return (
    // Wrong! There is no need to specify the key here:
    <option key={value+index} value={value}>
      {value}
    </option>
  );
}

function Month() {
  const days = ["มกราคม"]
  const listItems = days.map((value ,index) =>
    // Wrong! The key should have been specified here:
    <ListItem key={value+index} value={value} index={index} />
  );
  return <>
  {listItems}
  </> ;
}
export default Month