import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import axios from 'axios';
import TableHead from '@material-ui/core/TableHead';

const actionStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary;
        marginLeft: theme.spacing.unit * 2.5,
    },
});

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page -1);
    };

    handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

    handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;
return (
    <div className={classes.root}>
    <IconButton
        onClick={this.handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="First Page"
    >
      {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
    <IconButton/>

    <IconButton
        onClick={this.handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="Previous Page"
    >
      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
    <IconButton/>




)

}

}