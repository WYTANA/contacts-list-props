import React from 'react'

// TODO: Pass down props as a parameter and take the parts of object you pass down to dyanmically create a unique contact for each component

function Contact(props) {
    return (
        <div className='contactContainer'>
            <div className="imageContainer">
                <img src={props.image} alt=""></img>
            </div>

            <div className="contactInfo">
                <h2>{props.name}</h2>
                <h2>{props.number}</h2>
            </div>
        </div>
    )
}

export default Contact

// return (
//     <div className='contactContainer'>
//         <div className="imageContainer">
//             <img src="https://economictimes.indiatimes.com/thumb/msid-84588036,width-1200,height-900,resizemode-4,imgsize-109325/elon-musk.jpg?from=mdr"alt=""></img>
//         </div>

//         <div className="contactInfo">
//             <h2>Elon Musk</h2>
//             <h2>1-888-518-3752.</h2>
//         </div>
//     </div>