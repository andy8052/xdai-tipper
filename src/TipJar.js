import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const QRCode = require('qrcode.react');

const styles = {
  card: {
    paddingTop: 15,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function TipJar(props) {
  const { classes } = props;
  let address = "0x9E9778231E38Ec2473f9ADDcadFB81300d5256CD"
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <QRCode value={address} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography component="p">
            Scan this QR code from <a href="xdai.io">xdai.io</a> to tip them!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

TipJar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TipJar);
