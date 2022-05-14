import React, { Component } from "react";
import "./classes.css";
import Classes from "../..//components/yourClasses/yourClasses.component.js";
import Events from "../..//components/events/events.component.js";
import News from "../..//components/news/news.component.js";
import Headerbar from "../..//components/headerbar/HeaderTaskbar.js";
import Sidebar from "../..//components/sidebar/sidebar.component.js";
import DashboardCalendarComponent from "../..//components/calendar/dashboardCalendar.component.js";
import Picture from "../../assets/createPicture.png";
import profile from "../../assets/profile.png";
import classes from "../../assets/classes.png";
import scheduling from "../../assets/scheduling.png";
import community from "../../assets/community.png";
import mailbox from "../../assets/mailbox.png";
import achievements from "../../assets/achievements.png";
import socialInitiatives from "../../assets/Welfare.png";
import settings from "../../assets/settings.png";
import dashboard from "../../assets/dashboard.png";
import { Redirect } from "react-router-dom";
import AllClassList from "../..//components/Classes-Student/enrollClasses.component.js";

let headerItems = { link: "/profile", title: "Курс по информатике", profileImg: profile };

let navItems = [
  { id: 1, link: "/dashboard", imgSrc: dashboard, title: "Личный кабинет" },
  { id: 2, link: "/allclasslist", imgSrc: classes, title: "Классы" },
  { id: 3, link: "/schedule", imgSrc: scheduling, title: "Планирование" },
  { id: 4, link: "/discussionList", imgSrc: community, title: "Сообщество" },
  { id: 5, link: "/messageuser", imgSrc: mailbox, title: "Чат" },
  {
    id: 6,
    link: "/socialinitiatives",
    imgSrc: socialInitiatives,
    title: "Social Initiatives"
  },
];

class CoursePage extends Component {
    constructor(props) {

        super(props);

        this.state = {
         thems: []
        };
    }

    render() {
      const roules = localStorage.getItem('usertype');
    return (
      <React.Fragment>
        <Sidebar books={navItems} />
        <Headerbar icons={headerItems} />
        <div class="box-2">
            {roules !== 'student' ? <div><div>вы учитель</div>
                <div>
                    <div>Общие материалы</div>
                    <div>Рабочая программа</div>
                    <div>Конспект лекций</div>
                </div>
                <div>
                    <div>Модуль 1 «Теоретические основы управления персоналом»</div>
                    <div>Занятие 1</div>
                    <div>Занятие 1</div>
                    <div>Занятие 1</div>
                    <div>Тест 1</div>
                </div>
                <div>
                    <div>Модуль 2 «Теоретические основы управления персоналом»</div>
                    <div>Занятие 1</div>
                    <div>Занятие 1</div>
                    <div>Занятие 1</div>
                    <div>Тест 1</div>
                </div>





            </div> :<div>вы студент</div>}
        </div>
      </React.Fragment>
    );
  }
}

export default CoursePage;
