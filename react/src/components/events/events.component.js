import React, {Component, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import {Redirect, useNavigate} from 'react-router-dom'
import './events.css'


const Events =()=> {
    const [courses,setCourses] = useState([]);
    const navigate = useNavigate();
   useEffect(()=>{
       axios.post(`http://127.0.0.1:8103/api/db_get_dashevents_of_student`, { 'student': localStorage.getItem('username') })
           .then(res => {
               const courses = res.data;
               setCourses( courses );
               console.log(localStorage.getItem('username'))
           })
   },[]);



    // classRedirect = () => {
    //     this.setState({
    //         redirect: true,
    //         component: 'class'
    //     })
    // }
    // eventRedirect = () => {
    //     this.setState({
    //         redirect: true,
    //         component: 'event'
    //     })
    // }
    //
    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //         if (this.state.component == "class") {
    //             return <Redirect to='/alleventList' />
    //         }
    //         if (this.state.component == "event") {
    //             return <Redirect to='/eventcreation' />
    //         }
    //     }
    // }


        return (
            <div>
                <Card.Title className="classCardTitleStyle">Ваши события</Card.Title>
                <div>
                    {courses.map(courses =>
                        <Card className='EventCards' bg="light" text="black" style={{ height: '14rem', width: '14rem' }}>
                            {/*{this.renderRedirect()}*/}
                            <Card.Header className='EventClassHeader' style={{ height: '10rem', color: 'white', background: 'black' }}></Card.Header>
                            <Card.Body>
                                <Card.Title>{courses}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                <Card className='courseCards' onClick={()=>{navigate('/alleventList')}} bg="light" text="black" style={{ height: '14rem', width: '14rem' }}>
                            {/*{this.renderRedirect()}*/}
                            <Card.Header className='addEventHeader' style={{ height: '10rem', color: 'white', background: 'black' }}></Card.Header>
                            <Card.Body>
                                <Card.Title>Присоединиться к событию</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='courseCards' onClick={()=>{navigate('/eventcreation')}} bg="light" text="black" style={{ height: '14rem', width: '14rem' }}>
                            {/*{this.renderRedirect()}*/}
                            <Card.Header className='createEventHeader' style={{ height: '10rem', color: 'white', background: 'black' }}></Card.Header>
                            <Card.Body>
                                <Card.Title>Создать новое событие</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
            </div>
            </div>
        )

}
export default Events;