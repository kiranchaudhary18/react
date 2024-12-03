
import './style.css'
import  Img from './Img/In@3x.png'
import Img1 from './Img/bed.image.png'
import Img2 from './Img/car.image.png'
import Img3 from './Img/406310376.png'

import Img4 from './Img/banner_default_720.png'

import Img5 from './Img/372051085.png'
import Img6 from './Img/second.img.png'
import Img7 from './Img/third.img.png'
import Img8 from './Img/four.img.png'
import Img9 from './Img/five.img.png'
import Img10 from './Img/six.img.png'
import Img11 from './Img/seven.img.png'
import Img12 from './Img/eight.img.png'
import Img13 from './Img/nine.img.png'
import Img14 from './Img/nine.img.png'

import Img15 from './Img/ten.img.png'
import Img16 from './Img/eleven.img.png'
import Img17 from './Img/twelve.img.png'
import Img18 from './Img/thirteen.img.png'
import Img19 from './Img/fourteen.img.png'
import Img20 from './Img/fifteen.img.png'
import Img21 from './Img/sixteen.img.png'
import Img22 from './Img/seventeen.img.png'
import Img23 from './Img/eightteen.img.png'
import Img24 from './Img/nineteen.img.png'
import Img25 from './Img/twenty.img.png'
import Img26 from './Img/twentyone.img.png'
import Img27 from './Img/twentytwo.img.png'
import Img28 from './Img/twentythree.img.png'

import Img29 from './Img/s1.img.png'
import Img30 from './Img/s2.img.png'
import Img31 from './Img/s3.img.png'
import Img32 from './Img/s4.img.png'
import Img33 from './Img/s5,img.png'
import Img34 from './Img/s6.img.png'
import Img35 from './Img/s7.img.png'
import Img36 from './Img/s8.img.png'
import Img37 from './Img/s9.img.png'

import Img38 from './Img/t1.img.png'
import Img39 from './Img/t2.img.png'
import Img40 from './Img/t3.img.png'
import Img41 from './Img/t4.img.png'
import Img42 from './Img/t5.img.png'
import Img43 from './Img/t6.img.png'
import Img44 from './Img/t7.img.png'
import Img45 from './Img/t9.img.png'
import Img46 from './Img/t10.img.png'
import Img47 from './Img/t11.img.png'
import Img48 from './Img/t12.img.png'
import Img49 from './Img/GeniusGenericGiftBox.png'


function Homepage(){

    return (
        <> <div className="nav">
        <div className="par1"> <p><b>Booking.com</b></p>
         </div>
 
         <div className="nav1">
             <p style={{color:'white'}}><b>INR</b></p>
 
             <img style={{marginTop: '2vh',borderRadius: '50%',width: '2vw',height: '4vh'}} src={Img} />
 
             <p style={{color:'white'}}><b>List your property</b></p>
             </div>
 
             <div className="box1">
                 <p style={{fontSize: '1.2em',paddingTop: '1.1vh',textAlign: 'center',color:'rgb(17, 17, 169)'}}>Register</p>
             </div>
             <div className="box2">
                 <p style={{fontSize: '1.2em',paddingTop: '1.1vh',textAlign: 'center',color:'rgb(17, 17, 169)'}} id="button">Sign in</p>
             </div>
 
             {/* <script>
               const button=document.getElementById("button")
 
               button.addEventListener("click",()=>{
                 // alert("buuton clicked");
                 window.open('http://127.0.0.1:3002/form.html')
               });
             </script> */}
 
             <div className="flex">
             <div className="nav2">
                 <img style={{width: '1.5vw',paddingTop: '1vh',paddingLeft: '.5vw'}} src={Img1}></img>
                 <p style={{marginLeft:'2.4vw',marginTop: '-3.2vh',color:'white',width: '5vw'}}>Stays</p>
             </div>
 
             <div className="nav3">
                 <img style={{width: '1.5vw',marginTop: '4.3vh'}} src={Img2}></img>
                 <p style={{color:'white',marginTop: '-3.5vh',marginLeft: '2vw'}}>Car rentals</p>
             </div>
 
         </div>
     </div>

     
    <div className="middle">
        <img style={{width: '99vw'}} src={Img3}></img>

        <div className="text1">Offer ends in 2 days</div>

        <h1 className="text2">
            <b>Save up to 35% with <br/> Black Friday Deals</b>
        </h1>

        <p className="text3">
            Set your travel plans in motion.Book Dec 4,2024 <br/>
            for stays until the end of 2025
        </p>
        

       
        
    </div>
    <div className="box4">
        </div>
    <p style={{color:'rgb(83, 78, 78)',marginLeft: '14.5vw',marginTop: '-3vh'}}>I`m traveling for work</p>

    <div className="box5">
        <div>
    <p style={{fontSize: '1.8em',paddingLeft: '1.2vw',marginTop:'2vh'}}><b>Book and save 5% on Rentalcars.com in vouchers</b></p> 
        <p style={{color:'blue',paddingLeft: '1.2vw',marginTop: '-2vh',fontSize: '1.2em'}}>See promotion details</p>
</div>
        <div>
        <img style={{width: '26.9vw', marginLeft: '11vw',height:'15vh'}} src={Img4}></img>
        </div>
    </div>

    <h1 style={{marginLeft: '12.5vw',marginTop: '11vh'}}>Offers</h1>
    <p style={{color:'rgb(101, 92, 92)',marginLeft: '12.5vw',marginTop: '-1.5vh',fontSize: '1.2em'}}>Promotions, deals, and special offers for you</p>

    <div className="box6">
          <div>
        <h2 style={{fontSize: '1.8em',paddingLeft: '1.2vw',marginTop:'4.5vh'}}>Go for a good time, not a long time</h2>
         <p style={{fontSize: '1.1em',paddingLeft: '1.2vw',marginTop: '-2vh'}}>Finish your year with a mini break. Save 15% more when you book and stay by January 7, 2025.</p>
        
        <button style={{backgroundColor: 'rgb(30, 30, 144)',color:'white',marginLeft: '1.2vw',padding: '.7vw',borderRadius: '.5vw',fontSize: '1rem'}}>Find Late Escape Deals </button>

        </div>
        <div>
            <img style={{width: '9vw',marginLeft: '23vw',marginTop: '2.2vh'}}src={Img5}></img>
        </div>


    </div>

    <div className=" circle">

    </div>
    <div className="circle1">

    </div>

    <h1 style={{marginLeft: '12vw',marginTop: '8vh'}}>
        <b>Browse by property type</b>
    </h1>
    <div className="scroll">

    <div className="image">

        <img style={{width: '22vw',borderRadius: '.5vw'}} src={Img6}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img7}></img>
        
        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img8}></img>
        
        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img9}></img>
        
        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img10}></img>
        
        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img11}></img>
        
        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img12}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img13}></img>
        
        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img14}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img15}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img16}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img17}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img18}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img19}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img20}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img21}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img22}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img23}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img24}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img25}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img26}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img27}></img>

        <img style={{width: '29vw',borderRadius: '.5vw'}} src={Img28}></img>


        
        
    </div>

    <div className="image-text">
        <p><b>Hotels</b></p>
        <p><b>Apartment</b></p>

        <p style={{marginLeft:'-5vh'}}><b>Resort</b></p>

        <p style={{marginLeft: '-1vh'}}><b>Villas</b></p>

        <p style={{marginLeft: 'vh'}}><b>Cabins</b></p>

        <p style={{marginLeft: '-1.5vh'}}><b>Cottage</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Glamping Sites</b></p>

        <p style={{marginLeft: '-4.5vh'}}><b>Serviced apartment</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Vacation Homes</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Guest Houses</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Hostels</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Motels</b></p>

        <p style={{marginLeft: '-2vh'}}><b>B&Bs
        </b></p>

        <p style={{marginLeft: '-2vh'}}><b>Ryokans</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Riads</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Resort Villages</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Homestays</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Campgrounds</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Country Houses</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Farm stays</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Boats</b></p>

        <p style={{marginLeft: '-2vh'}}><b>luxury Tents</b></p>

        <p style={{marginLeft: '-2vh'}}><b>Self-Catering accommodations</b></p>

        
    </div>
    </div>

     <h1 style={{marginLeft:' 12vw'}}>Explore India</h1>
    <p style={{marginLeft: '12vw',marginTop: '-1.5vh',fontSize: '1.2em',color:'rgb(87, 85, 85)'}}>These popular destinations have a lot to offer</p>

    <div className="scrolls">
    <div className="images1">
        <img style={{borderRadius: '.5vw'}} src={Img29}></img>

        <img style={{borderRadius: '.5vw'}} src={Img30}></img>

        <img style={{borderRadius: '.5vw'}} src={Img31}></img>

        <img style={{borderRadius: '.5vw'}} src={Img32}></img>

        <img style={{borderRadius: '.5vw'}} src={Img33}></img>

        <img style={{borderRadius: '.5vw'}} src={Img34}></img>

        <img style={{borderRadius: '.5vw'}} src={Img35}></img>

        <img style={{borderRadius:'.5vw'}} src={Img36}></img>

        <img style={{borderRadius: '.5vw'}} src={Img37}></img>


        
    </div>

    <div className="images-text1">
        <p><b>Goa</b></p>

        <p><b>Ooty</b></p>

        <p style={{marginLeft:'-.5vw'}}><b>Mumbai</b></p>

        <p style={{marginLeft:'-2.5vw'}}><b>New Delhi</b></p>

        <p style={{marginLeft:'-3.4vw'}}><b>Bangalore</b></p>

        <p style={{marginLeft:'-3.4vw'}}><b>Munnar</b></p>

        <p style={{marginLeft:'-3.4vw'}}><b>Candolim</b></p>

        <p style={{marginLeft:'-3.4vw'}}><b>panaji</b></p>

        <p style={{marginLeft:'-3.4vw'}}><b>Coorg</b></p>
    </div>

    <div className="images-text2">
        <p style={{color:'rgb(90, 82, 82)'}}>5,251 properties</p>

        <p style={{color:'rgb(90, 82, 82)'}}>471 properties</p>

        <p style={{marginLeft:'1.3vw',color:'rgb(90, 82, 82)'}}>1,652 properties</p>

        <p style={{marginLeft:'.5vw',color:'rgb(90, 82, 82)'}}>2,919 properties</p>

        <p style={{marginLeft:'.5vw',color:'rgb(90, 82, 82)'}}>2,044 properties</p>

        <p style={{marginLeft:'.4vw',color:'rgb(90, 82, 82)'}}>512 properties</p>

        <p style={{marginLeft:'.4vw',color:'rgb(90, 82, 82)'}}>467 properties</p>

        <p style={{marginLeft:'.4vw',color:'rgb(90, 82, 82)'}}>148 properties</p>

        <p style={{marginLeft:'.4vw',color:'rgb(90, 82, 82)'}}>692 properties</p>
    </div>
    </div>

    <h1 style={{marginLeft: '12vw'}}>Travel more, spend less</h1>

    <div className="sign">

        <div>
        <h2 style={{marginLeft: '1vw',marginTop: '4vh'}}>Sign in, save money</h2>

        <p style={{marginLeft: '1vw',fontSize: '1.2em'}}>Save 10% or more at participating properties - just look for the blue Genius label</p>

        <button style={{backgroundColor: 'blue',color:'white',marginLeft: '1vw',padding: '.7vw',borderRadius: '.5vw',margintop: '-2vh',fontsize: '1.2em'}}>Sign in</button>

        <p style={{color:'blue',marginLeft: '8vw',fontSize: '1.2em',marginTop: '-5vh'}}>Register</p>
        </div>

        <div className="s.img">
            <img style={{width: '8vw',marginLeft: '58vh',marginTop:'1.5vh'}} src={Img49}></img>
        </div>
    </div>

    <h1 style={{marginLeft: '12vw',marginTop: '7vh'}}>Black Friday Deals</h1>
    <p style={{marginLeft: '12vw',fontSize: '1.2em',color:'rgb(87, 85, 85)',marginTop: '-2vh'}}>Save on stays for 6 December - 8 December</p>


    <div className="images3">
        <img style={{width: '100vw',borderRadius: '.5vw',height: '35vh'}} src={Img38}></img>

        <img style={{width: '100vw',borderRadius: '.5vw',height:'35vh'}} src={Img39}></img>

        <img style={{width: '40vw',borderRadius: '.5vw',height:'35vh'}} src={Img40}></img>

        <img style={{width: '40vw',borderRadius: '.5vw',height:'35vh'}} src={Img41}></img>

        <img style={{width: '25vw',borderRadius: '.5vw',height:'35vh'}} src={Img42}></img>
        
        <img style={{width: '25vw',borderRadius: '.5vw;height:35vh'}} src={Img43}></img>

        <img style={{width: '25vw',borderRadius: '.5vw',height:'35vh'}} src={Img4}></img>

        <img style={{width: '25vw',borderRadius: '.5vw',height:'35vh'}} src={Img45}></img>

        <img style={{width: '25vw',borderRadius: '.5vw',height:'35vh'}} src={Img46}></img>

        <img style={{width: '25vw',borderradius: '.5vw',height:'35vh'}} src={Img47}></img>

        <img style={{width: '25vw',borderradius: '.5vw',height:'35vh'}} src={Img48}></img>

        {/* <img style={{width: '25vw',borderradius: '.5vw',height:'35vh'}}src={{Img49}}></img> */}
    </div>
   
   
           
        </>
      )

}

export default Homepage