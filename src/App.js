import React from 'react';

export default class App extends React.Component {
componentDidMount (){
setTimeout(function(){alert("Hello")},2000)
    }
    componentWillUnmount (){
alert("GoodBye")
    }

render () {
 return (<div> </div>);
}

}

