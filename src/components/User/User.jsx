import React from 'react'
import UserProfile from '../UserProfile/UserProfile'
import UserStyle from './User.module.css'
import { Trash2, Lock } from 'react-feather'
const User = ({ userInfo }) => {
    console.log(userInfo.status);
    return (
        <tr>
            <td colSpan={2}>
                <UserProfile profileInfo={userInfo} />
            </td>
            {
                userInfo.access === 'owner'
                    ? <>
                        <td id={UserStyle.active} >Active</td>
                        <td id={UserStyle.owner}>Owner</td>
                        <td><Lock /></td>
                    </>
                    : <>
                        <td>
                            <select name="status" defaultValue={userInfo.status ? 'active' : 'inactive'} >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </td>
                        <td>
                            <select name="access" defaultValue={userInfo.access} >
                                <option value="manager">Manager</option>
                                <option value="read">Read</option>
                            </select>
                        </td>
                        <td>
                            <Trash2 />
                        </td>
                    </>}

        </tr>
    )
}

export default User