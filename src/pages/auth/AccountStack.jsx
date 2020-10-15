import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Autocomplete from '@material-ui/lab/Autocomplete'
import fetch from 'cross-fetch'
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
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
}))

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

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

const AccountStack = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const loading = open && options.length === 0

  useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000')
      await sleep(1e3) // For demo purposes.
      const countries = await response.json()

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]))
      }
    })()

    return () => {
      active = false
    }
  }, [loading])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <>
      <div className='wrapper wrapper-full-page'>
        {/* you can change the color of the filter page using: filter-color='blue | purple | green | orange | red | rose' */}
        <div className='page-header login-page header-filter bg-account-image' filter-color='black'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-8 col-sm-8 mx-auto'>
                <form className={classes.root + 'form'}>
                  <div className='card card-login card-hidden'>
                    <div className='card-header card-header-blue text-center'>
                      <img src={logo} className='logotype' alt='Logo da Solumedi' />
                    </div>
                    <div className='card-body'>
                      <h3 className='card-description text-center'>Escolher conta</h3>
                      <p className='card-description text-center'>Defina a conta para o login</p>
                      <span className='bmd-form-group'>
                        <div className='input-group'>
                          <FormControl className={clsx(classes.margin, classes.textField)}>
                            {/* https://www.registers.service.gov.uk/registers/country/use-the-api */}
                            <Autocomplete
                              id="asynchronous"
                              open={open}
                              onOpen={() => {
                                setOpen(true)
                              }}
                              onClose={() => {
                                setOpen(false)
                              }}
                              getOptionSelected={(option, value) => option.name === value.name}
                              getOptionLabel={(option) => option.name}
                              options={options}
                              loading={loading}
                              renderInput={(params) => (
                                <TextField
                                  required
                                  {...params}
                                  label="Conta"
                                  variant="standard"
                                  InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                      <React.Fragment>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                      </React.Fragment>
                                    ),
                                  }}
                                />
                              )}
                            />
                          </FormControl>
                        </div>
                      </span>
                    </div>
                    <div className='card-footer justify-content-center'>
                      <PrimaryButton href="#" variant="contained" size="large" color="primary" className={classes.margin}>
                        ENTRAR
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

export default AccountStack
