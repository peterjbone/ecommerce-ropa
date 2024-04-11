import './UserDashboard.css';

import dataValidation from '../../dataValidation.js';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useStore } from '../../store';
import UserDashboardCard from '../../components/UserDashboardCard/UserDashboardCard.jsx';

import { ToastContainer, toast } from 'react-toastify';

export default function UserDashboard() {
  const userInfo = useStore((state) => state.userInfo);
  const favoritos = useStore((state) => state.favoritos);
  const changeEmail = useStore((state) => state.changeEmail);
  const getFavorites = useStore((state) => state.getFavorites);
  const changePassword = useStore((state) => state.changePassword);
  const logOut = useStore((state) => state.logOut);
  const reauthenticate = useStore((state) => state.reauthenticate);
  const deleteAccount = useStore((state) => state.deleteAccount);
  const [activeOption, setActiveOption] = useState('userData');
  const [isUserDataChanged, setIsUserDataChanged] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
  const [changeData, setChangeData] = useState({
    name: userInfo.name,
    surName: '',
    userName: '',
    dateOfBirth: '',
    email: '',
    newEmail: '',
    emailPassword: '',
    password: '',
    newPassword: '',
    repeatPassword: '',
    deletePassword: '',
  });
  const [changeDataErrors, setChangeDataErrors] = useState({
    name: '',
    surName: '',
    userName: '',
    dateOfBirth: '',
    changeEmail: '',
    currentEmail: '',
    email: '',
    newEmail: '',
    emailPassword: '',
    password: '',
    newPassword: '',
    repeatPassword: '',
    deletePassword: '',
  });
  const navigate = useNavigate();

  const handleOptionClick = (id) => {
    setActiveOption(id);
  }
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
        // dateOfBirth: changeData.dateOfBirth
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
      await changeEmail(changeData.email, changeData.emailPassword);
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
      await changePassword(changeData.password, changeData.newPassword);
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
  const handleGetFavorites = async () => {
    if (userInfo) {
      try {
        await getFavorites();
      } catch (error) {
        console.error(error);
      }
    }
    handleOptionClick('favorites');
  }
  const handlelogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }
  const handleReauthentication = async (event) => {
    event.preventDefault();
    try {
      console.log(changeData.deletePassword);
      await reauthenticate(changeData.deletePassword);
      setChangeData({
        ...changeData,
        deletePassword: '',
      })
      setIsDeleteAccountModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  }
  const handleDeleteAccount = async () => {
    try {
      await deleteAccount(userInfo._id);
      navigate('/');
    } catch (error) {
      console.error(error);
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
          className={`nav-bar-button dashboard-button ${activeOption === 'email' ? 'activeUserTab' : ''}`}
          onClick={() => handleOptionClick('email')}
        >
          Cambiar Email
        </button>
        <button
          className={`nav-bar-button dashboard-button ${activeOption === 'password' ? 'activeUserTab' : ''}`}
          onClick={() => handleOptionClick('password')}
        >
          Cambiar Contraseña
        </button>
        <button
          className={`nav-bar-button dashboard-button ${activeOption === 'favorites' ? 'activeUserTab' : ''}`}
          onClick={handleGetFavorites}
        >
          Mis Favoritos
        </button>
        <button
          className={`nav-bar-button dashboard-button ${activeOption === 'purchases' ? 'activeUserTab' : ''}`}
          onClick={() => handleOptionClick('purchases')}
        >
          Mis Compras
        </button>
        <button
          className={`nav-bar-button dashboard-button ${activeOption === 'reviews' ? 'activeUserTab' : ''}`}
          onClick={() => handleOptionClick('reviews')}
        >
          Mis Reseñas
        </button>
        <button
          className={`nav-bar-button dashboard-button ${activeOption === 'deleteAccount' ? 'activeUserTab' : ''}`}
          onClick={() => handleOptionClick('deleteAccount')}
        >
          Eliminar Cuenta
        </button>
        <button
          className={`nav-bar-button dashboard-button logout-button ${activeOption === 'logout' ? 'activeUserTab' : ''}`}
          onClick={handlelogOut}
        >
          Cerrar Sesión
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
                      name='name'
                      value={changeData.name}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.name ? '' : 'invisible'} >{changeDataErrors.name ? `${changeDataErrors.name}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label htmlFor='changeSurName' >Apellido</label>
                    <input
                      type='text'
                      name='surName'
                      value={changeData.surName}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.surName ? '' : 'invisible'} >{changeDataErrors.surName ? `${changeDataErrors.surName}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label htmlFor='changeUserName' >Nombre De Usuario</label>
                    <input
                      type='text'
                      name='userName'
                      value={changeData.userName}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.userName ? '' : 'invisible'} >{changeDataErrors.userName ? `${changeDataErrors.userName}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label htmlFor='changeUserName' >Teléfono</label>
                    <input
                      type='tel'
                      name='userName'
                      value={changeData.userName}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.userName ? '' : 'invisible'} >{changeDataErrors.userName ? `${changeDataErrors.userName}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label htmlFor='changeDateOfBirth' >Fecha De Nacimiento</label>
                    <input
                      type='date'
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
                      name='email'
                      value={changeData.email}
                      autoComplete="off"
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.email ? '' : 'invisible'} >{changeDataErrors.email ? `${changeDataErrors.email}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label>Nuevo E-mail</label>
                    <input
                      type='email'
                      name='newEmail'
                      value={changeData.newEmail}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.newEmail ? '' : 'invisible'} >{changeDataErrors.newEmail ? `${changeDataErrors.newEmail}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label>Contraseña</label>
                    <input
                      type='password'
                      name='emailPassword'
                      value={changeData.emailPassword}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.emailPassword ? '' : 'invisible'} >{changeDataErrors.emailPassword ? `${changeDataErrors.emailPassword}` : 'invisible'}</p>
                  <button
                    type='submit'
                    className='nav-bar-button user-submit-button'
                    disabled={!changeData.email || !changeData.newEmail || !changeData.emailPassword || changeDataErrors.email || changeDataErrors.newEmail || changeDataErrors.emailPassword} >
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
                      name='password'
                      value={changeData.password}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.password ? '' : 'invisible'} >{changeDataErrors.password ? `${changeDataErrors.password}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label>Nueva Contraseña</label>
                    <input
                      type='password'
                      name='newPassword'
                      value={changeData.newPassword}
                      onChange={handleUserDataChange} />
                  </div>
                  <p className={changeDataErrors.newPassword ? '' : 'invisible'} >{changeDataErrors.newPassword ? `${changeDataErrors.newPassword}` : 'invisible'}</p>
                  <div className='user-data-input-label-container' >
                    <label>Repetir Nueva Contraseña</label>
                    <input
                      type='password'
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
                  {favoritos.map((product) => (
                    <UserDashboardCard key={product._id} product={product} isPurchase={false} />
                  ))}
                </>
              );
            case 'purchases':
              return (
                <>
                  {userInfo.purchases.map((product) => (
                    <UserDashboardCard key={product._id} product={product} isPurchase={true} />
                  ))}
                </>
              );
            case 'reviews':
              return (
                <>
                  {userInfo.reviews.map((product) => (
                    <UserDashboardCard key={product._id} product={product} isPurchase={true} />
                  ))}
                </>
              );
            case 'deleteAccount':
              return (
                <>
                  <form onSubmit={handleReauthentication} >
                    <div className='user-data-input-label-container' >
                      <label>Eliminar cuenta requiere contraseña</label>
                      <input
                        type='password'
                        name='deletePassword'
                        value={changeData.deletePassword}
                        onChange={handleUserDataChange} />
                    </div>
                    <p className={changeDataErrors.deletePassword ? '' : 'invisible'} >{changeDataErrors.deletePassword ? `${changeDataErrors.deletePassword}` : 'invisible'}</p>
                    <button
                      type='submit'
                      className='nav-bar-button user-submit-button'
                      disabled={!changeData.deletePassword || changeDataErrors.deletePassword} >
                      Autenticar
                    </button>
                  </form>
                  {isDeleteAccountModalOpen && (
                    <div className='modal-overlay' >
                      <div className='delete-account-modal'>
                        <h3>Confirmar eliminación de cuenta</h3>
                        <p>Esta acción es irreversible. ¿Está seguro de que desea eliminar permanentemente su cuenta?</p>
                        <div>
                          <button
                            className='delete-account-button'
                            onClick={handleDeleteAccount}
                          >
                            Eliminar Cuenta
                          </button>
                          <button
                            className='delete-account-cancel-button'
                            onClick={() => setIsDeleteAccountModalOpen(false)}
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            default:
              return (
                <div>Selecciona una opción</div>
              );
          }
        })()}
      </section>

      <ToastContainer />
    </div>
  );
}