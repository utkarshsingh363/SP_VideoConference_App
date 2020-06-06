import React from 'react'

//Component Imports
import DrawerAdminList from '../DrawerAdminList/DrawerAdminList'
import DrawerSettingList from '../DrawerSettingList/DrawerSettingList'


export default function DrawerView(props){
    if(props.drawerview=='admin'){
      return(
        <DrawerAdminList openprofile={props.openprofile}/>
      )
    }else if(props.drawerview=='setting')
      return(
        <DrawerSettingList />
      )
  }