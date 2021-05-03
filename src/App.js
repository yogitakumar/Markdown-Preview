import React from "react";
import marked from 'marked';
import "./App.css";

const initialState=`
This is paragraph

**bold text**

# Heading1
## Heading 2

> Quotes!

- list item 1
- list item 2
- list item 3

[Visit my website](https://yogitakumar.github.io/)

This is a inline \`<div></div>\`

This is a block of code 
\`\`\`
    let a=1;
    let b="hello";
\`\`\`
                   
![React](https://www.vhv.rs/dpng/d/612-6126558_react-logo-png-react-js-logo-svg-transparent.png)               
`;

class App extends React.Component{
  state={
    text:initialState
  }
  
  handleChange = (e) =>{
    this.setState({
      text:e.target.value
    })
  }
  render(){
    const {text}=this.state;
    const markdown=marked(text, {breaks : true});
    return(
    <div>
        <div>
          <h2 classname="text-center m-4">Markdown Preview</h2>
          <div className="row">
              <div className="col-6">
                <h5>Enter markdown here:</h5>
                <textarea id="editor" value={text} onChange={this.handleChange}/>
                
            </div>
             <div className="col-6" >
                 <h5>See preview:</h5>
               <div className="preview output" id="preview" dangerouslySetInnerHTML={{__html:markdown}}/>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
