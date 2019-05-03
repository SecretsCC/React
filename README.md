# JSX



generate project: 

​	npm install -g create-react-up



A component is a Function or Class that produces HTML to show the user(JSX) and handles feedback from the user(Using Event Handlers).



JSX between HTML: 

```html
HTML: <div style="background-color: blue; border: 1px solid red;"></div>
JSX: <div style={{ backgroundColor:'red', border: '1px solid red' }}></div>	

HTML: class ---> JSX: className

curly braces: get value
<label for=""></label> ---> <label htmlFor="" ></label>
```





Props:

​	System for passing data from a parent component to a child component, Goal is to customize or configure a child component

```js
const CommentDetail = (props) => {
    <div>{props.auth}</div>
    <div>{props.time}</div>
    <div>{props.content}</div>
    <div>{props.avatar}</div>
}
export default CommentDetail;
```

```js
import CommentDetail from './CommentDeatil';
import faker from 'faker';
import React from 'react';
import ReactDOm from 'react-dom';
<div>
	<CommentDeatil
		auth="CY" 
		time="MAY"
		content="Nice blog post"
		avatar="faker.images.avatar()"
	/>    
</div>
```



Function Components: 

​	Good for simple content



Class Components:

​	Good for just about everything else



# Seasons 

get users physical location and date show different web page

####  Phycial location

​	Geolocation API: <https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API>

​				

