import React, { Component } from "react";
import "./dashboard.css";
import Classes from "../..//components/yourClasses/yourClasses.component.js";
import InstructorClasses from "../..//components/yourClasses/instructorClasses.component.js";
import Events from "../..//components/events/events.component.js";
import News from "../..//components/news/news.component.js";
import Headerbar from "../..//components/headerbar/HeaderTaskbar.js";
import Sidebar from "../..//components/sidebar/sidebar.component.js";
import DashboardCalendarComponent from "../..//components/calendar/dashboardCalendar.component.js";
import profile from "../../assets/profile.png";
import classes from "../../assets/classes.png";
import scheduling from "../../assets/scheduling.png";
import community from "../../assets/community.png";
import mailbox from "../../assets/mailbox.png";
import socialInitiatives from "../../assets/Welfare.png";
import dashboard from "../../assets/dashboard.png";
import { Redirect } from "react-router-dom";

let headerItems = { link: "/profile", title: "Личный кабинет", profileImg: profile };

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
    title: "Рекомендации"
  }
];

class DashPage extends Component {
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    if (localStorage.getItem("usertype") == "student") {
      return (
        <React.Fragment>
          <Sidebar books={navItems} />
          <Headerbar icons={headerItems} />
          <section class="container-dash">
            <div class="left-half">
              <article>
                <div>
                  <DashboardCalendarComponent />
                </div>
                <div class="classesbox">
                  <Classes />
                </div>
              </article>
            </div>
            <div class="right-half">
              <article>
                <div>
                  <Events />
                </div>
                <div>
                  <News />
                </div>
              </article>
            </div>
          </section>
        </React.Fragment>
      );
    }
    if (localStorage.getItem("usertype") == "instructor") {
      return (
        <React.Fragment>
          <Sidebar books={navItems} />
          <Headerbar icons={headerItems} />
          <section class="container-dash">
            <div class="left-half">
              <article>
                <div>
                  <DashboardCalendarComponent />
                </div>
                <div class="classesbox">
                  <InstructorClasses />
                </div>
              </article>
            </div>
            <div class="right-half">
              <article>
                <div>
                  <Events />
                </div>
                <div>
                  <News />
                </div>
              </article>
            </div>
          </section>
        </React.Fragment>
      );
    }
  }
}

export default DashPage;
