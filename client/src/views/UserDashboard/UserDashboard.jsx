import './UserDashboard.css';

import dataValidation from './dataValidation.js';
import { useState } from 'react';
// import { useStore } from '../../userStore';

export default function UserDashboard() {
  // const changeEmail = useStore((state) => state.changeEmail);
  // const changePassword = useStore((state) => state.changePassword);


  const [activeOption, setActiveOption] = useState('username');
  const [isUserDataChanged, setIsUserDataChanged] = useState(false);
  const [changeData, setChangeData] = useState({ loadSearchSettings: '', loadFilterSettings: '', loadOptionsSettings: '', promptModalPassword: '', name: '', surName: '', userName: '', dateOfBirth: '', currentEmail: '', email: '', emailPassword: '', password: '', newPassword: '', repeatPassword: '' });
  const [changeDataErrors, setChangeDataErrors] = useState({ promptModalPassword: '', userData: '', name: '', surName: '', userName: '', dateOfBirth: '', changeEmail: '', currentEmail: '', email: '', emailPassword: '', password: '', newPassword: '', repeatPassword: '' });

  const handleOptionClick = (id) => {
    setActiveOption(id);
  };

  const handleUserDataChange = (event) => {
    const { name, value } = event.target;
    if (!isUserDataChanged && (event.target.type !== 'email' || event.target.type !== 'password')) {
      setIsUserDataChanged(true);
    }
    setChangeData({
      ...changeData,
      [name]: value
    });
    setChangeDataErrors(
      dataValidation({
        ...changeData,
        [name]: value
      }));
  }


  const handleUserEmailChangeSubmit = async (event) => {
    event.preventDefault();
    try {
      // await changeEmail(changeData.email, changeData.emailPassword);
      setChangeData({
        ...changeData,
        email: '',
        emailPassword: '',
        password: ''
      });
      // setModalMessage({
      //   ...modalMessage,
      //   title: 'Success',
      //   message: 'Email Updated Succesfully'
      // });
      // setIsNotificationModalOpen(true);
    } catch (error) {
      setChangeDataErrors({
        ...changeDataErrors,
        changeEmail: `Error updating email ${error?.response?.data?.error?.code}`
      });
    }
  }

  const handleUserPasswordChangeSubmit = async (event) => {
    event.preventDefault();
    try {
      // await changePassword(changeData.password, changeData.newPassword, changeData.repeatPassword);
      setChangeData({
        ...changeData,
        password: '',
        newPassword: '',
        repeatPassword: ''
      });
      // setModalMessage({
      //   ...modalMessage,
      //   title: 'Success',
      //   message: 'Password Updated Succesfully'
      // });
      // setIsNotificationModalOpen(true);
    } catch (error) {
      setChangeDataErrors({
        ...changeDataErrors,
        changePassword: `Error updating password ${error?.response?.data?.error?.code}`
      });
    }
  }

  return (
    <div className='user-dashboard-container'>
      <aside className='user-options-container'>
        <h2>Panel de Usuario</h2>
        <button
          className={`nav-bar-button ${activeOption === 'username' ? 'active' : ''}`}
          onClick={() => handleOptionClick('username')}
        >
          Información personal
        </button>
        <button
          className={`nav-bar-button ${activeOption === 'password' ? 'active' : ''}`}
          onClick={() => handleOptionClick('password')}
        >
          Cambiar Contraseña
        </button>
        <button
          className={`nav-bar-button ${activeOption === 'email' ? 'active' : ''}`}
          onClick={() => handleOptionClick('email')}
        >
          Cambiar Email
        </button>
        <button
          className={`nav-bar-button ${activeOption === 'favorites' ? 'active' : ''}`}
          onClick={() => handleOptionClick('favorites')}
        >
          Mis Favoritos
        </button>
        <button
          className={`nav-bar-button ${activeOption === 'purchases' ? 'active' : ''}`}
          onClick={() => handleOptionClick('purchases')}
        >
          Mis Compras
        </button>
      </aside>
      <section className='user-dashboard-info'>
        {(() => {
          switch (activeOption) {
            case 'username':
              return (
                <form>
                  <label htmlFor="">Nombre de usuario</label>
                  <p>user.name</p>
                  <label htmlFor="">Email</label>
                  <p>user.email</p>
                  <form onSubmit={handleUserEmailChangeSubmit}  >
                    <div className='user-data-input-label-container' >
                      <label>Current Email</label>
                      <input
                        type='email'
                        key='changeEmailEmail'
                        id='changeEmailEmail'
                        name='currentEmail'
                        value={changeData.currentEmail}
                        autoComplete="off"
                        onChange={handleUserDataChange} />
                    </div>
                    <div className='user-data-input-label-container' >
                      <label>New Email</label>
                      <input
                        type='email'
                        key='changeEmailNew'
                        id='changeEmailNew'
                        name='email'
                        value={changeData.email}
                        onChange={handleUserDataChange} />
                    </div>
                    <p className={changeDataErrors.email ? '' : 'invisible'} >{changeDataErrors.email ? `${changeDataErrors.email}` : 'invisible'}</p>
                    <div className='user-data-input-label-container' >
                      <label>Password</label>
                      <input
                        type='password'
                        key='emailPassword'
                        id='emailPassword'
                        name='emailPassword'
                        value={changeData.emailPassword}
                        onChange={handleUserDataChange} />
                    </div>
                    <p className={changeDataErrors.emailPassword ? '' : 'invisible'} >{changeDataErrors.emailPassword ? `${changeDataErrors.emailPassword}` : 'invisible'}</p>
                    <p className={changeDataErrors.changeEmail ? '' : 'invisible'} >{changeDataErrors.changeEmail ? `${changeDataErrors.changeEmail}` : 'invisible'}</p>
                    <button
                      type='submit'
                      className='user-options-button'
                      onClick={handleUserEmailChangeSubmit}
                      disabled={!changeData.currentEmail || !changeData.email || !changeData.emailPassword || changeDataErrors.currentEmail || changeDataErrors.email || changeDataErrors.emailPassword} >
                      Save
                    </button>
                  </form>
                  <form onSubmit={handleUserPasswordChangeSubmit} >
                    <div className='user-data-input-label-container' >
                      <label>Current Password</label>
                      <input
                        type='password'
                        key='password'
                        id='password'
                        name='password'
                        value={changeData.password}
                        onChange={handleUserDataChange} />
                    </div>
                    <p className={changeDataErrors.password ? '' : 'invisible'} >{changeDataErrors.password ? `${changeDataErrors.password}` : 'invisible'}</p>
                    <div className='user-data-input-label-container' >
                      <label>New Password</label>
                      <input
                        type='password'
                        key='changePasswordNew'
                        id='changePasswordNew'
                        name='newPassword'
                        value={changeData.newPassword}
                        onChange={handleUserDataChange} />
                    </div>
                    <p className={changeDataErrors.newPassword ? '' : 'invisible'} >{changeDataErrors.newPassword ? `${changeDataErrors.newPassword}` : 'invisible'}</p>
                    <div className='user-data-input-label-container' >
                      <label>Repeat New Password</label>
                      <input
                        type='password'
                        key='changePasswordNewRepeat'
                        id='changePasswordNewRepeat'
                        name='repeatPassword'
                        value={changeData.repeatPassword}
                        onChange={handleUserDataChange} />
                    </div>
                    <p className={changeDataErrors.repeatPassword ? '' : 'invisible'} >{changeDataErrors.repeatPassword ? `${changeDataErrors.repeatPassword}` : 'invisible'}</p>
                    <button
                      type='submit'
                      className='user-options-button'
                      disabled={!changeData.password || !changeData.newPassword || !changeData.repeatPassword || changeDataErrors.password || changeDataErrors.newPassword || changeDataErrors.repeatPassword} >
                      Save
                    </button>
                  </form>
                </form>
              );
            case 'password':
              return (
                <div>Cambiar Contraseña</div>
              );
            case 'email':
              return (
                <div>Cambiar Email</div>
              );
            case 'favorites':
              return (
                <div>Mis Favoritos</div>
              );
            case 'purchases':
              return (
                <div>Mis Compras</div>
              );
            default:
              return (
                <div>Selecciona una opción</div>
              );
          }
        })()}
      </section>
    </div>
  );
}