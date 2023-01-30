import Form from "react-bootstrap/Form"
function ListItem(props) {
  const value = props.value;
  const index = props.index
  
  return (
    <>
    <option key={value+index} value={value}>
      {value}
    </option>
    </>
    
  );
}

function Dayfetch(props) {
  const setnewday = props.dayset
  const daynew = setnewday.slice(0,2)
  console.log(setnewday.slice(0,2))
  const days = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


  const listItems = days.map((value ,index) =>
    // Wrong! The key should have been specified here:
    <ListItem key={value+index} value={value} index={index} />
  );
  return listItems;
}
export default Dayfetch