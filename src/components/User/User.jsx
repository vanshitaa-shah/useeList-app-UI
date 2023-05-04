import React from 'react'
import UserProfile from '../UserProfile/UserProfile'
import UserStyle from './User.module.css'
import { Trash2, Lock } from 'react-feather'
import { hoverActions} from '../../store/hoverSlice'
import { cardActions} from '../../store/cardSlice'
import { useDispatch } from 'react-redux'
const User = ({ userInfo }) => {
    const dispatch = useDispatch();
    const showCardHandler = () => {
        dispatch(hoverActions.toggleCard())
        dispatch(cardActions.showCard(userInfo))
    }
    const hideClassHandler = () => {
        dispatch(hoverActions.toggleCard())
    }
    return (
        <tr>
            <td colSpan={2}>
                <UserProfile profileInfo={userInfo} showCard={showCardHandler} hideCard={hideClassHandler} />
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