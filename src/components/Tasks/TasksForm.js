// import React from 'react';
// import Axios from 'axios';



// class TaskForm extends React.Component {

// state = {
//     count: 0,
//     value: null,
//     task: { limitDate: new Date() },
//     types: []
// }

// componentDidMount() {
//     //Se obtienen los tipos del backend, para mostrarlos en el select
//     Axios.get('/ws/rest/types')
//     .then(res => {
//         const types = res.data.map(type => ({value: type.id, name: type.name}))
//         this.setState({ types, originalTypes: res.data});
//     })
//     .catch(err => {
//         console.log(err);
//     });
//     const {match} = this.props;
//     //Si es una edicion, entonces se obtienen los datos de la tarea del backend
//     if (match.params.taskId) {
//         axios.get(`/ws/rest/tasks/${match.params.taskId}`)
//         .then(res => {
//             let task = res.data;
//             task.type = res.data.type ? res.data.type.id : null;
//             this.setState({ task });
//         })
//         .catch( err => {
//             console.log(err);
//         });
//     }
// }



// render() {
//     const {match} = this.props;
//     return(
// <>
// <h2>{match.params.taskId ? 'Editar Tarea' : 'Nueva Tarea' } </h2>

// <TextField
//         id="standard-name"
//         label="Name"
//         className={classes.textField}
//         value={values.name}
//         onChange={handleChange('name')}
//         margin="normal"
//       />
//     <TextField
//         id="standard-description"
//         label="Descripcion"
//         className={classes.textField}
//         value={values.name}
//         onChange={handleChange('description')}
//         margin="normal"
//       />

//       <Button variant="contained">
//           Default
//       </Button>
//         Guardar
//       <Button variant="contained" color="primary">
//       </Button>

// </>
//     )
// }

// }
// export default TaskForm;