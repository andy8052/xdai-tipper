import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import Portis from '@portis/web3';
import Web3 from 'web3';
const portis = new Portis('55b40523-a87a-457d-9291-ea8e032c5ee8', 'xdai');
const web3 = new Web3(portis.provider);

const styles = {
  card: {
    paddingTop: 15,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function Manage(props) {
  const { classes } = props;
  const [address, setAddress] = useState('');

  portis.onLogin((walletAddress, email) => {
    setAddress(walletAddress)
    console.log(walletAddress);
  });
  portis.showPortis() 

  return address === '' ? (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Login with portis
          </Typography>
          <Typography component="p">
            After login we will manage your tipping page
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  ) : (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Your account is all set up for:
          </Typography>
          <Typography component="p">
            {address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={"/tips/" + address}>View Your Tip Page!</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

Manage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Manage);
