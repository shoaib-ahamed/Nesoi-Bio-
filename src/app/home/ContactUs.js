// import axios from "axios";
// import React, { useState } from "react";
// import ReactModal from 'react-modal';
// import { Link } from "react-router-dom";
// import back from "../../assets/home/back.svg";
// import form from '../../assets/home/form.svg';
// import './Home.css';

// ReactModal.setAppElement('#root')

// const ContactUs = () => {

//     const initialState = { name: '', email: '', address: '', helpMsg: ''}
//     const [userData, setUserData] = useState(initialState)
//     const { name, email, address , helpMsg } = userData

//     const [modal , setModal] = useState(false)

//     const handleChangeInput = e => {
//         const {name, value} = e.target
//         setUserData({...userData, [name]:value})
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         axios.post('https://api.greelab.com/tasks', userData)
//             .then(() => {
//                 setModal(true)
//                 this.OtherForm.reset()
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }


//     const formatDate = (date) => {
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let ampm = hours >= 12 ? 'pm' : 'am';
//         hours = hours % 12;
//         hours = hours ? hours : 12; // the hour '0' should be '12'
//         minutes = minutes < 10 ? '0'+minutes : minutes;
//         let strTime = hours + ':' + minutes + ' ' + ampm;
//         return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
//     }
//   return (
//     <div>
//         <section className='contact-form'>
//                     <div className='container'>
//                         <div className='component-eight'>
//                             <div className='row'>
//                                 <div className='col-lg-7'>
//                                     <Link to='/'><button className="btn back-btn"><span><img className='back-arrow' src={back} alt="back"/></span> Back</button></Link>
//                                     <h2>Contact us</h2>
//                                     <h5>Connect with our team & get updates</h5>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="mb-3">
//                                             <input value={name} name="name" onChange={handleChangeInput} type="text" className="form-control" placeholder="Your name" required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <input value={email} name="email" onChange={handleChangeInput} type="email" className="form-control" placeholder="Your email" required />
//                                         </div>
//                                         <div className="mb-3">
//                                             <input name="companyName" value={address} onChange={handleChangeInput} type="text" className="form-control" placeholder="Location (City, State, Country)" />
//                                         </div>
//                                         <div className="mb-3">
//                                             <textarea style={{marginBottom: 0}} value={helpMsg} name="project" onChange={handleChangeInput} rows="4" className="form-control" placeholder="How can we help you?" />
//                                         </div>
//                                         <div className="submit-btn">
//                                             <button type="submit" className="btn" >Send</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                                 <div className='col-lg-5 d-show'>
//                                     <img src={form} alt="idea"/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* <section>
//                     <ReactModal
//                         isOpen={setModal(true)}
//                         shouldCloseOnOverlayClick={false}
//                         onRequestClose = {() => setModal(false)}
//                         style = {{
//                             overlay: {
//                                 background: 'rgba(0, 0, 0, 0.35)',
//                                 zIndex: '1000'
//                             },

//                             content: {
//                                 background: '#0070C9',
//                                 borderRadius: '25px',
//                                 textAlign: 'center',
//                                 color: '#FFFFFF',
//                                 width: "473px",
//                                 margin: 'auto',
//                                 height: '505px',
//                                 border: 'none',
//                                 paddingTop: '50px'
//                             }
//                         }}

//                     >
                      
//                         <Link to='/'>
//                             <button className='btn' onClick={setModal(false)}>Okay</button>
//                         </Link>
//                     </ReactModal>
//                 </section> */}
//     </div>
//   )
// }

// export default ContactUs