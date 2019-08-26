import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {name:'francis'}
    console.log('1 - Constructor')
  }

  static getDerivedStateFromProps(props, state){
    console.log('2 - getDerivedStateFromProps')
    return null;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('x - shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState);

    if(nextState.name=="Steve"){
      return false;
    }
    else{
      return true;
    }
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('x-getSnapshotBeforeUpdate');
    console.log(prevProps);
    console.log(prevState);
    return null;
  }

  render(){
    console.log('3 - render');
    console.log(this.state);
  return (
    <div onClick = {()=>this.setState({name:'Francis Jr'})}>Home</div>
  )
}
componentDidUpdate(prevProps, prevState){
  console.log('x-componentDidUpdate');
  console.log(prevState);

}
componentDidMount(){
  console.log('4 - componentDidMount')
}

componentWillUnmount(){
  console.log('5-componentWillUnMount')
}


}

export default Home;
