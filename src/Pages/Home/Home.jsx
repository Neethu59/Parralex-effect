import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <>
    <div className='web'>
<nav class="navbar  navbar-default navbar-expand-lg navbar-light  fixed-top">
<div className="container">

<a class="navbar-brand" href="#"><img src="\assets\image-17.png"/></a>
  

  <div className="collapse navbar-collapse nav-links" id="navbarResponsive">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>


      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Blog
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Pages
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Contact</a>
      </li>
    </ul>
   
<ul class="navbar-nav justify-content-end">
<li class="nav-item ">
        <a class="nav-link" href="#">Search </a>
      </li>
  <li class="nav-item">
    <a class="nav-link" >Cart</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >Link</a>
  </li>
  
</ul>

  </div>
  <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>



</div>




  
</nav>
{/* <nav class="navbar navbar-default navbar-expand-lg navbar-light fixed-top">
  <div class="container bg-red">

    <a class="navbar-brand" href="#"><img src="\assets\image-17.png" alt="Logo"/></a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Shop
          </a>
          <div class="dropdown-menu" aria-labelledby="shopDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="blogDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Blog
          </a>
          <div class="dropdown-menu" aria-labelledby="blogDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Pages
          </a>
          <div class="dropdown-menu" aria-labelledby="pagesDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>

  </div>
</nav> */}



{/* <nav class="nav-bar">
	<div class="container">
		<input type="checkbox" id="drop-down-cbox"/>
		<label for="drop-down-cbox">
			<span></span>
			<span></span>
			<span></span>
		</label>

		<h1 class="site-logo">Homepage</h1>

		<ul class="main-nav small-caps">
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><span>List of Work</span>
				<ul>
					<li><a href="#">Codepen</a></li>
					<li><a href="">Behance</a></li>
					<li><a href="#">Github</a></li>
				</ul>
			</li>
			<li><a href="#">Contact</a></li>
		</ul>
		
	</div>
</nav> */}





{/* <div id="carouselWrapper"> */}



<div id="carouselWrapper">
  
    <div id="carouselExampleCaptions carouselWrapper" class="carousel slide" data-bs-ride="false">
    
   
  <div class="carousel-indicators">
  

        <div className='carosel-indicator-sub'>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  
            </div> 

    <div class="image-box p-1">
  <div class="row bg-white p-2" >
      <div class="col-xl-4 col-sm-6 col-12 pt-3">
       
         <div class="card cardStyle">
        <img src="\assets\image-6.jpg" class="card-img" alt="Image"/>
        <div class="overlay">
          <h6 className='w-50 mt-5   carosel-text'>Sunflower clock quarts hand</h6>
          <p  className="parastyle">DISCOVER NOW</p>
        </div>
      </div>

      </div>
      <div class="col-xl-4 col-sm-6 col-12 pt-3">
      <div class="card cardStyle">
        <img src="\assets\image-7.jpg" class="card-img" alt="Image"/>
        <div class="overlay">
          <h6  className='w-50 mt-5  carosel-text'>Chair kimi no issue project</h6>
          <p className="parastyle">DISCOVER NOW</p>
        </div>
      </div>


      </div>
  
      <div class="col-xl-4 col-sm-6 col-12 pt-3">
      <div class="card cardStyle">
        <img src="\assets\image-8.jpg" class="card-img" alt="Image"/>
        <div class="overlay">
          <h6  className='w-50 mt-5  carosel-text'>Sweeper and dustpan by hjjhjk</h6>
          <p className="parastyle">DISCOVER NOW</p>
        </div>
      </div>


        
      </div>
     

    </div>


        </div> 
    </div>
  <div class="carousel-inner caroselinner">


    
    <div class="carousel-item active">
        
      <img src="\assets\image-39.jpg" class="d-block w-100 carimg" alt="..."/>
      <div class="carousel-caption text-start justify-content-center align-items-center">
        
        <div className='row caroselcard'>
        <h2 class="text-dark carosel-text1">Think diffrent & </h2>
        <h2 class="text-dark carosel-text1">Do it otherwise</h2>
        <p className='p-1 carosel-text2'style={{color:"grey"}}>Some representative placeholder content for the third slide ghhhgh gfgfhg.</p>
        <button class="caroset-button1">DISCOVER NOW</button>
        </div>
        
       
         </div>
    </div>
    <div class="carousel-item">
      <img src="\assets\image-38.jpg" class="d-block w-100 carimg" alt="..."/>
      <div class="carousel-caption text-start justify-content-center align-items-center">
        <div className='row caroselcard'>
        <h2 class="text-dark  carosel-text1">Think diffrent & </h2>
        <h2 class="text-dark carosel-text1">Do it otherwise</h2>
        <p className='p-1 carosel-text2'style={{color:"grey"}}>Some representative placeholder content for the third slide ghhhgh gfgfhg.</p>
        <button class="caroset-button1 w-50">DISCOVER NOW</button>
        </div>
       
       
         </div>
    </div>
    <div class="carousel-item ">
      <img src="\assets\image-40.jpg" class="d-block w-100 carimg" alt="..."/>
      <div class="carousel-caption text-start justify-content-center align-items-center">
        <div className='row caroselcard' >
        <h2 class="text-dark carosel-text1">Think diffrent & </h2>
        <h2 class="text-dark carosel-text1">Do it otherwise</h2>
        <p className='p-1 carosel-text2'style={{color:"grey"}}>Some representative placeholder content for the third slide ghhhgh gfgfhg.</p>
        <button class="caroset-button1 w-50">DISCOVER NOW</button>
        </div>
       
        
         </div>
         
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



</div>
<div className='trproduct' >
<div class="container hrText" >

 <div className='row p-0'>
  <div className='col'>
    <hr className="hrcolor"/>
  </div>
  <div className='col-sm-6 text-center trendproduct' >Trending Products</div>
  <div className='col'>
    <hr className="hrcolor" />
  </div>
 </div> 
<div className='row'>
  <div className='col-12 '>
  <p className='justify-content-center align-items-center text-center parastyle'>gdhfgdjhdj hjfihirj hjfvjdfj knkjk kjhiiojoi</p>
  
  </div>
 
</div>
  




 
</div>


<div class="container card-container">
<div class="row ">
 
   <div class="col-12 col-md-3 col-lg-3"> 
        <div class="card cardStyle card-mobile">
          
       <img src="\assets\image-2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <p class="card-text parastyle">Wooden contsiner bowl</p>
    <p> $ 96 <span>hhbj</span></p>
   
  </div>


        </div>
      </div>


      <div class="col-12 col-md-3 col-lg-3">
      <div class="card cardStyle card-mobile">
          
          <img src="\assets\image-2.jpg" class="card-img-top" alt="..."/>
     <div class="card-body">
     <p class="card-text parastyle">Wooden contsiner bowl</p>
    <p> $ 96 <span>hhbj</span></p>
     </div>
   
   
           </div>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
      <div class="card cardStyle card-mobile">
          
          <img src="\assets\image-2.jpg" class="card-img-top" alt="..."/>
     <div class="card-body">
     <p class="card-text parastyle">Wooden contsiner bowl</p>
    <p> $ 96 <span>hhbj</span></p>
     </div>
   
   
           </div>
      </div>
     
      <div class="col-12 col-md-3 col-lg-3">
      <div class="card cardStyle card-mobile">
          
          <img src="\assets\image-2.jpg" class="card-img-top" alt="..."/>
     <div class="card-body">
     <p class="card-text parastyle">Wooden contsiner bowl</p>
    <p> $ 96 <span>hhbj</span></p>
     </div>
   
   
           </div>
      </div>
      
      </div>
      
      </div>
    
      <div class="container card-container">
<div class="row ">
 
   <div class="col-12 col-md-6 col-lg-3"> 
        <div class="card cardStyle card-mobile">
          
       <img src="\assets\image-2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <p class="card-text parastyle">Wooden contsiner bowl</p>
    <p> $ 96 <span>hhbj</span></p>
   
  </div>


        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
      <div class="card cardStyle card-mobile">
          
          <img src="\assets\image-2.jpg" class="card-img-top" alt="..."/>
     <div class="card-body">
     <p class="card-text parastyle">Wooden contsiner bowl</p>
    <p> $ 96 <span>hhbj</span></p>
     </div>
   
   
           </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
      <div class="card cardStyle card-mobile">
          
          <img src="\assets\image-2.jpg" class="card-img-top" alt="..."/>
     <div class="card-body">
     <p class="card-text parastyle">Wooden contsiner bowl</p>
    <p> $ 96 <span>hhbj</span></p>
     </div>
   
   
           </div>
      </div>
     
      <div class="col-12 col-md-6 col-lg-3">
      <div class="card cardStyle card-mobile">
          
          <img src="\assets\image-2.jpg" class="card-img-top" alt="..."/>
     <div class="card-body">
     <p class="card-text parastyle">Wooden contsiner bowl</p>
    <p> $ 96 <span>hhbj</span></p>
     </div>
   
   
           </div>
      </div>
      
      </div>
      
      </div>
    
      {/* <button class="caroset-button bg-white">DISCOVER NOW</button> */}

      <div class="text-center">
  <button class="caroset-button bg-white">DISCOVER NOW</button>
</div>
      

      <div class="row bg-white p-2" >
      <div class="col-xl-6 col-sm-6 col-12 pt-3">
       
         <div class="card cardStyle">
        <img src="\assets\image-4.jpg" class="card-img cardheight" alt="Image"/>
        <div class="overlay p-4">
          <h6 className='w-50 mt-2 tcardstyle  carosel-text-bottle'>Product essential</h6>
          <h5 className='carosel-text-bottle'>bottle with wooden cork</h5>
          <p className='parastyle mt-2'>bjhbkjnk</p>
          <p className='parastyle'>DISCOVER NOW</p>
        </div>
      </div>

      </div>
      <div class="col-xl-6 col-sm-6 col-12 pt-3">
      <div class="card cardStyle ">
        <img src="\assets\image-5.jpg" class="card-img cardheight" alt="Image"/>
        <div class="overlay p-4">
          <h6  className='w-50 mt-2 tcardstyle  carosel-text-bottle'>product future</h6>
          <h5 className='carosel-text-bottle'>bottle with wooden cork</h5>
          <p className='parastyle mt-2'>bjknkjnk</p>
          <p className='parastyle'>DISCOVER NOW</p>
        </div>
      </div>


      </div>
  
     
     

    </div>

    

    <div class="container hrText" >

 <div className='row p-0'>
  <div className='col'>
    <hr style={{color:"grey"}}/>
  </div>
  <div className='col-sm-6 text-center trendproduct' >Sale off</div>
  <div className='col'>
    <hr style={{color:"grey"}}/>
  </div>
 </div> 
<div className='row'>
  <div className='col-12 '>
  <p className='justify-content-center align-items-center text-center parastyle'>gdhfgdjhdj hjfihirj hjfvjdfj knkjk kjhiiojoi</p>
  
  </div>
 
</div>
  




 
</div>
<div class="container">
        <div class="row">
          <div class="col-lg-1"></div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="card cardStyle">
      <img src="\assets\image-20.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text parastyle">Wooden container bowl</p>
        <p> $ 96 <span>hhbj</span></p>
      </div>
    </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="card cardStyle">
      <img src="\assets\image-2.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text parastyle">Wooden container bowl</p>
        <p> $ 96 <span>hhbj</span></p>
      </div>
    </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="card cardStyle">
      <img src="\assets\image-3.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text parastyle">Wooden container bowl</p>
        <p> $ 96 <span>hhbj</span></p>
      </div>
    </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="card cardStyle">
      <img src="\assets\image-22.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text parastyle">Wooden container bowl</p>
        <p> $ 96 <span>hhbj</span></p>
      </div>
    </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <div class="card cardStyle">
      <img src="\assets\image-35.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text parastyle">Wooden container bowl</p>
        <p> $ 96 <span>hhbj</span></p>
      </div>
    </div>
            </div>
        </div>
    </div>





    <div class="container">
        <div class="row">
          <div class="col-lg-1"></div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                <div class="card">
                <div class="card cardStyle gx-1" >
      <img src="\assets\image-12.jpg" class="card-img-top" alt="..."/>
     
    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                <div class="card">
                <div class="card cardStyle gx-1"  >
      <img src="\assets\image-13.jpg" class="card-img-top" alt="..."/>
     
    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                <div class="card">
                <div class="card cardStyle gx-1" >
      <img src="\assets\image-14.jpg" class="card-img-top" alt="..."/>
     
    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                <div class="card">
                <div class="card cardStyle gx-1"  >
      <img src="\assets\image-15.jpg" class="card-img-top" alt="..."/>
     
    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                <div class="card">
                <div class="card cardStyle gx-1"  >
      <img src="\assets\image-16.jpg" class="card-img-top" alt="..."/>
     
    </div>
                </div>
            </div>
        </div>
    </div>



<div class="container hrText" >

 <div className='row p-0'>
  <div className='col'>
    <hr className='hrcolor'/>
  </div>
  <div className='col-sm-6 text-center trendproduct'>Trending Products</div>
  <div className='col'>
    <hr className='hrcolor'/>
  </div>
 </div> 
<div className='row'>
  <div className='col-12 '>
  <p className='justify-content-center align-items-center text-center parastyle'>gdhfgdjhdj hjfihirj hjfvjdfj knkjk kjhiiojoi</p>
  
  </div>
 
</div>
  




 
</div>
<div class="container card-container">
<div class="row ">
 
   <div class="col-12 col-md-6 col-lg-4"> 
        <div class="card cardStyle  card-mobile">
          
       <img src="\assets\image-9.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <p class="card-text" parastyle>Wooden contsiner bowl</p>
    <p class="card-text parastyle"> $ 96 <span class="card-text parastyle">hhbj</span></p>
   
  </div>


        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-4">
      <div class="card cardStyle  card-mobile">
          
          <img src="\assets\image-10.jpg" class="card-img-top" alt="..."/>
     <div class="card-body">
     <p class="card-text parastyle">Wooden contsiner bowl</p>
    <p class="card-text parastyle"> $ 96 <span class="card-text parastyle">hhbj</span></p>
     </div>
   
   
           </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
      <div class="card cardStyle  card-mobile">
          
          <img src="\assets\image-11.jpg" class="card-img-top" alt="..."/>
     <div class="card-body">
     <p class="card-text parastyle">Wooden contsiner bowl</p>
    <p class="card-text parastyle"> $ 96 <span class="card-text parastyle">hhbj</span></p>
     </div>
   
   
           </div>
      </div>
     
     
      
      </div>
      
      </div>
<div className="container">
  
      <div class="row justify-content-center">
      
        <hr className='hrwidth' />
      
      </div>
      <div className="row justify-content-center text-center p-5">

        <h1>Get discount info</h1>

        <p className='parastyle'>
          jbhjbkjnhjkljlkwdl jdhffedfkjedkj jkdnkjkje jhdeh vbhjgjgkhj vhgjhkj hjjhjhh
        </p>
        <p className='parastyle'>bvbhbvnb n nm m jnjknjknnnnnnj</p>
      </div>

      <div className="row justify-content-center text-center p-5">
      <p className='parastyle'>bvbhbvnb n nm m jnjknjknnnnnnj</p>
      <hr className='hrwidth' />
      <div class="text-center">
  <button class="caroset-button bg-white">DISCOVER NOW</button>
</div>
    </div>


     
      </div>

    </div>

    <div className="row bg-black footer">

<div className="col-sm-2 pt-5"></div>

<div className="col-sm-4 pt-5">
  <img src='\assets\image-18.png'/>
  
  <p class="mt-2 parastyle">bjknkjnk</p>
  <p className='parastyle'>hbjhjkjnk</p>
 
 
 

    <p  className='parastyle'>jkgk</p>
    <p  className='parastyle'>kjvhfkjg</p>
    <p  className='parastyle'>jhfkjh</p>
  
</div>
<div className="col-sm-2 pt-5">
  <h6>hjhgjh</h6>
  <p  className='parastyle'>jhjh</p>
  <p  className='parastyle'>hgjhbj</p>
  <p  className='parastyle'>nbjnj</p>
  <p  className='parastyle'>hjkhkj</p>
  <p  className='parastyle'>bnkjnkj</p>
</div> 
<div className="col-sm-2 pt-5">
<h6>hjhgjh</h6>
<p  className='parastyle'>jhjh</p>
  <p  className='parastyle'>hgjhbj</p>
  <p  className='parastyle'>nbjnj</p>
  <p  className='parastyle'>hjkhkj</p>
  <p  className='parastyle'>bnkjnkj</p>


</div>
<div className="col-sm-2 pt-5"></div>


<hr />

<div className="row">
<div className="col-sm-2 pt-5"></div>
  <div className="col-sm-4">
    fhdhfdkjkdf
  </div>
  <div className="col-sm-4">
    fhdhfdkjkdf
  </div>
  <div className="col-sm-2 pt-5"></div>
</div>
</div>

</div>
    </>
  )
}
