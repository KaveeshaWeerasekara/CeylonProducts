import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
  paper: {
    padding: theme.spacing(2),
    
    
    backgroundSize: "cover",
    
 
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    opacity: '100% !important',
  },
  fileInput: {
    width: '100%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },

  formControl: {
    minWidth:'100px',
  },
  textField: {
    height:'30'
  },
  myDiv:
  {
    height: '1px',
    width: '100%',
    backgroundColor:"white",
    opacity: '70%'
  },
  image1:{
    minWidth: "100%",
    minHeight:"100%"

   
    
    
  },
}));