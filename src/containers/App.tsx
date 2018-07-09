import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Loadable from 'react-loadable'
import { hot } from 'react-hot-loader'

const Home = Loadable({
  loader: () => import('components/Home'),
  loading: () => <div>loading...</div>
})

const About = Loadable({
  loader: () => import('components/About'),
  loading: () => <div>loading...</div>
})

const App: React.SFC<{}> = () => {
  return (
    <>
      <Router>
        <div>
          <div>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route />
        </div>
      </Router>
    </>
  )
}

export default hot(module)(App)
