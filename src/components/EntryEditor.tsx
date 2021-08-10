import { EditorExtensionSDK } from '@contentful/app-sdk';
import { css } from 'emotion';
import { isWhiteSpaceSingleLine } from 'typescript';

interface EditorProps {
  sdk: EditorExtensionSDK;
}

const Entry = (props: EditorProps) => {
  const {sdk} = props;  
  const locale = "de";
    
  let url:string;
  if (sdk.contentType.name.startsWith("Component")) {
    url = `https://spreadshop-contentful-demo.vercel.app/component?id=${sdk.entry.getSys().id}&preview=1&segment=default`;    
  } else if (sdk.contentType.sys.id === "pageLandingpage") { 
    url = ``;        
    new Promise((resolve, reject) => {
      sdk.space.getEntries({
        limit: 1,
        include: 10,
        locale: locale,
        content_type: 'page',
        'fields.content.sys.id': sdk.entry.getSys().id,
        order: 'sys.createdAt',
      }).then(entries => {
        const slug = (entries.items[0] as any).fields.slug[locale];
        document!.getElementById("preview")!.setAttribute("src", `https://spreadshop-contentful-demo.vercel.app/${slug}?preview=1&segment=default`);
      })      
    });                      
  } else if (sdk.contentType.sys.id === "pageProduct") { 
    url = ``;        
    new Promise((resolve, reject) => {
      sdk.space.getEntries({
        limit: 1,
        include: 10,
        locale: locale,
        content_type: 'page',
        'fields.content.sys.id': sdk.entry.getSys().id,
        order: 'sys.createdAt',
      }).then(entries => {
        const slug = (entries.items[0] as any).fields.slug[locale];
        document!.getElementById("preview")!.setAttribute("src", `https://spreadshop-contentful-demo.vercel.app/productrange/detail/${slug}?preview=1&segment=default`);
      })      
    });                  
    
  } else if (sdk.contentType.sys.id === "pageHelpdeskArticle") { 
    url = ``;        
    new Promise((resolve, reject) => {
      sdk.space.getEntries({
        limit: 1,
        include: 10,
        locale: locale,
        content_type: 'page',
        'fields.content.sys.id': sdk.entry.getSys().id,
        order: 'sys.createdAt',
      }).then(entries => {
        const slug = (entries.items[0] as any).fields.slug[locale];
        document!.getElementById("preview")!.setAttribute("src", `https://spreadshop-contentful-demo.vercel.app/helpdesk/${slug}?preview=1&segment=default`);
      })      
    });                      
  } else if (sdk.contentType.sys.id === "pageBlogPost") { 
    url = ``;        
    new Promise((resolve, reject) => {
      sdk.space.getEntries({
        limit: 1,
        include: 10,
        locale: locale,
        content_type: 'page',
        'fields.content.sys.id': sdk.entry.getSys().id,
        order: 'sys.createdAt',
      }).then(entries => {
        const slug = (entries.items[0] as any).fields.slug[locale];
        document!.getElementById("preview")!.setAttribute("src", `https://spreadshop-contentful-demo.vercel.app/blog/${slug}?preview=1&segment=default`);
      })      
    });                      
  } else if (sdk.contentType.sys.id === "pageBlogCategory") { 
    url = ``;        
    new Promise((resolve, reject) => {
      sdk.space.getEntries({
        limit: 1,
        include: 10,
        locale: locale,
        content_type: 'page',
        'fields.content.sys.id': sdk.entry.getSys().id,
        order: 'sys.createdAt',
      }).then(entries => {
        const slug = (entries.items[0] as any).fields.slug[locale];
        document!.getElementById("preview")!.setAttribute("src", `https://spreadshop-contentful-demo.vercel.app/blog/category/${slug}?preview=1&segment=default`);
      })      
    });                      
  }       
  else {
    url = "https://spreadshop-contentful-demo.vercel.app/unknown"
  }

  return (
    <div>      
      <iframe src={url} id="preview" title="preview" className={css({ display: "block", width: "100%", height: "100vh"})}/>;
    </div>
  )    
};

export default Entry;
