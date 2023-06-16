import React from 'react'
import { Route } from 'react-router-dom'
import { Fragment } from 'react'
import Sidebar from '../components/sidebar/Sidebar'

export default function HomeTemplate(props) {
  return <Route exact path={props.path} render={(propsRoute) => {
    return <Fragment>

      <Sidebar/>
      <props.component {...propsRoute} />


    </Fragment>
  }} />
}
