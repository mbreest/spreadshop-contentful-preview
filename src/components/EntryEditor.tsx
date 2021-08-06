import { EditorExtensionSDK } from '@contentful/app-sdk';
import { css } from 'emotion';

interface EditorProps {
  sdk: EditorExtensionSDK;
}

const Entry = (props: EditorProps) => {
  const {sdk} = props;  
  
  let url:string;
  if (sdk.contentType.name.startsWith("Component")) {
    url = `https://spreadshop-contentful-demo.vercel.app/component?id=${sdk.entry.getSys().id}&preview=1&segment=default`;    
  } else if (sdk.contentType.name.startsWith("PageType")) {        
    url = `https://spreadshop-contentful-demo.vercel.app/pageType?id=${sdk.entry.getSys().id}&preview=1&segment=default`;    
  } else {
    url = "https://spreadshop-contentful-demo.vercel.app/unknown"
  }

  return (
    <div>      
      <iframe src={url} title="preview" className={css({ display: "block", width: "100%", height: "100vh"})}/>;
    </div>
  )    
};

export default Entry;
