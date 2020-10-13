import React, { useState } from 'react'
import clsx from 'clsx'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { blue, grey } from '@material-ui/core/colors'

import logo from '../../img/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '100%',
  },
}))

const DefaultButton = withStyles((theme) => ({
  root: {
    color: grey[600],
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
      color: grey[700]
    },
    '&:focus': {
      backgroundColor: 'transparent',
      color: grey[800]
    },
  },
}))(Button)

const PrimaryButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
      color: grey[100]
    },
    '&:focus': {
      backgroundColor: blue[800],
      color: grey[100]
    },
  },
}))(Button)

const Login = () => {
  const classes = useStyles()
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <div className='wrapper wrapper-full-page'>
        {/* you can change the color of the filter page using: filter-color='blue | purple | green | orange | red | rose' */}
        <div className='page-header login-page header-filter bg-login-image' filter-color='black'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-8 mx-auto'>
                <form className={classes.root + 'form'}>
                  <div className='card card-login card-hidden'>
                    <div className='card-header card-header-blue text-center'>
                      <img src={logo} className='logotype' alt='Logo da Solumedi' />
                    </div>
                    <div className='card-body'>
                      <h3 className='card-description text-center'>Fazer login</h3>
                      <p className='card-description text-center'>Ir para o dashboard</p>
                      <span className='bmd-form-group'>
                        <div className='input-group'>
                          <FormControl className={clsx(classes.margin, classes.textField)}>
                            <TextField
                              required
                              id="standard-email-input"
                              label="E-mail"
                              type="email"
                              autoComplete="current-email"
                            />
                          </FormControl>
                        </div>
                      </span>
                      <span className='bmd-form-group'>
                        <div className='input-group'>
                          <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Digite sua senha</InputLabel>
                            <Input
                              required
                              id="standard-adornment-password"
                              type={values.showPassword ? 'text' : 'password'}
                              value={values.password}
                              onChange={handleChange('password')}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="alternar a visibilidade da senha"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                          </FormControl>
                        </div>
                      </span>
                    </div>
                    <div className='card-footer justify-content-center'>
                      <DefaultButton href="#" size="small" color="default" className={classes.margin}>
                        Esqueceu a senha?
                      </DefaultButton>
                      <PrimaryButton href="#" variant="contained" size="large" color="primary" className={classes.margin}>
                        PRÓXIMO
                      </PrimaryButton>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
