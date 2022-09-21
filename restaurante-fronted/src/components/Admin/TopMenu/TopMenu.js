import React from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import {useAuth} from '../../../hooks/'
import './TopMenu.scss'

export function TopMenu() {

    const {auth, logout} = useAuth()

    const renderName = () => {
        if(auth.me?.first_name) {
            return auth.me?.first_name
        }else{
            return 'Usuario'
        }

    }

  return (
    //! ARREGALR
    <Menu  className='top-menu-admin'>
        <Menu.Item className='top-menu-admin__logo' position='right'>
        <h1>Restaurante Admin</h1>
        </Menu.Item>


        <Menu.Item position='right'>
            <Menu.Item>Hola, {renderName()}</Menu.Item>
            <Menu.Item onClick={logout}>
                <Icon name='sign-out'/>
            </Menu.Item>
        </Menu.Item>
    </Menu>
  )
}
