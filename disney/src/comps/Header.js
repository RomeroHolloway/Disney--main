import {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState} from '../features/userSlice.js'
import {auth,provider} from '../firebase.js'



const Header = (props) => {

const dispatch = useDispatch();
const history = useHistory();
const userName = useSelector(selectUserName);
const userPhoto = useSelector(selectUserPhoto);

useEffect(() => {
  auth.onAuthStateChanged(async(user) =>{
    if(!user) {
      setUser(user)
      history.push('/home')
    }

});
}, [userName]);



const handleAuth = () => {
  if(!userName) {

  auth
  .signInWithPopup(provider)
  .then((result) => {
      setUser(result.user);
  }).catch((error) => {
    alert(error.message);

  });


} else if (userName) {
  auth
  .signOut()
  .then(() => {
    dispatch(setSignOutState());
    history.push("/");

  })
  .catch((err) => alert(err.message));
}
};

const setUser = (user) => {
  dispatch(
    setUserLoginDetails({
      name:user.displayName,
      email:user.email,
      photo: user.photoURL,



    })




  )
}






  return (

  <Wrapper >

<DisneyLogo>


<img src="/images-20210504T142301Z-001/logo.svg"/>




</DisneyLogo>

{!userName ?(
<Login onClick ={handleAuth}>Login</Login>

):(


<>


<DisneyMenu>
<a href="/home">
  <img src='\images-20210504T142301Z-001\home-icon.svg' alt="Home"/>



  <span>HOME</span>
  </a>

  <a href="./Pages/Home.js">
    <img src='\images-20210504T142301Z-001\search-icon.svg' alt="Home"/>



    <span>SEARCH</span>
    </a>

    <a href="/home">
      <img src='\images-20210504T142301Z-001\watchlist-icon.svg' alt="Home"/>



      <span>WATCHLIST</span>
      </a>

      <a href="/home">
        <img src='\images-20210504T142301Z-001\original-icon.svg' alt="Home"/>



        <span>Originals</span>
        </a>

        <a href="/home">
          <img src='\images-20210504T142301Z-001\movie-icon.svg' alt="Home"/>



          <span>MOVIE</span>
          </a>

          <a href="/home">
            <img src='\images-20210504T142301Z-001\series-icon.svg' alt="Home"/>



            <span>SERIES</span>
            </a>








</DisneyMenu>

<LogOut>
<UserIMG src={userPhoto} alt={userName} />
<DropDownMenu>

<span onclick={handleAuth}>Log Out</span>

</DropDownMenu>


</LogOut>

</>
)}






  </Wrapper>




  )
};

export default Header

const Wrapper =styled.div`
position:fixed;
top:0;
left:0;
right:0;
background-color:transparent;
display:flex;
justify-content:space-between;
align-items:center;
padding: 0 36px;
margin-top:6px;
letter-spacing:16px;
z-index:3;






`

const DisneyLogo =styled.div`
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
font-size:0;
display:inline-block;


img {
  display:block;
  width:100%;
  transition: transform .2s;

  :hover {
    ms-transform: scale(1.3); /* IE 9 */
    -webkit-transform: scale(1.3); /* Safari 3-8 */
    transform: scale(1.3);
  border: 0.5px solid transparent ;
  border-radius:10px;

}







`

const DisneyMenu =styled.div`
align-items:center;
display:flex;
flex-flow: row nowrap;
justify-content:flex-end;
position:relative;
height:100%;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left: 2px;


/*@media (max-width:768px) {

display:none;*/




img{
  height:18px;
  min-width:20px;
  width:20px;
  z-index:auto;
  margin-right: 0.5px;


}


  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: flex;
    padding: 15px 1px;
    position: relative;
    margin:5px 22px;
    font-weight: bold;



  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }
  @media screen and (max-height: 300px) {

  }



  }
}

`;


const Login =styled.a`
background-color: rgba(0,0,0,0);
padding:8px 16px ;
text-transform:uppercase;
letter-spacing:1.5px;
border:1px solid white;
border-radius:4px;
fontsize:20px;
transition: all .2s ease 0s;
cursor:pointer;


:hover {
  background-color:white;
  color:black;

}


`

const UserIMG = styled.img`
height:100%;


`

const DropDownMenu = styled.div`
top:48px;
right: 0px;
background: rgb(19, 19 ,19);
border: 1px solid rgba(151, 151, 151, 0.3)
border-radius:6px;
box-shadow: rgba(0 0 0/ 50%) 0px 0px 18px 0px;
padding:10px;
font-size:14px;
letter-spacing: 3px;
width: 100px;
opacity:0;



`

const LogOut = styled.div`
position: relative;
height:48px;
width: 48px;
dsiplay:flex;
cursor:pointer;
align-items:center;
justify-content:center;

${UserIMG} {
  border-radius:50%;
  width:100%;
  height:100%;
}

&:hover {
  ${DropDownMenu}  {
    opacity: 1;
    transition-duration:1s;


  }

}


`
