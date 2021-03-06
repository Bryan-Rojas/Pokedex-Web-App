import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="col-4">
    <Card className={classes.card}>
      <CardContent>
        Pokemon Name
        (Pokemon Image)
      </CardContent>
      <CardActions>
        <Button size="small">Pokemon's Profile</Button>
      </CardActions>
    </Card>
    <br/>
    </div>
  );
}

export default SimpleCard;