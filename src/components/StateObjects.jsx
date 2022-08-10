import React from 'react';

export default function StateObjects() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite === true ? "star-filled.png" : "star-empty.png";
    // console.log(starIcon)    

    function toggleFavorite() {
        setContact(function(prevContact) {
            return {
                ...prevContact,
                // this is spreading the whole of the prevContact object into the new Object
                // this is how we update State Objects
                isFavorite: !prevContact.isFavorite
                // this is flipping whatever the isFavorite boolean value was to the opposite boolean value
            }
        })
    }
    
    return (
            <div className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </div>
    )
}