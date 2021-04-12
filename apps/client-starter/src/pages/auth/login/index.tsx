import React from 'react';
import { RememberMyLoginInput } from './remember-me';
import { SocialOptions } from './social-options';

const INCLUDE_SOCIAL_PROVIDERS = false;

interface LoginReducerState extends EmailPasswordLogin { }

interface EmailPasswordLogin {
  email: string
  password: string
}

enum LoginReducerActions {
  UPDATE_EMAIL = 'UPDATE_EMAIL',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD'
}

const loginReducerMap = (state: LoginReducerState, action: { type: LoginReducerActions, payload: any }): Record<LoginReducerActions, LoginReducerState> => ({
  [LoginReducerActions.UPDATE_EMAIL]: Object.assign({}, state, { email: action.payload }),
  [LoginReducerActions.UPDATE_PASSWORD]: Object.assign({}, state, { password: action.payload }),
})

function loginReducer(state: LoginReducerState, action: { type: LoginReducerActions, payload: any }) {
  return loginReducerMap(state, action)[action.type]
}

export function LoginPage(props) {
  const [state, dispatch] = React.useReducer(loginReducer, { email: '', password: '' })
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w">
              New to the site?{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create a new account
              </a>
            </p>
          </div>

          <div className="mt-8">
            {INCLUDE_SOCIAL_PROVIDERS && <SocialOptions />}
            <div className="mt-6">
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault()
                  const myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");

                  const raw = JSON.stringify({
                    "email": "demo@test.com",
                    "password": "password"
                  });

                  const requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };

                  fetch(`http://localhost:5000/api/auth/login`, requestOptions as any)
                }}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={state.email}
                      onChange={e => dispatch({ type: LoginReducerActions.UPDATE_EMAIL, payload: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={state.password}
                      onChange={e => dispatch({ type: LoginReducerActions.UPDATE_PASSWORD, payload: e.target.value })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                {/* <RememberMyLoginInput /> */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixqx=jAQaW8A290&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
