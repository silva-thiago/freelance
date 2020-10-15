import React from 'react'
import clsx from 'clsx'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
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

const ForgotPassword = () => {
  const classes = useStyles()

  return (
    <>
      <div className='wrapper wrapper-full-page'>
        {/* you can change the color of the filter page using: filter-color='blue | purple | green | orange | red | rose' */}
        <div className='page-header login-page header-filter bg-recovery-image' filter-color='black'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-8 col-sm-8 mx-auto'>
                <form className={classes.root + 'form'}>
                  <div className='card card-login card-hidden'>
                    <div className='card-header card-header-blue text-center'>
                      <img src={logo} className='logotype' alt='Logo da Solumedi' />
                    </div>
                    <div className='card-body'>
                      <h3 className='card-description text-center'>Recuperação de conta</h3>
                      <p className='card-description text-center'>Digite seu e-mail para recuperar a senha</p>
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
                    </div>
                    <div className='card-footer justify-content-center'>
                      <DefaultButton href="#" size="small" color="default" className={classes.margin}>
                        Fazer login?
                      </DefaultButton>
                      <PrimaryButton href="#" variant="contained" size="large" color="primary" className={classes.margin}>
                        ENVIAR
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

export default ForgotPassword
