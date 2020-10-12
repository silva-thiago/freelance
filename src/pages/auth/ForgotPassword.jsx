import React from 'react'

import logo from '../../img/logo.png'

const Login = () => {
  return (
    <>
      <div className='wrapper wrapper-full-page'>
        {/* you can change the color of the filter page using: filter-color='blue | purple | green | orange | red | rose' */}
        <div className='page-header login-page header-filter bg-recovery-image' filter-color='black'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-8 mx-auto'>
                <form className='form' method='' action=''>
                  <div className='card card-login card-hidden'>
                    <div className='card-header card-header-blue text-center'>
                      <img src={logo} className='logotype' alt='Logo da Solumedi' />
                    </div>
                    <div className='card-body'>
                      <h3 className='card-description text-center'>Recuperação de conta</h3>
                      <p className='card-description text-center'>Digite seu e-mail para recuperar a senha</p>
                      <span className='bmd-form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>
                              <i className='material-icons'>email</i>
                            </span>
                          </div>
                          <input type='email' className='form-control' placeholder='E-mail' />
                        </div>
                      </span>
                    </div>
                    <div className='card-footer justify-content-center btn-auth-group'>
                      <button className='btn btn-transparent btn-link btn-lg'>Fazer login?</button>
                      <button className='btn btn-blue btn-link btn-lg'><strong>ENVIAR</strong></button>
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
