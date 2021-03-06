"use strict";

window.Router = window.ReactRouter.Router;
window.Route = window.ReactRouter.Route;
window.Link = window.ReactRouter.Link;
window.browserHistory = window.ReactRouter.browserHistory;
window.IndexRoute = window.ReactRouter.IndexRoute;

ReactDOM.render(React.createElement(
  Router,
  { history: browserHistory },
  React.createElement(
    Route,
    { path: "/", component: Home },
    React.createElement(IndexRoute, { component: App }),
    React.createElement(Route, { path: "login", component: Login }),
    React.createElement(Route, { path: "signup", component: Signup }),
    React.createElement(Route, { path: "progress", component: Progress })
  ),
  React.createElement(Route, { path: "*", component: NoMatch })
), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxNQUFQLEdBQWdCLE9BQU8sV0FBUCxDQUFtQixNQUFuQztBQUNBLE9BQU8sS0FBUCxHQUFlLE9BQU8sV0FBUCxDQUFtQixLQUFsQztBQUNBLE9BQU8sSUFBUCxHQUFjLE9BQU8sV0FBUCxDQUFtQixJQUFqQztBQUNBLE9BQU8sY0FBUCxHQUF3QixPQUFPLFdBQVAsQ0FBbUIsY0FBM0M7QUFDQSxPQUFPLFVBQVAsR0FBb0IsT0FBTyxXQUFQLENBQW1CLFVBQXZDOztBQUdBLFNBQVMsTUFBVCxDQUNFO0FBQUMsUUFBRDtBQUFBLElBQVEsU0FBUyxjQUFqQjtBQUNFO0FBQUMsU0FBRDtBQUFBLE1BQU8sTUFBSyxHQUFaLEVBQWdCLFdBQVcsSUFBM0I7QUFDRSx3QkFBQyxVQUFELElBQVksV0FBVyxHQUF2QixHQURGO0FBRUUsd0JBQUMsS0FBRCxJQUFPLE1BQUssT0FBWixFQUFvQixXQUFXLEtBQS9CLEdBRkY7QUFHRSx3QkFBQyxLQUFELElBQU8sTUFBSyxRQUFaLEVBQXFCLFdBQVcsTUFBaEMsR0FIRjtBQUlFLHdCQUFDLEtBQUQsSUFBTyxNQUFLLFVBQVosRUFBdUIsV0FBVyxRQUFsQztBQUpGLEdBREY7QUFPRSxzQkFBQyxLQUFELElBQU8sTUFBSyxHQUFaLEVBQWdCLFdBQVcsT0FBM0I7QUFQRixDQURGLEVBVUcsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBVkgiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuUm91dGVyID0gd2luZG93LlJlYWN0Um91dGVyLlJvdXRlcjtcbndpbmRvdy5Sb3V0ZSA9IHdpbmRvdy5SZWFjdFJvdXRlci5Sb3V0ZTtcbndpbmRvdy5MaW5rID0gd2luZG93LlJlYWN0Um91dGVyLkxpbms7XG53aW5kb3cuYnJvd3Nlckhpc3RvcnkgPSB3aW5kb3cuUmVhY3RSb3V0ZXIuYnJvd3Nlckhpc3Rvcnk7XG53aW5kb3cuSW5kZXhSb3V0ZSA9IHdpbmRvdy5SZWFjdFJvdXRlci5JbmRleFJvdXRlO1xuXG5cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0FwcH0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiIGNvbXBvbmVudD17TG9naW59Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwic2lnbnVwXCIgY29tcG9uZW50PXtTaWdudXB9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwicHJvZ3Jlc3NcIiBjb21wb25lbnQ9e1Byb2dyZXNzfS8+XG4gICAgPC9Sb3V0ZT5cbiAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vTWF0Y2h9Lz5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==