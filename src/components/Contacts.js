import React, { Component } from 'react';
import Contact from "./Contact"


export default class Contacts extends Component {

    state = {
        contacts :[
            {
                id:1,
                nom:"Brad",
                email: "zeze@fdfdf",
                tel: "0484584"
            },
            {
                id:2,
                nom:"Pilu",
                email: "zhhhhhhhhhh@pm",
                tel: "5555"
            },
            {
                id:3,
                nom:"Eden",
                email: "buuuuuuuuuuuuuuu@6666",
                tel: "04897522225"
            },
        ]
    }


    deleteContact = (id) =>{
        console.log(id)
        // Filtrer le state
        let newContacts = this.state.contacts.filter(contact =>
            contact.id !== id);

            this.setState({
                contacts: newContacts
            })
    }
    

    render() {
        return (
            <div>
                {this.state.contacts.map(contacts =>(
                    <Contact 

                    key={contacts.id}
                    nom={contacts.nom}
                    email={contacts.email}
                    tel={contacts.tel}
                    deleteClickHandler = {this.deleteContact.bind(this,contacts.id)}
                    
                    />
                ))}
            </div>
        )
    }
}

