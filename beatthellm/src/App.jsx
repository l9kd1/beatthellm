import './App.css'
import { FileUploader } from '@aws-amplify/ui-react-storage';
import { View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


export const App = () => {
  return (
    <View>
      <div id="particles-js" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
      <View className="center-component" style={{ position: 'relative', zIndex: 1, display:'inline-block' }}>
        <View>
          <span className='rubik-wet-paint-regular logo-base'>
            <div>Beat the</div>
            <div className='logo-highlight'>LLM</div>
          </span>
          <FileUploader
            acceptedFileTypes={['.pdf']}
            path="media/"
            maxFileCount={1}
            isResumable />
        </View>
        <View className="footer" style={{ padding: '100px', margin:'1em 0 0 0' }}>
          <footer className="amplify-footer">
            <div className="amplify-footer-content">
              <div>Back to a traditional way of processing CVs.<br /> Because we are more than just numbers.</div><br />
              <p>&copy; 2024 Beat the LLM. All rights reserved.</p>
            </div>
          </footer>
        </View>
      </View>
    </View>
  );
};
export default App;
