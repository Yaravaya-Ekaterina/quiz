import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { RootState } from '../redux/root-reducer'

import { MAIN } from '../constants/routs.constants'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { countries } = useSelector((state: RootState) => state.data)

  return (
    <Route
      {...rest}
      render={props =>
        !countries.length ? <Redirect to={MAIN} /> : <Component {...props} />
      }
    />
  )
}

export default PrivateRoute
