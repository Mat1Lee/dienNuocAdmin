import React from 'react'
import { Fragment } from 'react'
import { Route } from 'react-router-dom'
const UserTemplate = (props) => {

  return <Route exact path={props.path} render={(propsRoute) => {
    return <Fragment>


      <props.component {...propsRoute} />


    </Fragment>
  }} />
}
export default UserTemplate;