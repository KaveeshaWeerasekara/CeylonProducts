import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:"center",
    allignItems:"center",
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: '#262524',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between !important',
  },
  
  oneCard:{
    width:"25% ",
    justifyContent:"center",
  },

  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  image:{
    width: "100%",
    height:"100%"
   
    
    
  },

  product:{
    backgroundColor:"black !important",
    backgroundSize:"auto",
    backgroundImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhealthy-ingredients-spices-rustic-murble-background_141291-2161.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fspices&tbnid=A5_L1LdPmQPnBM&vet=12ahUKEwj4tcrrlZz4AhXqi9gFHWUDA78QMyhnegUIARDfAQ..i&docid=LIgk6Il6q0ArWM&w=2000&h=1333&q=images%20of%20Spices&ved=2ahUKEwj4tcrrlZz4AhXqi9gFHWUDA78QMyhnegUIARDfAQ",
  },
  price:{
    color:"00ff00",
  },
  myDiv:
  {
    height: '130px',
    width: '200px',
    backgroundColor:"black",
  },
  myDiv2:
  {
    height:'120px',
    width:'100%',
    backgroundColor:'#c96838',
    justifyContent:'center',
    alignItems: 'center',

  },
  myDiv3:
  {
    height:'40px',
    width:'100%',
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems: 'center',

  },
  titleColor:{
    color:'white'
  },
  title2:{
    justifyContent:'space-between',
  
    allignItems:"center !important",
  },

  button:{
    color:"red !important",
    backgroundColor:"red !important",
  }


  
});
