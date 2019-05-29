import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Components
import Table from './Table'

const styles = {
    card: {
        maxWidth: 345,
        borderRadius: 20,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        padding: 20
    },
    media: {
        height: 300,
        width: 300
    },
};

function MediaCard(props) {
    const { classes } = props;
    return (

        <Router>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={props.assets}
                            title={props.type}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.type}
                            </Typography>
                            <Typography component="p">
                                CPU: {props.cpu}
                            </Typography>
                            <Typography component="p">
                                RAM: {props.ram}
                            </Typography>
                            <Typography component="p">
                                HD: {props.ssd} + {props.hdd}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <Link to="/">Specs</Link>
                            
                        </Button>
                        <Button size="small" color="primary">
                            Backup History
                    </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Router>
    );
}


MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);