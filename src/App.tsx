import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

function App() {
  return (
    <div className="App">
     <div>
     <TextBoxComponent width='160px' multiline={true} readOnly={true} 
      placeholder='Enter your address' floatLabelType="Auto"  //enabled={false}
      >
     </TextBoxComponent>
     </div>
     {/* <div>
     <TextBoxComponent width='160px' placeholder='Always' cssClass='e-error' floatLabelType='Always'>
     </TextBoxComponent>
     </div>
     <div>
     <TextBoxComponent width='160px' placeholder='Auto' cssClass='e-warning' floatLabelType='Auto'>
     </TextBoxComponent>
     </div>
     <div>
     <TextBoxComponent width='160px' placeholder='Never' cssClass='e-success' floatLabelType='Never'>
     </TextBoxComponent>
     </div> */}
    </div>
  );
}

export default App;
