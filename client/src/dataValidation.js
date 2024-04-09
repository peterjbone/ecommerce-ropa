export default function dataValidation(input) {
  const errors = {};
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const userNameRegex =  /[^\w-]/;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const dateOfBirth = new Date(input.dateOfBirth);

  if (input.name && !nameRegex.test(input.name)) {
    errors.name = 'Debe ser un nombre válido';
  }
  if (input.surName && !nameRegex.test(input.surName)) {
    errors.surName = 'Debe ser un apellido válido';
  }
  if (input.userName && userNameRegex.test(input.userName)) {
    errors.userName = 'Los únicos símbolos válidos son - y _';
  }
  if (input.userName && (input.userName < 3 || input.userName > 128)) {
    errors.userName = 'Nombre De usuario debe debe tener entre 8 y 128 caracteres';
  }
  if (input.dateOfBirth && (dateOfBirth > new Date(new Date().setFullYear(new Date().getFullYear() - 13)))) {
    errors.dateOfBirth = 'Date must be later than 13 years ago';
  }
  if (input.dateOfBirth && (dateOfBirth < new Date(new Date().setFullYear(new Date().getFullYear() - 150)))) {
    errors.dateOfBirth = 'Date must sooner than 150 years ago';
  }
  if (input.email && !emailRegex.test(input.email)) {
    errors.email = 'Debe ser un Email válido';
  }
  if (input.email && input.email.length > 254) {
    errors.email = 'E-mail debe tener menos de 254 characters';
  }
  if (input.newEmail && !emailRegex.test(input.newEmail)) {
    errors.newEmail = 'Debe ser un Email válido';
  }
  if (input.newEmail && input.newEmail.length > 254) {
    errors.newEmail = 'E-mail debe tener menos de 254 characters';
  }
  if (input.email && (input.email !== '' && input.newEmail !== '' && input.newEmail === input.email)) {
    errors.newEmail = 'Nuevo E-mail debe ser diferente';
  }
  if (input.emailPassword && (input.emailPassword.length < 8 || input.emailPassword.length > 128)) {
    errors.emailPassword = 'La contraseña debe tener entre 8 y 128 caracteres';
  }
  if (input.password && (input.password.length < 8 || input.password.length > 128)) {
    errors.password = 'La contraseña debe tener entre 8 y 128 caracteres';
  }
  if (input.newPassword && (input.newPassword.length < 8 || input.newPassword.length > 128)) {
    errors.newPassword = 'La contraseña debe tener entre 8 y 128 caracteres';
  }
  if (input.deletePassword && (input.deletePassword.length < 8 || input.deletePassword.length > 128)) {
    errors.deletePassword = 'La contraseña debe tener entre 8 y 128 caracteres';
  }
  if (input.repeatPassword && (input.newPassword !== '' && input.repeatPassword !== '' && input.newPassword !== input.repeatPassword)) {
    errors.repeatPassword = 'Las contraseñas deben ser iguales';
  }
  if (input.repeatPassword && (input.repeatPassword.length < 8 || input.repeatPassword.length > 128)) {
    errors.repeatPassword = 'La contraseña debe tener entre 8 y 128 caracteres';
  }
  return errors;
}