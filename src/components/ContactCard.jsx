import React from 'react';

const ContactCard = () => {
    return (
        <>
            <div className="card">
                <div className="card-block">
                    <h2>Contact</h2>
                    <form action="" className="reveal-content">
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="5" placeholder="Enter your message"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className=" btn btn-primary">Send message</button>
                    </div> 
                    </form>
                </div>
            </div> 
        </>
    )
}

export default ContactCard
