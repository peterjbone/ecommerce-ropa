import './UserDashboard.css';

import dataValidation from './dataValidation.js';
import { useState } from 'react';
import { useStore } from '../../store';
import UserDashboardCard from '../../components/UserDashboardCard/UserDashboardCard.jsx';

export default function UserDashboard() {
  // const user = useStore((state) => state.user);
  // const changeEmail = useStore((state) => state.changeEmail);
  // const changePassword = useStore((state) => state.changePassword);
  const nuevos = useStore((state) => state.nuevos);
  const user = {
    name: 'H',
    _id: 1,
    reviews: [],
    purchases: [],
  }

  const [activeOption, setActiveOption] = useState('userData');
  const [isUserDataChanged, setIsUserDataChanged] = useState(false);
  const [changeData, setChangeData] = useState({ name: '', surName: '', userName: '', dateOfBirth: '', currentEmail: '', email: '', emailPassword: '', password: '', newPassword: '', repeatPassword: '' });
  const [changeDataErrors, setChangeDataErrors] = useState({ name: '', surName: '', userName: '', dateOfBirth: '', changeEmail: '', currentEmail: '', email: '', emailPassword: '', password: '', newPassword: '', repeatPassword: '' });

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

  const handleUserDataChangeSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        name: changeData.name,
        surName: changeData.surName,
        userName: changeData.userName,
        dateOfBirth: changeData.dateOfBirth
      }
      // await changeUserData(userData);
      setIsUserDataChanged(false);
      // setModalMessage({
      //   ...modalMessage,
      //   title: 'Success',
      //   message: 'User Data Updated Succesfully'
      // });
      // setIsNotificationModalOpen(true);
    } catch (error) {
      setChangeDataErrors({
        ...changeDataErrors,
        userData: `Error updating user data ${error?.response?.data?.error?.code}`
      });
    }
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
          className={`nav-bar-button ${activeOption === 'userData' ? 'activeUserTab' : ''}`}
          onClick={() => handleOptionClick('userData')}
        >
          Información personal
        </button>
        <button
          className={`nav-bar-button ${activeOption === 'email' ? 'activeUserTab' : ''}`}
          onClick={() => handleOptionClick('email')}
        >
          Cambiar Email
        </button>
        <button
          className={`nav-bar-button ${activeOption === 'password' ? 'activeUserTab' : ''}`}
          onClick={() => handleOptionClick('password')}
        >
          Cambiar Contraseña
        </button>
        <button
          className={`nav-bar-button ${activeOption === 'favorites' ? 'activeUserTab' : ''}`}
          onClick={() => handleOptionClick('favorites')}
        >
          Mis Favoritos
        </button>
        <button
          className={`nav-bar-button ${activeOption === 'purchases' ? 'activeUserTab' : ''}`}
          onClick={() => handleOptionClick('purchases')}
        >
          Mis Compras
        </button>
      </aside>
      <section className='user-dashboard-info'>
        {(() => {
          switch (activeOption) {
            case 'userData':
              return (
                <form onSubmit={handleUserDataChangeSubmit} >
                  <div className='user-data-input-label-container' >
                    <label htmlFor='changeName' >Nombre</label>
                    <input
                      type='text'
                      key='changeName'
                      id='changeName'
                      name='name'
                      value={changeData.name}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.name ? '' : 'invisible'} >{changeDataErrors.name ? `${changeDataErrors.name}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label htmlFor='changeSurName' >Apellido</label>
                    <input
                      type='text'
                      key='changeSurName'
                      id='changeSurName'
                      name='surName'
                      value={changeData.surName}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.surName ? '' : 'invisible'} >{changeDataErrors.surName ? `${changeDataErrors.surName}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label htmlFor='changeUserName' >Nombre De Usuario</label>
                    <input
                      type='text'
                      key='changeUserName'
                      id='changeUserName'
                      name='userName'
                      value={changeData.userName}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.userName ? '' : 'invisible'} >{changeDataErrors.userName ? `${changeDataErrors.userName}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label htmlFor='changeUserName' >Teléfono</label>
                    <input
                      type='tel'
                      key='changeUserName'
                      id='changeUserName'
                      name='userName'
                      value={changeData.userName}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.userName ? '' : 'invisible'} >{changeDataErrors.userName ? `${changeDataErrors.userName}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label htmlFor='changeDateOfBirth' >Fecha De Nacimiento</label>
                    <input
                      type='date'
                      key='changeDateOfBirth'
                      id='changeDateOfBirth'
                      name='dateOfBirth'
                      value={changeData.dateOfBirth}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.dateOfBirth ? '' : 'invisible'} >{changeDataErrors.dateOfBirth ? `${changeDataErrors.dateOfBirth}` : 'invisible'}</p>
                  <p className={changeDataErrors.userData ? '' : 'invisible'} >{changeDataErrors.userData ? `${changeDataErrors.userData}` : 'invisible'}</p>
                  <button
                    type='submit'
                    className='nav-bar-button user-submit-button'
                    disabled={!isUserDataChanged || (!changeData.name && !changeData.surName && !changeData.userName && !changeData.dateOfBirth) || (changeDataErrors.name || changeDataErrors.surName || changeDataErrors.userName || changeDataErrors.dateOfBirth)} >
                    Modificar
                  </button>
                </form>
              );
            case 'email':
              return (
                <form onSubmit={handleUserEmailChangeSubmit}  >
                  <div className='user-data-input-label-container' >
                    <label>E-mail Actual</label>
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
                    <label>Nuevo E-mail</label>
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
                    <label>Contraseña</label>
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
                    className='nav-bar-button user-submit-button'
                    onClick={handleUserEmailChangeSubmit}
                    disabled={!changeData.currentEmail || !changeData.email || !changeData.emailPassword || changeDataErrors.currentEmail || changeDataErrors.email || changeDataErrors.emailPassword} >
                    Modificar
                  </button>
                </form>
              );
            case 'password':
              return (
                <form onSubmit={handleUserPasswordChangeSubmit} >
                  <div className='user-data-input-label-container' >
                    <label>Contraseña Actual</label>
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
                    <label>Nueva Contraseña</label>
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
                    <label>Repetir Nueva Contraseña</label>
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
                    className='nav-bar-button user-submit-button'
                    disabled={!changeData.password || !changeData.newPassword || !changeData.repeatPassword || changeDataErrors.password || changeDataErrors.newPassword || changeDataErrors.repeatPassword} >
                    Modificar
                  </button>
                </form>
              );
            case 'favorites':
              return (
                <>
                  {/* user.favorites */nuevos.map((product) => (
                    <UserDashboardCard key={product._id} product={product} isPurchase={false} />
                  ))}
                </>
              );
            case 'purchases':
              return (
                <>
                  {/* user.purchases */nuevos.map((product) => (
                    <UserDashboardCard key={product._id} product={product} isPurchase={true} />
                  ))}
                </>
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