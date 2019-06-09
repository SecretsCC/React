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

jgjg

# Seasons 

get users physical location and date show different web page

####  Phycial location

​	Geolocation API: <https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API>





#  Lifecycle

Time:   constructor —> render —>  (after render content visible on screen) —>componentDidMount(Sit and wait for updates) —> componentDidUpdate —> componentWillUnmount



###  constructor

​	Good place to do onetime setup

###  render	

​	Avoid doing anything besides returning JSX

###  componentDidMount

​	good place to do data loading 

###  componentDidUpdate

​	good place to do more dataloading when state/props change

###  componentWillUnmount

​	good place to do cleanup(especially for non-React stuff)





#  Input & Form

```HTML
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={ this.onSubmitForm } className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                            value={this.state.term}
                            onChange={ (e) => this.setState({term: e.target.value })} />
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SearchBar;

```



parent

```HTML REACT
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{
    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={ this.onSearchSubmit }/>
            </div>
        )
    }
} 
    

export default App;


```



#  React Refs

	#####  	Gives access to a single DOM element

	#####  	we create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props





#  Redux

####  	what is Redux?

​		State management library

​		Makes creting complex applications easier

​		Not required to create a React app

​		Not explicitly designed to work with React!

####  	Redux Cycle

​		Action Creator  —> Action  —> dispathch —> Reducers —> State



###  	React-redux

​			Provider: make React commponent cannectable

​			connect: build connect between Redux store & react store

​			<http://taobaofed.org/blog/2016/08/18/react-redux-connect/>



#### 	Redux thunk 

​		middlewire 



​	





​	