import React, { Component } from 'react'
import { Link } from 'gatsby';
import sizeMe  from 'react-sizeme';
import { connect } from "react-redux";
import { getHeaderHeightState } from '../../store/selectors';
import { updateHeaderHeight } from '../../actions/layout';

class Header extends Component {
  componentDidUpdate = () => {
    this.props.updateHeaderHeight(this.props.size.height)
  }

  render() {
    const { siteTitle } = this.props
    return(
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: 'rebeccapurple',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1360,
            padding: '0.8rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { sidebar: getHeaderHeightState(state) }
}

const mapDispatchToProps = {
  updateHeaderHeight
}

export default connect(mapStateToProps, mapDispatchToProps) (sizeMe({monitorHeight: true})(Header))
