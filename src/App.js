import React , {useState} from 'react'
import Input from './component/Input'
function App() {
  const [birthDay , setBirthDay] = useState('')
  return (
    <div className="App">
      <h2>Are you lucky ?</h2>
      <Input birthDay = {birthDay} setBirthDay = {setBirthDay}/>
    </div>
  );
}

export default App;
