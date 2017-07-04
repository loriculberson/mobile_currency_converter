import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container:{
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,

  },
  text: {
    fontWeight: '300',
    paddingVertical: 20, 
    fontSize: 20,
    color: '$white',
  },

});