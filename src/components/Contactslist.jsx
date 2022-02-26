import React from 'react'
import Contact from './Contact'

const contacts = [
    {
        id: "1",
        name: "Travis Lee",
        number: "111-111-1111",
        image: "https://www.goodfreephotos.com/albums/people/old-man-face-portrait.jpg",
    },
    {
        id: "2",
        name: "Porter Jefferson",
        number: "111-111-1111",
        image: "https://jooinn.com/images/smiling-young-man-2.png",
    },
    {
        id: "3",
        name: "Astrid Christine",
        number: "111-111-1111",
        image: "https://i.pinimg.com/736x/fe/0e/a7/fe0ea7699d5fb9325169efe890455f74.jpg",
    },
    {
        id: "4",
        name: "Hammy Orback",
        number: "111-111-1111",
        image: "https://wallpaperset.com/w/full/f/d/f/314824.jpg",
    },
    {
        id: "5",
        name: "Lisa Anne",
        number: "111-111-1111",
        image: "https://www.goodfreephotos.com/albums/people/woman-in-white-shirt-holding-up-bitcoin.jpg",
    },
]

function Contactslist() {
    return (
        <div className='Contactslist'>
            <div className="title">
                <h1>Family Contacts</h1>
            </div>
            {
                contacts.map(contact => {
                    return <Contact key={contact.id} name={contact.name} number={contact.number} image={contact.image} />
                })
            }
        </div>
    )
}

export default Contactslist
