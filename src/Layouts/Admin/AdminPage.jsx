import React, { Component } from 'react';
import AdminNavbar from '../../Component/Navbar/AdminNavbar';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import PerfectScrollbar from 'perfect-scrollbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Footer from '../../Component/Footer/Footer';

let ps;

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpened: document.documentElement.className.indexOf('nav-open') !== -1,
      backgroundColor: 'blue',
      userInfo: {}
    };
  }

  //style scroll-bar
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
      document.documentElement.className += ' perfect-scrollbar-off';
      document.documentElement.classList.remove('perfect-scrollbar-on');
    }
  }

  componentDidUpdate(e) {
    if (e.history.action === 'PUSH') {
      if (navigator.platform.indexOf('Win') > -1) {
        let tables = document.querySelectorAll('.table-responsive');
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }

  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (this.props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };

  //get facebook user data in localstorage
  getUserData = () => {
    let obj = JSON.parse(localStorage.getItem('userInfo'));
    console.log(this.state.userInfo);
    return obj;
  };

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          bgColor={this.state.backgroundColor}
          routes={routes}
          toggleSidebar={this.toggleSidebar}
        />

        {/*Start Navbar*/}
        <div className="main-panel" ref="mainPanel" data={this.state.backgroundColor}>
          <AdminNavbar
            {...this.props}
            getUserData={this.getUserData}
            toggleSidebar={this.toggleSidebar}
            sidebarOpened={this.state.sidebarOpened}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Footer />
        </div>
        {/*End Navbar*/}
      </div>
    );
  }
}

export default AdminPage;
