import { Dimensions} from "react-native";


const dimension=Dimensions.get("window")

export const styleCard= {
     display:'flex',
     width:dimension.width/2.5, 
     height:dimension.height/2.5,
     justifyContent:'center',
     backgroundColor:'#002E40',
     backfaceVisibility:'hidden',
     margin:10,
     borderRadius:10

}


export const styleCardFront={
   ...styleCard,
  backgroundColor:'white',
  position:'absolute' 

}


export const styleTextCardBack={
   fontSize:12,
   color:'white',
   textAlign:'center',
   fontStyle:'italic'
}

export const styleTextCardFront={
   fontSize:30,
   color:'red',
   textAlign:'center'
}
