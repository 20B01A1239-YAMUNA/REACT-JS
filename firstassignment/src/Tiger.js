import image from './images/tiger.jpg'
function Tiger(){
    return(
       <div className="div1"> 
        <div className="div2">
            <img src={image}/>
            <div className="div3">
            <h3>Tiger</h3>
            <p> Tigers are the largest cat species in the world reaching<br/> up to 3.3 meters in length and weighing up to 670 pounds.

The Bengal tiger is the most common tiger.
Tigers live between 20-26 years in the wild</p>
<h5>SHARE</h5><h5>&nbsp;&nbsp;&nbsp;LEARN MORE</h5></div>
        </div>
     </div>
    )
 }
 export default Tiger;