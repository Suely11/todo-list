import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TablePagination from './components/Tasks/TasksList';
import AxiosTest from './components/Tasks/TasksListOld'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TaskForm from './components/Tasks/TasksForm';
import TaskList from './components/Tasks/TasksList';
//import Moment from 'react-moment';

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'none',
//   },
// }));

// function Tasks({ match }) {
//   return (
//     <>
//     <Route exact path={`${match.path}/new`} component={TaskForm} />
//     <Route 
//     exact
//     path={`${match.path}/edit/:taskId`}
//     component={TaskForm}
//     />
//     <Route exact path={`${match.path}/`} component={TaskList} />
//     </>
//   );
// }

function App() {
  // const classes = useStyles();
 return (
    <div className="App">
      <header className="App-header">
      <h2>ToDo-List</h2>
      </header>
    <Router>
      <div style={{marginLeft: 60, width: 1000 }}>
        <nav>
        <Button variant="outlined" color="primary"  >
        <Link to="/">Home</Link>
        </Button>
        <Button variant="outlined" color="primary"  >
        <Link to="/list/">List</Link>
        </Button>
        <Button variant="outlined" color="primary"  >
        <Link to="/about/">About</Link>
        </Button>
        </nav>   

        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} /> 
        <Route path="/about/" component={About} />
       
      </div>
    </Router>
    {/* <Tasks/> */}
    </div>
      );
}

  function Index() {
  return <h2>Home</h2>;
}

function List() {
  return <h2>List<TablePagination/></h2>;
}

function About() {
return <h2>About</h2>;
}

  export default App;



 


  
