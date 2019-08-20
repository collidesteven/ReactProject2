import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Profile = (props)=>{

  const reDirectUser = ()=>{
    const userReDirect = true;

    if(userReDirect){
      return(  <Redirect to="/"/> )
    }
  }

  return (
    <div>
      <Link to={{pathname:`${props.match.url}/posts`}}>Link User Posts</Link>
    </div>
  )
}

export default Profile;
