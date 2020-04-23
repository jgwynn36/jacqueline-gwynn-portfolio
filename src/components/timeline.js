import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                      <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Software Engineer <span>2019-present</span></h2>
                        <p>Motivating team member on an full stack agile team. I contribute to the development of applications on the squad with an expertise in code quality. Leaning in to learn Java to support our API development and helping the team move UI changes from ideas to customers quicker is my primary objective.  Recently I have started to study for the AWS Developer certification.  I believe this certification will help me with making changes for my company within the cloud. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer in Test <span>2017-2019</span></h2>
                        <p> A large portion of my responsibility is to inject quality into the development lifecycle early and educate others on the team members of the importance of quality within development.  I currently spend most of my time as a full stack engineer on the team writing code to automate the test and building sound regression suites to ensure that our end customers receive a highly functional application. I am also responsible for looking end-to-end as my current team owns UIs and APIs experiences.  I participate within writing the code for UI components and backup scrum master when needed.</p>
                      </div>
                    </div>
                  </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Quality Assurance Engineer <span>2012-2017</span></h2>
                        <p>I was a Quality Assurance Engineer for 5 + years. I provided insight to testing standards and triage defects with the team.  My passion for being client obsessed allowed me to help team build quality in the process quicker and deliver solid test plans. During this time I learned how to automate to help with regression needs and severed as a subject matter expert for new hires on our products.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>UNC Chapel Hill BootCamp Graduate <span>2018-2019</span></h2>
                        <p>I recently completed a full stack developer engineer program offered at UNC Chapel Hill.  During this intense 6 month boot camp I gained hands on experience with frontend and backend development.  I have learned node, javascript, SQL, mongoDB, heroku, and react.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <li> Masters in Information Systems</li>
                        <li> Masters in Business Adminstration - Human Resources Management</li>
                        <li> Bachelors in Business Administration - Finance</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
