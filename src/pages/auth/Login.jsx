import React from 'react'

import logo from '../../img/logo.png'

const Login = () => {
  return (
    <>
      <div className='wrapper wrapper-full-page'>
        {/* you can change the color of the filter page using: filter-color='blue | purple | green | orange | red | rose' */}
        <div className='page-header login-page header-filter bg-image' filter-color='black'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-8 mx-auto'>
                <form className='form' method='' action=''>
                  <div className='card card-login card-hidden'>
                    <div className='card-header card-header-blue text-center'>
                      <img src={logo} className='logotype' alt='Logo da Solumedi' />
                    </div>
                    <div className='card-body'>
                      <p className='card-description text-center'>Insira seus dados para entrar</p>
                      <span className='bmd-form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>
                              <i className='material-icons'>email</i>
                            </span>
                          </div>
                          <input type='email' className='form-control' placeholder='Digite seu@email.com' />
                        </div>
                      </span>
                      <span className='bmd-form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>
                              <i className='material-icons'>lock_outline</i>
                            </span>
                          </div>
                          <input type='password' className='form-control' placeholder='Digite sua senha' />
                        </div>
                      </span>
                    </div>
                    <div className='card-footer justify-content-center btn-auth-group'>
                      <button className='btn btn-transparent btn-link btn-lg'>Esqueceu a senha?</button>
                      <button className='btn btn-blue btn-link btn-lg'><strong>ENTRAR</strong></button>
                      <button className='btn btn-transparent btn-link btn-lg'>Não tem conta?</button>
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
