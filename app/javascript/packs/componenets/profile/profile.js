import React, {useEffect, useState} from 'react';
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { GETCURRENTUSER, LOGGEDINSTATUS } from '../action/type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCog } from '@fortawesome/free-solid-svg-icons';
import fb from '../../images/fb1.jpg'
	

const Profile = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const loggedInStatus = useSelector(state => state.loggedInStatus.payload);
	const [state, setState] = useState({
			user: {},
			message: ''
	});
	let current_user = JSON.parse(localStorage.getItem("current_user"))
	const asignUser =() => {
		if(current_user['tokenObj'] ){
			current_user = current_user['profileObj']
		}
		setState({...state, user: current_user})
		console.log('current_user: ', current_user)
		console.log('user: ', state.user)
	}
	useEffect(() => {
		setState({...state, user: current_user})
		asignUser()
  }, [])


		return (
			<>
				<div className='row user-profile'>
					<div className='col-md-8'>
						<div className='bg-image'>
							<p> <NavLink   exact to='/'><FontAwesomeIcon icon={faArrowLeft} size="1x" /> </NavLink>{current_user.name}</p>
							<p>0 No Post</p>
						</div>
						<div className='round-image float-left'>
							<img src={fb} />
						</div>
						<div className='float-right edit-profile'>
							<NavLink  className="" exact to='/settings/profile'>
								<FontAwesomeIcon icon={faCog} size="1x" /> EDIT PROFILE </NavLink>
						</div>
						<div className='clearfix'></div>
						<div className='usersname-profile' > 
							<p>{current_user.name} </p>
							<span> @10328490384 Active</span>
						</div>

					</div>
					<div className='col-md-4'>

					</div>
				</div>
			</>
				
		)
}

export default Profile;



