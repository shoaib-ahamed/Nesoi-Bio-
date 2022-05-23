import axios from "axios";
import React, { Component } from 'react';
import Lottie from 'react-lottie';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import form from '../../assets/home/form.svg';
import Hero from '../../assets/home/hero.png';
import componentTwo from '../../assets/home/Instant.png';
import buildIdentityAndPrototypeLottie from '../../assets/home/lottie/build-your-identity.json';
import getInTouchLottie from '../../assets/home/lottie/get-in-touch.json';
import buildingWebsiteLottie from '../../assets/home/lottie/start-building-your-website.json';
import thankYouLottie from '../../assets/home/lottie/thank-you.json';
import viewServiceLottie from '../../assets/home/lottie/view-our-services.json';
import workshopLottie from '../../assets/home/lottie/workshop.json';
import workshop from '../../assets/home/Provider.png';
import componentThree from '../../assets/home/sample-pricing.png';
import componentFour from '../../assets/home/Wellcheck.png';
import './Home.css';




Modal.setAppElement('#root')

class Home extends Component {

    constructor(props) {
        super(props);

        const date = new Date()
        const x = this.formatDate(date)
        const dateString = x.toString()

        this.state = {
            name: '',
            email: '',
            company: '',
            description: '',
            budget: '',
            date: dateString,
            modal: false,
            geoLocation: [],
            reference: ""
        }

        this.scrollRef = React.createRef()
        this.scrollViewSection = this.scrollViewSection.bind(this);

    }

    scrollViewSection() {
        this.scrollRef.current.scrollIntoView({behavior: "smooth"})
    }

    formatDate(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    }



    // handleCalendly = () => {
    //     window.Calendly.initPopupWidget({url: 'https://calendly.com/greelab/discovery-workshop-booking'});
    //     return false
    // }

    handleInputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleInputEmailAddress = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleInputCompanyName = (event) => {
        this.setState({
            company: event.target.value
        })
    }

    handleInputDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleInputBudget = (event) => {
        this.setState({
            budget: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        axios.post('https://api.greelab.com/tasks', data)
            .then(() => {
                this.setState({modal: true})
                this.homeForm.reset()
            })
            .catch(error => {
                console.log(error)
            })
    }

    modalClose = () => {
        this.setState({modal: false})
    }

    async componentDidMount() {
        await axios.get('https://geolocation-db.com/json/09068b10-55fe-11eb-8939-299a0c3ab5e5')
            .then((data) => {
                const json = data.data
                this.setState({geoLocation: json})
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {

        const lottieStyle = {
            display: 'inline-flex',
            width: '24px',
            height: '24px',
            overflow: 'visible',
            margin: '0 12px 0 0',
            color: '#F4F4F4'
        }

        const formLottie = {
            display: 'inline-flex',
            width: '40px',
            height: '40px',
            overflow: 'visible',
            margin: '0 0 0 12px'
        }

        const thankYouLottieStyle = {
            width: '100px',
            height: '100px',
            display: 'inline-flex',
            overflow: 'visible',
        }

        const viewServicesLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: viewServiceLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }

        const buildIdentityAndPrototypeLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: buildIdentityAndPrototypeLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }

        const buildingWebsiteLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: buildingWebsiteLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }

        const workshopLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: workshopLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }
        const getInTouchLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: getInTouchLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }
        const thankYouLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: thankYouLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }



        return (
            <div style={{overflow: "hidden"}}>

                <section className="content-one">
                    <div className="container">
                        <div className="component-one">
                            <div className="row">
                                <div className="col-lg-5 d-hide">
                                    <img src={Hero} alt="Gree Lab" />
                                </div>
                                <div className="col-lg-7">
                                    <div className='textarea'>
                                        <h1>You’re Not Alone We’re Here to Help</h1>
                                        <p>
                                        Access a wide range of effective traditional and complementary health therapies. Our approach  cares for your overall well-being, holistically.
                                        </p>
                                        <button className="btn" onClick={this.scrollViewSection}>
                                            Talk to a Therapist
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-show">
                                    <img src={Hero} alt="Gree Lab" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-two" ref={this.scrollRef}>
                    <div className='container'>
                        <div className="component-two-three-four">
                            <div className="row">
                                <div className="col-lg-5">
                                    <img src={componentTwo} alt="Gree Lab" />
                                </div>
                                <div className="col-lg-7 ">
                                    <div className='textarea'>
                                        <h2>Heal from the Comfort of <br/> Your Home</h2>
                                        <p>
                                        Steer away from anxiety, depression, or stress. Get the help that you need when you need it. Schedule a session, or start instantly.
                                        </p>
                                        <Link to='/form' >
                                            <button className="btn" name="buildYourIdentity" onClick="">
                                                Starts Therapy Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-three">
                    <div className='container'>
                        <div className="component-two-three-four">
                            <div className="row">
                                <div className="col-lg-5 d-hide">
                                    <img src={componentThree} alt="Gree Lab" />
                                </div>
                                <div className="col-lg-7">
                                    <div>
                                        <h2>Simple Pricing for Better Mental Health</h2>
                                        <p>
                                        We have special plans to improve and track the health of your loved-ones. You can also choose a care management package for your organization.
                                        </p>
                                        <Link to='/form'>
                                            <button className="btn">
                                                
                                                Plan Your Care
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-show">
                                    <img src={componentThree} alt="Gree Lab" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-four">
                    <div className='container'>
                        <div className="component-two-three-four">
                            <div className="row">
                                <div className="col-lg-5">
                                    <img src={componentFour} alt="Gree Lab" />
                                </div>
                                <div className="col-lg-7">
                                    <div className='textarea'>
                                        <h2>Practice “Preventative Self-Care” </h2>
                                        <p>
                                        How are you feeling recently? Are you content with your life? When was the last time you did something nice for yourself? Take our survey to get a free Wellness Score and custom recommendations.
                                        </p>
                                        <Link to='/form'>
                                            <button className="btn">
                                                
                                                Wellness Survey
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-five">
                    <div className='container'>
                        <div className="component-five">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Secure, HIPAA Compliant Services</h2>
                                    <div className="quote">
                                        <i>
                                        Using your Wellness Survey results, we recommend providers best qualified to address your goals. We share your information with only the trusted therapist you choose.
                                        </i>
                                    </div>

                                    <div className="project-content">
                                        <div className="project-process">
                                            <div className="d-flex mb-2">
                                                <h6>1</h6>
                                                <h3> Check-Up </h3>
                                            </div>
                                            <p>
                                            We take your screening data to provide a list of caregivers that can address your goals,
                                            </p>
                                        </div>
                                        <div className="project-process">
                                            <div className="d-flex mb-2">
                                                <h6>2</h6>
                                                <h3> Support </h3>
                                            </div>
                                            <p>
                                            Our support team communicates with you directly, and is available to help select your care provider.
                                            </p>
                                        </div>
                                        <div className="project-process">
                                            <div className="d-flex mb-2">
                                                <h6>3</h6>
                                                <h3> Guidance </h3>
                                            </div>
                                            <p style={{width: '100%'}}>
                                            Your provider keeps track of your information, and guides you to develop goals for optimal results.
                                            </p>
                                        </div>
                                        <div className="project-process border-right-0">
                                            <div className="d-flex mb-2">
                                                <h6>4</h6>
                                                <h3> Report </h3>
                                            </div>
                                            <p>
                                            Get a visualized progress report for tracking your goal status and assessment results.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tablet & Desktop Small Version */}

                                    <div className="project-content-sm">
                                        <div className="project-process">
                                             <div className="d-flex mb-2">
                                                <h6>1</h6>
                                                <h3 style={{fontSize: '8px'}}> Check-Up </h3>
                                            </div>
                                            <p>
                                            We take your screening data to provide a list of caregivers that can address your goals,
                                            </p>
                                        </div>
                                        <div className="project-process border-none">
                                            <div className="d-flex ">
                                                <h6>2</h6>
                                                <h3> Support </h3>
                                            </div>
                                            <p>
                                            Our support team communicates with you directly, and is available to help select your care provider.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="project-content-sm">
                                        <div className="project-process design">
                                            <div className="d-flex">
                                                <h6>3</h6>
                                                <h3> Guidance </h3>
                                            </div>
                                            <p style={{width: '100%'}}>
                                            Your provider keeps track of your information, and guides you to develop goals for optimal results.
                                            </p>
                                        </div>
                                        <div className="project-process border-right-0">
                                            <div className="d-flex mb-2">
                                                <h6>4</h6>
                                                <h3> Report </h3>
                                            </div>
                                            <p>
                                            Get a visualized progress report for tracking your goal status and assessment results.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-six">
                    <div className='container'>
                        <div className="component-six">
                            <div className="row">

                                <div className="col-lg-12">
                                    <h2>More Than A Cause</h2>

                                    <div className="team-member">
                                        <div className="text-center">
                                            <div className="rounded-picture">
                                                {/* <img src={ashraf} alt="ashraf" /> */}
                                            </div>
                                            <h3>Adam Parsons</h3>
                                            <p>CEO & Founder</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="rounded-picture">
                                                {/* <img src={ashraf} alt="ashraf" /> */}
                                            </div>
                                            <h3>Haroon Hyder</h3>
                                            <p>Medical Director</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="rounded-picture">
                                                {/* <img src={ashraf} alt="ashraf" /> */}
                                            </div>
                                            <h3>Eshadee</h3>
                                            <p>Therapy Coordinator</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="rounded-picture">
                                                {/* <img src={ashraf} alt="ashraf" /> */}
                                            </div>
                                            <h3>Kittikun</h3>
                                            <p>Wellness Coordinator</p>
                                        </div>
                                        <div className="text-center">
                                            <div  className="rounded-picture">
                                                {/* <img src={ashraf} alt="ashraf" /> */}
                                            </div>
                                            <h3>Vanessa Simons</h3>
                                            <p>Wellness Specialist</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='team-member-sm'>
                                            <div className="text-center">
                                                <div className="rounded-picture">
                                                    {/* <img src={ashraf} alt="ashraf" /> */}
                                                </div>
                                                <h3>Adam Parsons</h3>
                                                <p>CEO & Founder</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="rounded-picture">
                                                    {/* <img src={ashraf} alt="ashraf" /> */}
                                                </div>
                                                <h3>Haroon Hyder</h3>
                                                <p>Medical Director</p>
                                            </div>
                                        </div>
                                        <div className='team-member-sm'>
                                            <div className="text-center">
                                                <div className="rounded-picture">
                                                    {/* <img src={ashraf} alt="ashraf" /> */}
                                                </div>
                                                <h3>Eshadee</h3>
                                                <p>Therapy Coordinator</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="rounded-picture">
                                                    {/* <img src={ashraf} alt="ashraf" /> */}
                                                </div>
                                                <h3>Kittikun</h3>
                                                <p>Wellness Coordinator</p>
                                            </div>
                                        </div>
                                        <div className='team-member-sm'>
                                            <div className='text-center'>
                                            <div className='rounded-picture'>
                                                {/* <img src={ashraf} alt="ashraf" /> */}
                                            </div>
                                            <h3>Vanessa Simons</h3>
                                            <p>Wellness Specialist</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="quote">
                                        <i>
                                            “We are a team of medical, technology, and design profesionals dedicated to bringing you access to the latest advances in holistic bio-technology and life science.”
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="workshop">
                    <div className="container">
                        <div className='component-seven'>
                            <div className="row">
                                <div className="col-lg-7">
                                    <img src={workshop} alt="workshop" />
                                </div>
                                <div className="col-lg-5">
                                    <div>
                                        <h4>Want To Be A Therapy Provider?</h4>
                                        <h2>Join Our Provider Program</h2>
                                        <h5>Enhance your professional practice by offering your services on our platform</h5>
                                        <p>
                                            <button className="btn">
                                                
                                                Learn More
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='contact-form'>
                    <div className='container'>
                        <div className='component-eight'>
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <h2>Contact us</h2>
                                    <h5>Connect with our team & get updates</h5>
                                    <form onSubmit={this.handleSubmit} ref={(el) => this.homeForm = el}>
                                        <div className="mb-3">
                                            <input value={this.state.value} onChange={this.handleInputName} type="text" className="form-control" placeholder="Your name" required/>
                                        </div>
                                        <div className="mb-3">
                                            <input value={this.state.value} onChange={this.handleInputEmailAddress} type="email" className="form-control" placeholder="Your email" required/>
                                        </div>
                                        <div className="mb-3">
                                            <input value={this.state.value} onChange={this.handleInputCompanyName} type="text" className="form-control" placeholder="Location (City, State, Country)" />
                                        </div>
                                        <div className="mb-3">
                                            <textarea style={{marginBottom: 0}} value={this.state.value} onChange={this.handleInputDescription} rows="4" className="form-control" placeholder="How can we help you?"/>
                                        </div>
                                        <div className="submit-btn">
                                            <button type="submit" className="btn">Send</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='col-lg-5 d-show'>
                                    <img src={form} alt="idea"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <Modal
                        isOpen={this.state.modal}
                        shouldCloseOnOverlayClick={false}
                        onRequestClose = {() => this.setState({modal: false})}
                        style = {{
                            overlay: {
                                background: 'rgba(0, 0, 0, 0.55)',
                                zIndex: '1000'
                            },

                            content: {
                                background: '#0070C9',
                                borderRadius: '25px',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                width: "473px",
                                margin: 'auto',
                                height: '505px',
                                border: 'none',
                                paddingTop: '50px'
                            }
                        }}

                    >
                        <Lottie style={thankYouLottieStyle} options={thankYouLottieOptions}/>
                        <h1>Thank you for <br/> reaching out!</h1>
                        <p>A member of the Nesoi team <br/> will get back in touch with you as <br/> soon as possible.</p>
                        <Link to='/'>
                            <button className='btn' onClick={this.modalClose}>Okay</button>
                        </Link>
                    </Modal>
                </section>

            </div>
        )
    }
}

export default Home
